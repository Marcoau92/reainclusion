import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';
import { Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Wspace2 from './Wspace2'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title:{
      color:'#00b3c5',
      fontWeight: 'bold',
  
    },
    memberName:{
      fontWeight: 'bold',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
  const Welcome = (props) => {
    const classes = useStyles();
        return(
            <div>
                <Typography className={classes.title} align='center' variant='h3'>Inicio</Typography>
                <Wspace2/>
                <Grid container style={{ justifyContent: "center"} }>
                        <ReactPlayer width="533px" height="300px" url='https://www.youtube.com/watch?v=YT_xTZjZQmE&feature=youtu.be' />
                </Grid>

            </div>

        );
    }


export default Welcome;