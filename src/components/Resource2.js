import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';
import { Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Wspace from './Wspace'
import Wspace2 from './Wspace2'

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

const Resources1 = (props) => {
    const classes = useStyles();

        return(
            
            <div className="position_component_team">
                <Grid md={6} lg={6}>
                    <Typography className={classes.title} align='center' variant='h3'>Recursos</Typography>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Clases de inglés para estudiantes de la comunidad LGBTQ+</Typography>
                    <Wspace2/>
                    <Grid >
                    <p  class="pservices text-justify">
                    En el siguiente video la profesora Ana Venegas te cuenta sobre sus estrategias para hacer clases de inglés con estudiantes de la comunidad LGBTQ+. Este es un extracto de la entrevista. Puedes descargar 
<Router>
                            <Link to="/Transcripción entrevista completa Profesor Felipe Martínez.pdf" target="_blank" download> aquí</Link>
                        </Router> la transcripción de la entrevista completa.

                        
                    </p>
                    <Wspace2/>
                    </Grid>
                    <Grid container style={{ justifyContent: "center"} }>
                            <ReactPlayer url='https://www.youtube.com/watch?v=VkzS0rR4nyY' />
                    </Grid>

                </Grid>
                
                <Wspace/>
                <Grid container item md={6} lg={6}>

                </Grid>
                <Grid  md={6} lg={6}>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Profesora Ana Venegas</Typography>
                    <Grid >
                    <Wspace2/>
                    <p  class="pservices text-justify">
                    Ana Venegas, es licenciada en Educación y Profesora de Comunicación en Lengua Inglesa de la Universidad Austral de Chile (2016). Actualmente está cursando el Programa de Magister en Inclusión e Interculturalidad en la Universidad San Sebastián (2019). Desde el año 2017 se desempeña como Profesora de inglés como lengua extranjera para diferentes carreras de la Universidad Austral de Chile (Centro de Idiomas). 
                    </p>
                    </Grid>
                    
                    <p md={4} lg={4} class="pservices text-justify">
                    Se ha desempeñado como tutora NEE en la Universidad Austral en dos ocasiones, donde trabajó adaptando metodologías basadas en los diferentes estilos de aprendizaje, orientadas a la adquisición del inglés como lengua extranjera en la Unidad de Apoyo al Aprendizaje para estudiantes de Pregrado de la Escuela de Pedagogía en Comunicación en Lengua Inglesa (2012 – 2016). Estuvo encargada de guiar, revisar y editar la tesis de estudiantes con necesidades especiales en la Unidad de Apoyo al Aprendizaje de Estudiantes de Pregrado de la Escuela de Pedagogía en Comunicación en Lengua Inglesa (2016 – 2017).
                    </p>
                    <Grid>
                    <a rel="pagina principal" href="https://www.linkedin.com/in/felipe-mart%C3%ADnez-corona/" md={6} xs={6} >https://www.linkedin.com/in/felipe-mart%C3%ADnez-corona/</a> 
                    </Grid>
                     
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Archivos descargables</Typography>
                    <Wspace2/>
                    <Grid container style={{ justifyContent: "center"}}>
                        <Router>
                            <Link to="/Transcripción Entrevista Completa Profesora Ana Venegas.pdf" target="_blank" download>•	Transcripción Entrevista Completa Profesora Ana Venegas</Link>
                        </Router>
                    </Grid>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Recursos Sugeridos</Typography>
                    <Wspace2/>
                    <Grid container class="pservices text-justify" >
                    El profesor Felipe Martínez recomienda los siguientes recursos para apoyar el proceso de enseñanza-aprendizaje de estudiantes Sordos en el aula de inglés.
                    </Grid>
                    <Grid container >
                    •	American Sign Language (ASL): 
                    <a rel="pagina principal" href="https://www.lifeprint.com/asl101/lessons/lesson01.htm " md={6} xs={6} >https://www.lifeprint.com/asl101/lessons/lesson01.htm </a>
                    </Grid>
                    <Grid container >
                    •	Diccionario: 
                    <a rel="pagina principal" href="http://asluniversity.com/dictionary.htm " md={6} xs={6} >http://asluniversity.com/dictionary.htm </a> 
                    </Grid>
                    <Grid container >
                    •	Videos: 
                    <a rel="pagina principal" href="https://www.youtube.com/watch?v=DaMjr4AfYA0&t=1s" md={6} xs={6} >https://www.youtube.com/watch?v=DaMjr4AfYA0&t=1s</a> 
                    </Grid>
                    <Grid container >
                    •	Lectura para Sordos (en español
                    <a rel="pagina principal" href="https://cultura-sorda.org/lectura-sencilla/" md={6} xs={6} >https://cultura-sorda.org/lectura-sencilla/</a> 
                    </Grid>
                    <Grid container >
                    •	Verbos in ASL: 
                    <a rel="pagina principal" href="https://www.youtube.com/watch?v=thdb-I-H9kE&t=30s" md={6} xs={6} >https://www.youtube.com/watch?v=thdb-I-H9kE&t=30s</a> 
                    </Grid>
                    <Grid container >
                    •	Imágenes de Google: 
                    <a rel="pagina principal" href="https://www.google.com/imghp?hl=en" md={6} xs={6} >https://www.google.com/imghp?hl=en</a> 
                    </Grid>
                    <Grid container >
                    •	Recursos visuals gratuitos (puzzles, crossword, etc): 
                    <a rel="pagina principal" href="https://busyteacher.org/" md={6} xs={6} >https://busyteacher.org/</a> 
                    </Grid>
                    <Grid container >
                    •	Pictoramas: 
                    <a rel="pagina principal" href="http://aulaabierta.arasaac.org/ " md={6} xs={6} >http://aulaabierta.arasaac.org/ </a> 
                    </Grid>
                    <Grid container >
                    •	Imágenes y evaluaciones interactivas: 
                    <a rel="pagina principal" href="https://quizlet.com/" md={6} xs={6} >https://quizlet.com/</a> 
                    </Grid>

                </Grid>
                

            </div>

        );
    }



export default Resources1;