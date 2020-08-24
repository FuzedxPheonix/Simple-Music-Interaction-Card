import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import coverImage from './snailhouse.jpg';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Collapse from '@material-ui/core/Collapse';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root : {
            flexGrow: 1
        },
        card: {
            height: 200,
            width: 400,
            display: 'inline-flex'
        },
        details: {
            display: 'flex',
            flexDirection: 'column'
        },
        cover: {
            height: 200,
            width: 200
        },
        content: {
            flex: '1 0 auto'
        }
    })
);


function App() {
  const classes = useStyles();
    const [checked, setChecked] = React.useState(false);
    const handleChange = () => {
        setChecked((prev) => !prev);
    };


  return (
     <Grid container className={classes.root}>
         <Grid item xs={12} spacing={2}>
             <Grid container justify="center" spacing={2}>

                 <Grid key="test" item>
                     <Card className={classes.card}>
                         <div className={classes.details}>
                             <CardContent className={classes.content}>
                                 <Typography component="h5" variant="h5">
                                     Pixel Galaxy
                                 </Typography>

                                 <Typography variant="subtitle1" color="textSecondary">
                                     Snail House
                                 </Typography>

                                 <FormControlLabel control={<Switch checked={checked} onChange={handleChange}/>} label="Show Music"/>

                             </CardContent>
                         </div>
                         <CardMedia className={classes.cover} image={coverImage} title="Snail house"/>
                     </Card>


                     <Collapse in={checked}>
                         <TableContainer component={Paper}>
                             <Table aria-label="Songs">
                                 <TableHead>
                                     <TableRow>
                                         <TableCell>
                                             Song
                                         </TableCell>

                                         <TableCell align="right">
                                             Play
                                         </TableCell>

                                         <TableCell align="right">
                                             Time
                                         </TableCell>
                                     </TableRow>
                                 </TableHead>
                                 <TableBody>
                                     <TableRow key="song">
                                         <TableCell component="th" scope="row">
                                             Snail House
                                         </TableCell>
                                         <TableCell align="right"><PlayArrowIcon></PlayArrowIcon></TableCell>
                                         <TableCell align="right">3:23</TableCell>

                                     </TableRow>
                                 </TableBody>
                             </Table>
                         </TableContainer>
                     </Collapse>
                 </Grid>

             </Grid>
         </Grid>
     </Grid>
  );
}

export default App;
