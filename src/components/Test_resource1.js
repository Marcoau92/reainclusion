import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Link } from 'react-router-dom';
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
                <Grid container justifyContent='flex-start'  md={6} lg={6}>
                <Link to='/testresources'>Atrás</Link>
                </Grid>
                
                <Grid >
                    <Typography className={classes.title} align='center' variant='h3'>Recursos</Typography>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Clases de inglés para estudiantes Sordos</Typography>
                    <Wspace2/>
                    <Grid item container justifyContent="center"              
            direction="row">
        <Grid item container md={6} lg={6}justifyContent="center"              
            direction="row">
                    <Grid container justify='center' alignItems='center'>
                    <p  class="pservices text-justify">
                    En el siguiente video el profesor Felipe Martínez te cuenta sobre sus estrategias para hacer clases de inglés con estudiantes Sordos en un aula regular. 
Este es un extracto de la entrevista. Puedes descargar
<Router>
                            <Link to="/recursos_felipe_martines/Transcripción entrevista completa Profesor Felipe Martínez.pdf" target="_blank" download> aquí</Link>
                        </Router> la transcripción de la entrevista completa.

                        
                    </p>
                    <Wspace2/>
                    </Grid>
                    <Grid container style={{ justifyContent: "center"} }>
                            <ReactPlayer url='https://www.youtube.com/watch?v=MAA1RXF6Rv4' />
                    </Grid>

                
                
                <Wspace/>
                <Grid  >
                    <Typography className={classes.subtitle} align='center' variant='h1'>Profesor Felipe Martínez Corona</Typography>
                    <Grid >
                    <Wspace2/>
                    <p  class="pservices text-justify">
                        Felipe Martínez Corona es licenciado en Educación y profesor de Comunicación en Lengua Ingles de la Universidad Austral de Chile (2011), tiene un Magister en Comunicación de la Universidad Austral de Chile (2019). Desde el año 2011 se desempeña como profesor adjunto en la Facultad de Filosofía y Humanidades de Universidad Austral de Chile, donde ha realizado clases para diversos cursos de pre y postgrado de la Universidad (Centro de Idiomas).
                    </p>
                    </Grid>
                    
                    <p md={4} lg={4} class="pservices text-justify">
                        Ha colaborado en proyectos de investigación internos de la Universidad Austral como “Inglés, actuando el lenguaje” (2009) e “Inglés, atuando el lenguaje II” (2011) y Proyectos de Extensión Internos (UACh) como Spanglish theatre en tu colegio (2012), también dirigió la iniciativa English Conversation Club del Centro de Idiomas de la Universidad Austral de Chile (2015-2018).
                    </p>
                    <Grid>
                    <a rel="pagina principal" href="https://www.linkedin.com/in/felipe-mart%C3%ADnez-corona/"  >https://www.linkedin.com/in/felipe-mart%C3%ADnez-corona/</a> 
                    </Grid>
                     
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Archivos descargables</Typography>
                    <Wspace2/>
                    <Grid container justifyContent='flex-start'>
                        <Router>
                            <Link to="/recursos_felipe_martines/Transcripción entrevista completa Profesor Felipe Martínez.pdf" target="_blank" download>•	Transcripción entrevista completa Profesor Felipe Martínez</Link>
                        </Router>
                        </Grid>
                        <Grid container justifyContent='flex-start'>
                        <Router>
                            <Link to="/recursos_felipe_martines/Interacción, poder y participación estudiantil en el aula de inglés.pdf" target="_blank" download>• Interacción, poder y participación estudiantil en el aula de inglés</Link>
                        </Router>
                        </Grid>
                        <Grid container justifyContent='flex-start'>
                        <Router>
                            <Link to="/recursos_felipe_martines/Teachers' motivation in the EFL classroom through the implementation of non-traditional methodologies.pdf" target="_blank" download>•	Teachers' motivation in the EFL classroom through the implementation of non-traditional methodologies</Link>
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
                <Grid >
                    <div class="fb-comments" data-href="http://inclusiveclassroom.uach.cl/" data-width="100%" data-numposts="5"></div>
                </Grid>
                </Grid>
                </Grid>
                </Grid>
                <br></br>
                
                

            </div>

        );
    }



export default Resources1;