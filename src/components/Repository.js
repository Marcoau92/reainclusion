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
  
  const Repository = (props) => {
    const classes = useStyles();
        return(
            <div >
                <Typography className={classes.title} align='center' variant='h2'>Repositorio</Typography>
                <Grid md={12}>
                </Grid>
                <Grid container style={{ justifyContent: "center"}}>
                •	 
                    <Router>
                        <Link to="/Igor Pérez_Tesis Final.pdf" target="_blank" download>DEVELOPING CHILDREN’S SOCIO-AFFECTIVE AND COMMUNICATIVE SKILLS</Link>
                    </Router>
                </Grid>

            </div>

        );
    }



export default Repository;