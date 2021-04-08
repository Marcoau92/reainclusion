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
                <Grid md={6} lg={6}>
                    <Typography className={classes.title} align='center' variant='h3'>Recursos</Typography>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Inclusión de estudiantes de la comunidad LGBTQ+</Typography>
                    <Wspace2/>
                    <Grid >
                    <p  class="pservices text-justify" style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>
                    En el siguiente video la profesora Ana Venegas te cuenta sobre sus estrategias para hacer clases de inglés con estudiantes de la comunidad LGBTQ+. Este es un extracto de la entrevista. Puedes descargar  
<Router>
                            <Link to="/recursos_ana_venegas/Transcripción Entrevista Completa Profesora Ana Venegas.pdf" target="_blank" download> aquí</Link>
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
                    <p  class="pservices text-justify" style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>
                    Ana Venegas, es licenciada en Educación y Profesora de Comunicación en Lengua Inglesa de la Universidad Austral de Chile (2016). Actualmente está cursando el Programa de Magister en Inclusión e Interculturalidad en la Universidad San Sebastián (2019). Desde el año 2017 se desempeña como Profesora de inglés como lengua extranjera para diferentes carreras de la Universidad Austral de Chile (Centro de Idiomas). 
                    </p>
                    </Grid>
                    
                    <p md={4} lg={4} class="pservices text-justify" style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>
                    Se ha desempeñado como tutora NEE en la Universidad Austral en dos ocasiones, donde trabajó adaptando metodologías basadas en los diferentes estilos de aprendizaje, orientadas a la adquisición del inglés como lengua extranjera en la Unidad de Apoyo al Aprendizaje para estudiantes de Pregrado de la Escuela de Pedagogía en Comunicación en Lengua Inglesa (2012 – 2016). Estuvo encargada de guiar, revisar y editar la tesis de estudiantes con necesidades especiales en la Unidad de Apoyo al Aprendizaje de Estudiantes de Pregrado de la Escuela de Pedagogía en Comunicación en Lengua Inglesa (2016 – 2017).
                    </p>
                     
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Archivos descargables</Typography>
                    <Wspace2/>
                    <Grid container style={{ justifyContent: "center",marginLeft: '0.8rem',marginRight: '0.8rem'}}>
                        <Router>
                            <Link to="/recursos_ana_venegas/Transcripción Entrevista Completa Profesora Ana Venegas.pdf" target="_blank" download>•	Transcripción Entrevista Completa Profesora Ana Venegas</Link>
                        </Router>
                    </Grid>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Recursos Sugeridos</Typography>
                    <Wspace2/>
                    <Grid container class="pservices text-justify" style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>
                    Los siguientes recursos podrían serle de utilidad para apoyar el proceso de enseñanza-aprendizaje de estudiantes pertenecientes a la comunidad LGBTQ+ en su aula de inglés.
                    </Grid>
                    <Grid container style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>
                    •	About LGBTQ communities:  
                    <a rel="pagina principal" href="https://vawnet.org/sc/who-are-lgbtq-communities " md={6} xs={6} >https://vawnet.org/sc/who-are-lgbtq-communities </a>
                    </Grid>
                    <Grid container style={{marginLeft: '0.8rem',marginRight: '0.8rem'}} >
                    •	Things you can do to support your LGBTQ students: 
                    <a rel="pagina principal" href="https://www.wgu.edu/heyteach/article/5-things-you-can-do-support-your-lgbtq-students1809.html " md={6} xs={6} >https://www.wgu.edu/heyteach/article/5-things-you-can-do-support-your-lgbtq-students1809.html </a>
                    </Grid>
                    <Grid container style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>
                    •	Teachers as LGBTQ Allies:  
                    <a rel="pagina principal" href="https://www.accreditedschoolsonline.org/education-teaching-degree/lgbtq-youth/ " md={6} xs={6} >https://www.accreditedschoolsonline.org/education-teaching-degree/lgbtq-youth/ </a>
                    </Grid>
                    <Grid container style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>
                    •	Sexual orientation? Gender identity? What’s the difference?:  
                    <a rel="pagina principal" href="https://www.youtube.com/watch?v=C63Xn--i13o&ab_channel=PlanInternational " md={6} xs={6} >https://www.youtube.com/watch?v=C63Xn--i13o&ab_channel=PlanInternational </a>
                    </Grid>
                    <Grid container style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>
                    •	Raised without gender: 
                    <a rel="pagina principal" href="https://www.youtube.com/watch?v=4sPj8HhbwHs " md={6} xs={6} >https://www.youtube.com/watch?v=4sPj8HhbwHs </a>
                    </Grid>
                    <Grid container style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>
                    •	Muxes: 
                    <a rel="pagina principal" href="https://www.youtube.com/watch?v=iiek6JxYJLs " md={6} xs={6} >https://www.youtube.com/watch?v=iiek6JxYJLs </a>
                    </Grid>
                    <Grid container style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>
                    •	Documental ‘Niños rosados y niñas azules’:  
                    <a rel="pagina principal" href="https://www.youtube.com/watch?v=WfBuMoSJsTo " md={6} xs={6} >https://www.youtube.com/watch?v=WfBuMoSJsTo </a>
                    </Grid>
                </Grid>
                

            </div>

        );
    }



export default Resources1;