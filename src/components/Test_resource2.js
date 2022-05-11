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
            
            <div>
                
                <Grid >
                    <Typography className={classes.title} align='center' variant='h3'>Recursos</Typography>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Inclusión de estudiantes de la comunidad LGBTQ+</Typography>
                    <br></br>
                    <Grid item container justifyContent="center"              
            direction="row">
        <Grid item container md={5} lg={5}justifyContent="center"              
            direction="row">
                <Grid container justifyContent='flex-start'  >
                <Link to='/testresources'>Atrás</Link>
                </Grid>
                    <Grid >
                    <p  class="pservices text-justify">
                    En el siguiente video la profesora Ana Venegas te cuenta sobre sus estrategias para hacer clases de inglés con estudiantes de la comunidad LGBTQ+. Este es un extracto de la entrevista. Puedes descargar  
<Router>
                            <Link to="/recursos_ana_venegas/Transcripción Entrevista Completa Profesora Ana Venegas.pdf" target="_blank" download> aquí</Link>
                        </Router> la transcripción de la entrevista completa.

                        
                    </p>
                    <Wspace2/>
                    </Grid>
                    <Grid container style={{ justifyContent: "center"} }>
                            <ReactPlayer url='https://www.youtube.com/watch?v=2B57m3J6IQ0' />
                    </Grid>

               
                
                <Wspace/>
                <Grid  >
                    <Typography className={classes.subtitle} align='center' variant='h1'>Profesora Ana Venegas</Typography>
                    <Grid >
                    <br></br>
                    <p  class="pservices text-justify">
                    Ana Venegas, es licenciada en Educación y Profesora de Comunicación en Lengua Inglesa de la Universidad Austral de Chile (2016). Actualmente está cursando el Programa de Magister en Inclusión e Interculturalidad en la Universidad San Sebastián (2019). Desde el año 2017 se desempeña como Profesora de inglés como lengua extranjera para diferentes carreras de la Universidad Austral de Chile (Centro de Idiomas). 
                    </p>
                    </Grid>
                    
                    <p  class="pservices text-justify">
                    Se ha desempeñado como tutora NEE en la Universidad Austral en dos ocasiones, donde trabajó adaptando metodologías basadas en los diferentes estilos de aprendizaje, orientadas a la adquisición del inglés como lengua extranjera en la Unidad de Apoyo al Aprendizaje para estudiantes de Pregrado de la Escuela de Pedagogía en Comunicación en Lengua Inglesa (2012 – 2016). Estuvo encargada de guiar, revisar y editar la tesis de estudiantes con necesidades especiales en la Unidad de Apoyo al Aprendizaje de Estudiantes de Pregrado de la Escuela de Pedagogía en Comunicación en Lengua Inglesa (2016 – 2017).
                    </p>
                     
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Archivos descargables</Typography>
                    <br></br>
                    <Grid container >
                        <Router>
                            <Link to="/recursos_ana_venegas/Transcripción Entrevista Completa Profesora Ana Venegas.pdf" target="_blank" download>•	Transcripción Entrevista Completa Profesora Ana Venegas</Link>
                        </Router>
                        
                    </Grid>
                    <Grid container>
                    <a rel="pagina principal" href="https://drive.google.com/uc?export=download&id=1WvmSL06mbQplRoJ5GonxE6nKRnrrcGtU" md={6} xs={6} >•	Recursos para promover inclusión en el aula Prof. Ana Venegas </a>
                    </Grid>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Recursos Sugeridos</Typography>
                    <br></br>
                    <Grid container class="pservices text-justify" >
                    Los siguientes recursos podrían serle de utilidad para apoyar el proceso de enseñanza-aprendizaje de estudiantes pertenecientes a la comunidad LGBTQ+ en su aula de inglés.
                    </Grid>
                    <Grid container >
                    •	About LGBTQ communities:  
                    <a rel="pagina principal" href="https://vawnet.org/sc/who-are-lgbtq-communities " md={6} xs={6} >https://vawnet.org/sc/who-are-lgbtq-communities </a>
                    </Grid>
                    <Grid container >
                    •	Things you can do to support your LGBTQ students: 
                    <a rel="pagina principal" href="https://www.wgu.edu/heyteach/article/5-things-you-can-do-support-your-lgbtq-students1809.html " md={6} xs={6} >https://www.wgu.edu/heyteach/article/5-things-you-can-do-support-your-lgbtq-students1809.html </a>
                    </Grid>
                    <Grid container >
                    •	Teachers as LGBTQ Allies:  
                    <a rel="pagina principal" href="https://www.accreditedschoolsonline.org/education-teaching-degree/lgbtq-youth/ " md={6} xs={6} >https://www.accreditedschoolsonline.org/education-teaching-degree/lgbtq-youth/ </a>
                    </Grid>
                    <Grid container >
                    •	Sexual orientation? Gender identity? What’s the difference?:  
                    <a rel="pagina principal" href="https://www.youtube.com/watch?v=C63Xn--i13o&ab_channel=PlanInternational " md={6} xs={6} >https://www.youtube.com/watch?v=C63Xn--i13o&ab_channel=PlanInternational </a>
                    </Grid>
                    <Grid container >
                    •	Raised without gender: 
                    <a rel="pagina principal" href="https://www.youtube.com/watch?v=4sPj8HhbwHs " md={6} xs={6} >https://www.youtube.com/watch?v=4sPj8HhbwHs </a>
                    </Grid>
                    <Grid container >
                    •	Muxes: 
                    <a rel="pagina principal" href="https://www.youtube.com/watch?v=iiek6JxYJLs " md={6} xs={6} >https://www.youtube.com/watch?v=iiek6JxYJLs </a>
                    </Grid>
                    <Grid container >
                    •	Documental ‘Niños rosados y niñas azules’:  
                    <a rel="pagina principal" href="https://www.youtube.com/watch?v=WfBuMoSJsTo " md={6} xs={6} >https://www.youtube.com/watch?v=WfBuMoSJsTo </a>
                    </Grid>
                    <br></br>
                    <p  class="pservices text-justify">
                    La profesora Ana Venegas recomienda los siguientes sitios web para promover inclusión en el aula. Para más información sobre cómo usarlos, revise el video que la profesora Venegas preparó y que se encuentra disponible en ‘Archivos descargables’.
                    </p>
                    <Grid container >
                    •	Gallaudet University :  
                    <a rel="pagina principal" href="https://www.gallaudet.edu/ " md={6} xs={6} >https://www.gallaudet.edu/ </a>
                    </Grid>
                    <Grid container >
                    •	Lengua de señas americana :  
                    <a rel="pagina principal" href="https://www.gallaudet.edu/asl-connect/asl-for-free/  " md={6} xs={6} >https://www.gallaudet.edu/asl-connect/asl-for-free/  </a>
                    </Grid>
                    <Grid container >
                    •	Material didáctico :  
                    <a rel="pagina principal" href="https://busyteacher.org/  " md={6} xs={6} >https://busyteacher.org/  </a>
                    </Grid>
                    <Grid container >
                    •	Material didáctico :  
                    <a rel="pagina principal" href="https://en.islcollective.com/  " md={6} xs={6} >https://en.islcollective.com/  </a>
                    </Grid>
                    <Grid container >
                    •	UNESCO:  
                    <a rel="pagina principal" href="https://en.unesco.org/  " md={6} xs={6} >https://en.unesco.org/ </a>
                    </Grid>
                    <Grid container >
                    •	Inclusive Filmmaking :  
                    <a rel="pagina principal" href="https://www.busstopfilms.com.au/  " md={6} xs={6} >https://www.busstopfilms.com.au/   </a>
                    </Grid>
                    <Grid container >
                    •	Sport Information Resource Center :  
                    <a rel="pagina principal" href="https://sirc.ca/" md={6} xs={6} >https://sirc.ca/ </a>
                    </Grid>
                    <Grid container >
                    •	Canva:  
                    <a rel="pagina principal" href="https://www.canva.com/  " md={6} xs={6} >https://www.canva.com/  </a>
                    </Grid>
                    <Grid container >
                    •	Audio books :  
                    <a rel="pagina principal" href="https://vawnet.org/sc/who-are-lgbtq-communities " md={6} xs={6} >https://vawnet.org/sc/who-are-lgbtq-communities </a>
                    </Grid>
                    <Grid container >
                    •	Audio books :  
                    <a rel="pagina principal" href="https://play.google.com/store/apps/details?id=sanity.freeaudiobooks&hl=en&gl=US " md={6} xs={6} >https://play.google.com/store/apps/details?id=sanity.freeaudiobooks&hl=en&gl=US </a>
                    </Grid>
                </Grid>
                <Grid >
                    <div class="fb-comments" data-href="http://inclusiveclassroom.uach.cl/resources/2" data-width="100%" data-numposts="5"></div>
                </Grid>
                </Grid>
                </Grid>
                </Grid>
                <br></br>
                
            </div>

        );
    }



export default Resources1;