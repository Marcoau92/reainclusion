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
      fontWeight: 'bold'
  
    },
    subtitle:{
        color:'#00b3c5',
        fontWeight: 'bold',
        fontSize: '20px'
    },
  }));

const Resources = (props) => {
    const classes = useStyles();

        return(
            
            <div>
                <Typography className={classes.title} align='center' variant='h2'>Recursos</Typography>
                <Typography className={classes.subtitle} align='center' variant='h1'>Clases de Inglés para estudiantes Sordos</Typography>

                <Grid container style={{ justifyContent: "center"} }>
                        <ReactPlayer url='https://www.youtube.com/watch?v=gbjXzE9AwMU&feature=youtu.be' />
                </Grid>
                <Grid container style={{ justifyContent: "center"}}>
                    <Router>
                        <Link to="/Recursos complementarios Felipe Martínez.docx" target="_blank" download>Recurso 1</Link>
                    </Router>
                </Grid>
                <Typography className={classes.subtitle} align='center' variant='h1'>Profesor Felipe Martínez Corona</Typography>
                <text>
                    Felipe Martínez Corona es licenciado en Educación y profesor de Comunicación en Lengua Ingles de la Universidad Austral de Chile (2011), tiene un Magister en Comunicación de la Universidad Austral de Chile (2019). Desde el año 2011 se desempeña como profesor adjunto en la Facultad de Filosofía y Humanidades de Universidad Austral de Chile, donde ha realizado clases para diversos cursos de pre y postgrado de la Universidad (Centro de Idiomas).
                </text>
                <text>
                    Ha colaborado en proyectos de investigación internos de la Universidad Austral como “Inglés, actuando el lenguaje” (2009) e “Inglés, atuando el lenguaje II” (2011) y Proyectos de Extensión Internos (UACh) como Spanglish theatre en tu colegio (2012), también dirigió la iniciativa English Conversation Club del Centro de Idiomas de la Universidad Austral de Chile (2015-2018).
                </text>

            </div>

        );
    }



export default Resources;