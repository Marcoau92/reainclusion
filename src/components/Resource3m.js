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
                <Link to='/Resources'>Atrás</Link>
                </Grid>
                <Grid >
                    <Typography className={classes.title} align='center' variant='h3'>Recursos</Typography>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Técnicas teatrales para estudiantes de inglés</Typography>
                    <Wspace2/>
                    <Grid >
                    <p  class="pservices text-justify" style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>
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
                <Grid  style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Profesora Amalia Ortiz de Zárate Fernández</Typography>
                    <Grid >
                    <Wspace2/>
                    <p  class="pservices text-justify" style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>
                    Amalia Ortiz de Zárate Fernández, es licenciada en Educación (1996) y Profesora de Comunicación en Lengua Inglesa (1999) de la Universidad Católica de Valparaíso. Es Doctora en Estudios de Género, Traducción y Teatro por la Universidad de Sevilla (2008). Ha trabajado como docente en la Isla Robinson Crusoe (1998-1999), como profesora instructora (2007-2008) y profesora auxiliar (2009-2014) en la Universidad Austral de Chile. Desde el 2014 a la fecha, se desempeña como docente asociada al Instituto de Lingüística y Literatura de la Universidad Austral de Chile.      
                    </p>
                    </Grid>
                    
                    <p md={4} lg={4} class="pservices text-justify" style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>
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
                    <Grid container class="pservices text-justify" style={{marginLeft: '0.8rem',marginRight: '0.8rem'}} >
                        <p>
                        La profesora Amalia Ortiz de Zárate recomienda los siguientes recursos descargables para apoyar el proceso de enseñanza-aprendizaje de estudiantes a través de técnicas dramáticas en el aula de inglés.
                        </p>
                        <p>
                        Estos recursos fueron creados en el marco del Proyecto Spanglish Theatre en tu Colegio IV (2018), cuyas responsables son Dra. Amalia Ortiz de Zárate y Prof. Nicol Guarda. Los actores en los videos son: Nicol Guarda, Ricardo Sáez, Carolina Fuentes, Camilo Medina.
                        </p>
                    </Grid>
                    <Grid container style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>
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
                    <br></br>
                    <Grid container >
                    Videos Spanglish Theatre:
                    </Grid>
                    <Grid container >
                    
                    <a rel="pagina principal" href="https://drive.google.com/uc?export=download&id=1rEv53NURI4r8I2s63-_qxvsYVXhvYqLA" md={6} xs={6} >•	THE CHILD EN </a> 
                    </Grid>
                    <Grid container >
                     
                    <a rel="pagina principal" href="https://drive.google.com/uc?export=download&id=1BXnl7b_pzPaqapNhZTpTvNU02NABnRrz" md={6} xs={6} >•	THE CHILD SP</a> 
                    </Grid>
                    <Grid container >
                     
                    <a rel="pagina principal" href="https://drive.google.com/uc?export=download&id=17wtviU0MgsF09XLDedzvGjO7psLCYhlb" md={6} xs={6} >•	DREAM EN</a> 
                    </Grid>
                    <Grid container >
                    <a rel="pagina principal" href="https://drive.google.com/uc?export=download&id=1KdsjCdgy3w91cRkpvZtu7VLfC4m_xKG_" md={6} xs={6} >•	DREAM SP</a> 
                    </Grid>
                    <Grid container >
                    <a rel="pagina principal" href="https://drive.google.com/uc?export=download&id=1N_H9rFcoUbNBkoPS7GIFhwX-tasofTQs" md={6} xs={6} >•	MESSAGE EN</a> 
                    </Grid>
                    <Grid container >
                    <a rel="pagina principal" href="https://drive.google.com/uc?export=download&id=1cO73jrLr5ZWtsvgqfdYVaoZSa9SpfJTS" md={6} xs={6} >•	MESSAGE SP</a> 
                    </Grid>
                    <Grid container >
                    <a rel="pagina principal" href="https://drive.google.com/uc?export=download&id=1KBd3qrDvhzumUNcJBx2gE4-pz11naN-5" md={6} xs={6} >•	VIRTUAL EN</a> 
                    </Grid>
                    <Grid container >
                    <a rel="pagina principal" href="https://drive.google.com/uc?export=download&id=1a_xcgvw3DBpxRHSnfiVXbHpC7LJxhT22" md={6} xs={6} >•	VIRTUAL SP</a> 
                    </Grid>
                </Grid>
                <div class="fb-comments" data-href="http://inclusiveclassroom.uach.cl/resources/3" data-width="100%" data-numposts="5"></div>

            </div>

        );
    }



export default Resources1;