import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';
import { Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Wspace from '../Wspace'
import Wspace2 from '../Wspace2'

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
                    <Typography className={classes.subtitle} align='center' variant='h1'>Clases de inglés para estudiantes con TEA</Typography>
                    <Wspace2/>
                    <Grid >
                    <p  class="pservices text-justify">
                    En el siguiente video las profesoras Paola Castro Fuentes y Camila Ojeda Pastene te cuentan sobre sus estrategias para hacer clases de inglés con estudiantes con TEA en un aula regular. 
Este es un extracto de la entrevista. Puedes descargar
<Router>
                            <Link to="/recursos_paola_camila/Transcripción Entrevista Completa Paola Castro y Camila Ojeda.pdf" target="_blank" download> aquí</Link>
                        </Router> la transcripción de la entrevista completa.

                        
                    </p>
                    <Wspace2/>
                    </Grid>
                    <Grid container style={{ justifyContent: "center"} }>
                            <ReactPlayer url='https://www.youtube.com/watch?v=IrcP0B4ITAU' />
                    </Grid>

                </Grid>
                
                <Wspace/>
                <Grid container item md={6} lg={6}>

                </Grid>
                <Grid  md={6} lg={6}>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Profesoras Paola Castro Fuentes y Camila Ojeda Pastene</Typography>
                    <Grid >
                    <Wspace2/>
                    <p  class="pservices text-justify">
                    Paola Castro y Camila Ojeda son egresadas de la carrera de Pedagogía en Comunicación en Lengua Inglesa de la Universidad Austral de Chile (2021). En su tesis de pregrado, Paola y Camila desarrollaron una investigación de campo titulada ‘Teaching Strategies to Support the Learning Process of Students with ASD: EFL teachers’ perceptions’ (2021), la cual reúne estrategias utilizadas por profesores de inglés con experiencia trabajando con estudiantes con Trastorno del Espectro Autista en aulas regulares chilenas. </p>
                    </Grid>
                    
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Archivos descargables</Typography>
                    <Wspace2/>
                    <Grid container style={{ justifyContent: "center"}}>
                        <Router>
                            <Link to="/recursos_paola_camila/Transcripción Entrevista Completa Paola Castro y Camila Ojeda.pdf" target="_blank" download>•	Transcripción Entrevista Completa Paola Castro y Camila Ojeda</Link>
                        </Router>
                        <Router>
                            <Link to="/recursos_paola_camila/Teaching strategies to support students with ASD (Castro & Ojeda, 2021).pdf" target="_blank" download>•	Teaching strategies to support students with ASD (Castro & Ojeda, 2021)</Link>
                        </Router>
                        <a rel="pagina principal" href="https://languageswol.files.wordpress.com/2016/11/sflautism.pdf " md={6} xs={6} >•	Autistic Spectrum Disorders and learning foreign languages (Wire, 2005)  </a>
                        <a rel="pagina principal" href="http://www.hms.harvard.edu/cidp/pub/pdfs/SevereDevDisordersBilingualism.pdf " md={6} xs={6} >•	Severe Developmental Disorders and Bilingualism (Toppelberg, Snow & Tager-flusberg, 1999)  </a>
                        <a rel="pagina principal" href="https://www.semanticscholar.org/paper/Supporting-Students-With-Autism-Spectrum-Disorders-Leach-Duffy/f3517753909607ac21e08c06d24b232d28ec17cc  " md={6} xs={6} >•	Supporting Students With Autism Spectrum Disorders in Inclusive Settings (Leach & Duffy, 2009) </a>
                    
                    </Grid>
                    <Wspace/>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Recursos Sugeridos</Typography>
                    <Wspace2/>
                    <Grid container class="pservices text-justify" >
                    Los siguientes recursos podrían serle de utilidad para apoyar el proceso de enseñanza-aprendizaje de estudiantes con Trastorno del Espectro Autista en su aula de inglés.
                    </Grid>
                    <Grid container >
                    •	Languages without limits:
                    <a rel="pagina principal" href="https://www.languageswithoutlimits.co.uk " md={6} xs={6} >https://www.languageswithoutlimits.co.uk </a>
                    </Grid>
                    <Grid container >
                    •	Autism Speaks  
                    <a rel="pagina principal" href="https://www.autismspeaks.org/virtual-activities-kids-autism   " md={6} xs={6} >https://www.autismspeaks.org/virtual-activities-kids-autism    </a> 
                    </Grid>
                    <Grid container >
                    •	Inclusive practice in language learning   
                    <a rel="pagina principal" href="https://incpill.com" md={6} xs={6} >https://incpill.com</a> 
                    </Grid>
                    <Grid container >
                    •	Instructional Management Tips for Teachers of Students With Autism Spectrum Disorder (ASD) . 
                    <a rel="pagina principal" href="https://journals.sagepub.com/doi/10.1177/004005990303500408 " md={6} xs={6} >https://journals.sagepub.com/doi/10.1177/004005990303500408 </a> 
                    </Grid>
                    <Grid container >
                    •	The Efficacy of Teaching English as a Foreign Language to Iranian Students with Autism Spectrum Disorder on Their Social Skills and Willingness to Communicate.  
                    <a rel="pagina principal" href=" https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6586454/" md={6} xs={6} > https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6586454/</a> 
                    </Grid>
                    <Grid container >
                    •	Inclusion of students with ASD   
                    <a rel="pagina principal" href=" http://asd.yourschools.ca/inclusion-of-students-with-asd/" md={6} xs={6} > http://asd.yourschools.ca/inclusion-of-students-with-asd/</a> 
                    </Grid>
                    <Grid container >
                    •	ASD and learning   
                    <a rel="pagina principal" href="https://www.inclusive.tki.org.nz/guides/asd-and-learning/" md={6} xs={6} >https://www.inclusive.tki.org.nz/guides/asd-and-learning/</a> 
                    </Grid>
                    <Grid container >
                    •	Enseñanza de Lenguas Extranjeras en alumnos con Trastorno del Espectro Autista .   
                    <a rel="pagina principal" href="https://www.campuseducacion.com/blog/revista-digital-docente/ensenanza-lenguas-extranjeras-alumnos-trastorno-del-espectro-autista/" md={6} xs={6} >https://www.campuseducacion.com/blog/revista-digital-docente/ensenanza-lenguas-extranjeras-alumnos-trastorno-del-espectro-autista/</a> 
                    </Grid>
                    <Grid container >
                    •	El TEA en el aula de lengua extranjera: 
                    <a rel="pagina principal" href="http://revistaventanaabierta.es/tea-aula-lengua-extranjera-estamos-realmente-preparados-ensenar-idioma-alumnos-diagnosticados-trastorno-del-espectro-autista/ " md={6} xs={6} >http://revistaventanaabierta.es/tea-aula-lengua-extranjera-estamos-realmente-preparados-ensenar-idioma-alumnos-diagnosticados-trastorno-del-espectro-autista/ </a>
                    </Grid>
                    <Grid container >
                    •	Inglés adaptado con pictogramas   
                    <a rel="pagina principal" href="http://www.autismonavarra.com/2015/10/ingles-adaptado-con-pictogramas-2/ " md={6} xs={6} >http://www.autismonavarra.com/2015/10/ingles-adaptado-con-pictogramas-2/ </a> 
                    </Grid>


                </Grid>
                

            </div>

        );
    }



export default Resources1;