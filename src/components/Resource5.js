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
                <Grid container justifyContent='flex-start'  md={6} lg={6}>
                <Link to='/Resources'>Atrás</Link>
                </Grid>
                <Grid md={6} lg={6}>
                    <Typography className={classes.title} align='center' variant='h3'>Recursos</Typography>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Clases de inglés para estudiantes con discapacidad visual</Typography>
                    <Wspace2/>
                    <Grid >
                    <p  class="pservices text-justify">
                    En el siguiente video la profesora Priscila Ancheo te cuenta sobre sus estrategias para hacer clases de inglés con estudiantes con discapacidad visual en un aula regular. 
Este es un extracto de la entrevista. Puedes descargar
<Router>
                            <Link to="/recursos_priscila_ancheo/Transcripción Entrevista Completa Profesora Priscila Ancheo.pdf" target="_blank" download> aquí</Link>
                        </Router> la transcripción de la entrevista completa.

                        
                    </p>
                    <Wspace2/>
                    </Grid>
                    <Grid container style={{ justifyContent: "center"} }>
                            <ReactPlayer url='https://www.youtube.com/watch?v=VVmH6cHjJ6g' />
                    </Grid>

                </Grid>
                
                <Wspace/>
                <Grid container item md={6} lg={6}>

                </Grid>
                <Grid  md={6} lg={6}>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Profesora Priscila Ancheo</Typography>
                    <Grid >
                    <Wspace2/>
                    <p  class="pservices text-justify">
                    Priscila Ancheo es profesora de Comunicación en Lengua Inglesa, titulada de la Universidad Austral de Chile (2017). Se desempeñó como tutora de estudiantes participantes de la Unidad UACh Inclusiva (2017). Actualmente, la profesora Ancheo realiza clases de inglés general y específico en establecimientos de educación superior en la ciudad de Valdivia, como la Universidad San Sebastián (2019-2020) y Santo Tomás (2018 a la fecha).
                    </p>
                    </Grid>
                    
                    <p md={4} lg={4} class="pservices text-justify">
                    En su tesis de pregrado, la profesora Ancheo realizó una investigación sobre la interacción entre profesores de inglés y estudiantes con discapacidades sensoriales en aulas regulares chilenas. 
                    </p>
                    
                     
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Archivos descargables</Typography>
                    <Wspace2/>
                    <Grid container style={{ justifyContent: "center"}}>
                        <Router>
                            <Link to="/recursos_priscila_ancheo/Transcripción Entrevista Completa Profesora Priscila Ancheo.pdf" target="_blank" download>•	Transcripción Entrevista Completa Profesora Priscila Ancheo</Link>
                        </Router>
                    </Grid>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Recursos Sugeridos</Typography>
                    <Wspace2/>
                    <Grid container class="pservices text-justify" >
                    Los siguientes recursos podrían serle de utilidad para apoyar el proceso de enseñanza-aprendizaje de estudiantes con discapacidad visual en el aula de inglés.
                    </Grid>
                    <Grid container >
                    •	Estrategias pedagógicas para la enseñanza del inglés a estudiantes con discapacidad visual en el contexto de la educación inclusiva.
                    <a rel="pagina principal" href="https://www.inci.gov.co/sites/default/files/cartillas1/Ense%C3%B1anzadelIngles.pdf " md={6} xs={6} >https://www.inci.gov.co/sites/default/files/cartillas1/Ense%C3%B1anzadelIngles.pdf </a>
                    </Grid>
                    <Grid container >
                    •	Teaching English to visually impaired learners. 
                    <a rel="pagina principal" href="https://www.englishclub.com/learning-difficulties/visual-impairment.htm" md={6} xs={6} >https://www.englishclub.com/learning-difficulties/visual-impairment.htm </a> 
                    </Grid>
                    <Grid container >
                    •	Resources for teaching English a second language to learners with blindness or visual impairment.  
                    <a rel="pagina principal" href="https://www.pathstoliteracy.org/resources/resources-teaching-english-second-language-learners-blindness-or-visual-impairment" md={6} xs={6} >https://www.pathstoliteracy.org/resources/resources-teaching-english-second-language-learners-blindness-or-visual-impairment</a> 
                    </Grid>
                    <Grid container >
                    •	Teaching English to blind students. 
                    <a rel="pagina principal" href="https://www.teachingenglish.org.uk/article/teaching-english-blind-students" md={6} xs={6} >https://www.teachingenglish.org.uk/article/teaching-english-blind-students</a> 
                    </Grid>
                    <Grid container >
                    •	English instructional strategies for students who are blind/visually impaired.  
                    <a rel="pagina principal" href="https://ttaconline.org/instructional-strategies-students-with-visual-impairments" md={6} xs={6} >https://ttaconline.org/instructional-strategies-students-with-visual-impairments</a> 
                    </Grid>
                    <Grid container >
                    •	Orientaciones para trabajar con alumnos ciegos o con discapacidades visuales.  
                    <a rel="pagina principal" href="https://educrea.cl/orientaciones-trabajar-alumnos-ciegos-discapacidades-visuales/" md={6} xs={6} >https://educrea.cl/orientaciones-trabajar-alumnos-ciegos-discapacidades-visuales/</a> 
                    </Grid>
                    <Grid container >
                    •	Catálogo de tecnologías para educación inclusiva, Senadis.  
                    <a rel="pagina principal" href="https://www.senadis.gob.cl/descarga/i/4632/documento" md={6} xs={6} >https://www.senadis.gob.cl/descarga/i/4632/documento</a> 
                    </Grid>
                    <Grid container >
                    •	Necesidades educativas especiales asociadas a discapacidad visual.   
                    <a rel="pagina principal" href="https://bibliotecadigital.mineduc.cl/bitstream/handle/20.500.12365/500/MONO-422.pdf?sequence=1&isAllowed=y" md={6} xs={6} >https://bibliotecadigital.mineduc.cl/bitstream/handle/20.500.12365/500/MONO-422.pdf?sequence=1&isAllowed=y</a> 
                    </Grid>
                    <Wspace2/>

                    <Grid container class="pservices text-justify" >
                    Tecnología asistiva:
                    </Grid>
                    <Grid container >
                    •	Lector de pantalla NVDA (gratuito) 
                    <a rel="pagina principal" href="https://nvda.es/ " md={6} xs={6} >https://nvda.es/ </a>
                    </Grid>
                    <Grid container >
                    •	Lector de pantalla ‘Jaws’  
                    <a rel="pagina principal" href="https://www.braillechile.cl/product-page/software-jaws " md={6} xs={6} >https://www.braillechile.cl/product-page/software-jaws </a> 
                    </Grid>
                    <Grid container >
                    •	Lápiz lector de texto   
                    <a rel="pagina principal" href="https://www.braillechile.cl/product-page/c-pen-reader" md={6} xs={6} >https://www.braillechile.cl/product-page/c-pen-reader</a> 
                    </Grid>
                    

                </Grid>
                

            </div>

        );
    }



export default Resources1;