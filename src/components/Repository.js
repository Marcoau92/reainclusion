import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';
import { Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Wspace from './Wspace';


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
            <div className="position_component_team" justify="center">
                <Grid md={6} lg={6} style={{ justifyContent: "center"}}>
                <Typography className={classes.title} align='center' variant='h3'>Repositorio</Typography>
                </Grid>
                <Wspace/>
                <Grid md={6} lg={6} justify="flex-start">
                <p  class="pservices text-justify">
                A continuación podrás encontrar archivos descargables con investigaciones y propuestas para potenciar la inclusión de tus estudiantes. 
Gran parte de estos documentos corresponden a tesis de pregrado de profesores egresados de la carrera Pedagogía en Comunicación en Lengua Inglesa de la UACh.
Si quieres colaborar con tu propia investigación o propuesta, no dudes en contactarnos. También puedes hacernos llegar estudios o artículos de otros autores, siempre que sean de uso libre y gratuito.

                    </p>
                </Grid>
                <Wspace/>
                <Grid container style={{ justifyContent: "center"}} md={6} lg={6} >
                    <Router>
                        <Link to="/Igor Pérez_Tesis Final.pdf" target="_blank" download>•	 DEVELOPING CHILDREN’S SOCIO-AFFECTIVE AND COMMUNICATIVE SKILLS</Link>
                    </Router>
                </Grid>

            </div>

        );
    }



export default Repository;