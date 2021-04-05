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
            
            <div className="position_component_team">
                <Grid md={6} lg={6}>
                    <Typography className={classes.title} align='center' variant='h3'>Recursos</Typography>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Técnicas teatrales para estudiantes de inglés</Typography>
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
                            <ReactPlayer url='https://www.youtube.com/watch?v=MIsnVwrDB6Y' />
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
                    <Grid container>
                        <Router>
                            <Link to="/recursos_amalia_ortiz/Transcripción Entrevista Completa Profesora Amalia Ortiz de Zárate.pdf" target="_blank" download>•	Transcripción Entrevista Completa Profesora Amalia Ortiz de Zárate</Link>
                        </Router>
                    </Grid>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Recursos Sugeridos</Typography>
                    <Wspace2/>
                    <Grid container class="pservices text-justify" >
                        <p>
                        La profesora Amalia Ortiz de Zárate recomienda los siguientes recursos descargables para apoyar el proceso de enseñanza-aprendizaje de estudiantes a través de técnicas dramáticas en el aula de inglés.
                        </p>
                        <p>
                        Estos recursos fueron creados en el marco del Proyecto Spanglish Theatre en tu Colegio IV (2018), cuyas responsables son Dra. Amalia Ortiz de Zárate y Prof. Nicol Guarda. Los actores en los videos son: Nicol Guarda, Ricardo Sáez, Carolina Fuentes, Camilo Medina.
                        </p>
                    </Grid>
                    <Grid container >
                    •	Dossier de actividades Spanglish Theatre IV: 
                        <Router>
                            <Link to="/recursos_amalia_ortiz/Dossier de actividades Spanglish Theatre IV.pdf" target="_blank" download>Dossier de actividades Spanglish Theatre IV</Link>
                        </Router>
                    </Grid>
                    <Grid container >
                    •	2018 FLASHCARDS: 
                        <Router>
                            <Link to="/recursos_amalia_ortiz/2018 FLASHCARDS.7z" target="_blank" download>2018 FLASHCARDS</Link>
                        </Router>
                    </Grid>
                    <Grid container >
                    •	THE CHILD EN: 
                    <a rel="pagina principal" href="https://www.dl.dropboxusercontent.com/s/c6x0ik4eub1f0kl/THE%20CHILD%20EN.MTS?dl=0" md={6} xs={6} >https://www.dl.dropboxusercontent.com/s/c6x0ik4eub1f0kl/THE%20CHILD%20EN.MTS?dl=0</a> 
                    </Grid>
                    <Grid container >
                    •	THE CHILD SP: 
                    <a rel="pagina principal" href="https://www.dl.dropboxusercontent.com/s/o41k8d063utgsah/THE%20CHILD%20SP.MTS?dl=0" md={6} xs={6} >https://www.dl.dropboxusercontent.com/s/o41k8d063utgsah/THE%20CHILD%20SP.MTS?dl=0</a> 
                    </Grid>
                    <Grid container >
                    •	DREAM EN: 
                    <a rel="pagina principal" href="https://www.dl.dropboxusercontent.com/s/cavqyocktwlz0sf/DREAM%20EN.MTS?dl=0" md={6} xs={6} >https://www.dl.dropboxusercontent.com/s/cavqyocktwlz0sf/DREAM%20EN.MTS?dl=0</a> 
                    </Grid>
                    <Grid container >
                    •	DREAM SP: 
                    <a rel="pagina principal" href="https://www.dl.dropboxusercontent.com/s/d3lp4udzfaroitk/DREAM%20SP.MTS?dl=0" md={6} xs={6} >https://www.dl.dropboxusercontent.com/s/d3lp4udzfaroitk/DREAM%20SP.MTS?dl=0</a> 
                    </Grid>
                    <Grid container >
                    •	MESSAGE EN: 
                    <a rel="pagina principal" href="https://www.dl.dropboxusercontent.com/s/ak7aetwrvi04xqr/MESSAGE%20EN.MTS?dl=0" md={6} xs={6} >https://www.dl.dropboxusercontent.com/s/ak7aetwrvi04xqr/MESSAGE%20EN.MTS?dl=0</a> 
                    </Grid>
                    <Grid container >
                    •	MESSAGE SP: 
                    <a rel="pagina principal" href="https://www.dl.dropboxusercontent.com/s/0rjm9zmkimz0seq/MESSAGE%20SP.MTS?dl=0" md={6} xs={6} >https://www.dl.dropboxusercontent.com/s/0rjm9zmkimz0seq/MESSAGE%20SP.MTS?dl=0</a> 
                    </Grid>
                    <Grid container >
                    •	VIRTUAL EN: 
                    <a rel="pagina principal" href="https://www.dl.dropboxusercontent.com/s/0uyo9rdde7wnaih/VIRTUAL%20EN.MTS?dl=0" md={6} xs={6} >https://www.dl.dropboxusercontent.com/s/0uyo9rdde7wnaih/VIRTUAL%20EN.MTS?dl=0</a> 
                    </Grid>
                    <Grid container >
                    •	VIRTUAL SP: 
                    <a rel="pagina principal" href="https://www.dl.dropboxusercontent.com/s/7tuh7bgxxr8d5gl/VIRTUAL%20SP.MTS?dl=0" md={6} xs={6} >https://www.dl.dropboxusercontent.com/s/7tuh7bgxxr8d5gl/VIRTUAL%20SP.MTS?dl=0</a> 
                    </Grid>

                </Grid>
                

            </div>

        );
    }



export default Resources1;