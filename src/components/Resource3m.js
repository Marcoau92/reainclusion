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
            
            <div >
                <Grid md={6} lg={6}>
                    <Typography className={classes.title} align='center' variant='h3'>Recursos</Typography>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Tecnicas teatrales para estudiantes de inglés</Typography>
                    <Wspace2/>
                    <Grid >
                    <p  class="pservices text-justify">
                    En el siguiente video la profesora Amalia Ortiz de Zárate te cuenta sobre sus estrategias para hacer clases de inglés utilizando técnicas dramáticas. Este es un extracto de la entrevista. Puedes descargar 
<Router>
                            <Link to="/recursos_amalia_ortiz/Transcripción Entrevista Completa Profesora Amalia Ortiz de Zárate.pdf" target="_blank" download> aquí</Link>
                        </Router> la transcripción de la entrevista completa.

                        
                    </p>
                    <Wspace2/>
                    </Grid>
                    <Grid container style={{ justifyContent: "center"} }>
                            <ReactPlayer url='https://www.youtube.com/watch?v=UYS7E4mwDK0' />
                    </Grid>

                </Grid>
                
                <Wspace/>
                <Grid container item md={6} lg={6}>

                </Grid>
                <Grid  md={6} lg={6}>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Profesora Amalia Ortiz de Zárate Fernández</Typography>
                    <Grid >
                    <Wspace2/>
                    <p  class="pservices text-justify">
                    Amalia Ortiz de Zárate Fernández, es licenciada en Educación (1996) y Profesora de Comunicación en Lengua Inglesa (1999) de la Universidad Católica de Valparaíso. Es Doctora en Estudios de Género, Traducción y Teatro por la Universidad de Sevilla (2008). Ha trabajado como docente en la Isla Robinson Crusoe (1998-1999), como profesora instructora (2007-2008) y profesora auxiliar (2009-2014) en la Universidad Austral de Chile. Desde el 2014 a la fecha, se desempeña como docente asociada al Instituto de Lingüística y Literatura de la Universidad Austral de Chile.      
                    </p>
                    </Grid>
                    
                    <p md={4} lg={4} class="pservices text-justify">
                    Ha realizado estudios superiores de perfeccionamiento y entrenamiento en Teatro y Literatura (1999 - 2003) e Interpretación Actoral y Dramaturgia (2000 - 2003). Ha dirigido diversos proyectos relacionados con el uso de técnicas dramáticas en la enseñanza del inglés como lengua extranjera, entre los que destacan el Proyecto “Spanglish Theatre en tu Colegio”, el cual se ha podido realizar en cuatro ocasiones a través del Concurso Anual de Proyectos Dirección de Extensión UACh. 
                    </p>
                     
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Archivos descargables</Typography>
                    <Wspace2/>
                    <Grid container >
                        <Router>
                            <Link to="/recursos_amalia_ortiz/Transcripción Entrevista Completa Profesora Amalia Ortiz de Zárate.pdf" target="_blank" download>•	Transcripción Entrevista Completa Profesora Amalia Ortiz de Zárate</Link>
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