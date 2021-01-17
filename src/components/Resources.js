import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';
import { Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title:{
      color:'#00b3c5',
      fontWeight: 'bold',
      font: 'Garamond Ligth Condensed'
  
    },
  }));

const Resources = (props) => {
    const classes = useStyles();

        return(
            
            <div>
                <Typography className={classes.title} align='center' variant='h2'>Recursos</Typography>
                <Grid container style={{ justifyContent: "center"} }>
                        <ReactPlayer url='https://www.youtube.com/watch?v=6aphi7R-JNY' />
                </Grid>
                <Grid container style={{ justifyContent: "center"}}>
                    <Router>
                        <Link to="/curriculum2020(1).docx" target="_blank" download>Recurso 1</Link>
                    </Router>
                </Grid>

            </div>

        );
    }



export default Resources;