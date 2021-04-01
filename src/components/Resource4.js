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
                    <Typography className={classes.subtitle} align='center' variant='h1'>Clases de enseñanza del inglés con compromiso social</Typography>
                    <Wspace2/>
                    <Grid >
                    <p  class="pservices text-justify">
                    En el siguiente video la profesora Amalia Ortiz de Zárate te cuenta sobre sus estrategias para hacer clases de inglés utilizando técnicas dramáticas. Este es un extracto de la entrevista. Puedes descargar 
<Router>
                            <Link to="/recursos_yasna_yilorm/Transcripción Entrevista Completa Profesora Yasna Yilorm.pdf" target="_blank" download> aquí</Link>
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
                    <Typography className={classes.subtitle} align='center' variant='h1'>Profesora Yasna Yilorm Barrientos</Typography>
                    <Grid >
                    <Wspace2/>
                    <p  class="pservices text-justify">
                    Yasna Yilorm Barrientos es Profesora de Inglés (1995), Master en Educación, TESOL concentration, de Shenandoah University, USA, y Doctora en Ciencias Pedagógicas de la Universidad de Matanzas, Cuba.  Ha enseñado a estudiantes de diferentes edades y contextos culturales tanto en Chile como en Estados Unidos. Actualmente se desempeña como profesora de didáctica de la lengua inglesa y coordinadora y supervisora de las prácticas profesionales de profesores en formación de la carrera Pedagogía en Comunicación en Lengua Inglesa de la Universidad Austral de Chile.    
                    </p>
                    </Grid>
                    
                    <p md={4} lg={4} class="pservices text-justify">
                    La Dra. Yilorm es miembro del grupo RICELT y sus líneas de investigación se enfocan en el desarrollo de estrategias innovadoras, divertidas y multisensoriales que susciten un ambiente positivo en el aula de inglés como lengua extranjera, promuevan un aprendizaje exitoso y potencien el desarrollo de la personalidad de los estudiantes. Su investigación se basa principalmente en escuelas públicas con niños y niñas en contextos sociales vulnerables y con profesores de inglés que lidian con incidentes críticos en sus contextos educativos. Ha escrito diversos artículos sobre la enseñanza del inglés en Chile y es autora del libro ‘Let’s go for English in 100 Fun Ways’, publicado por el Ministerio de Educación Superior en Cuba (2015). 
                    </p>
                     
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Archivos descargables</Typography>
                    <Wspace2/>
                    <Grid container style={{ justifyContent: "center"}}>
                        <Router>
                            <Link to="/recursos_yasna_yilorm/Transcripción Entrevista Completa Profesora Yasna Yilorm.pdf" target="_blank" download>•	Transcripción Entrevista Completa Profesora Yasna Yilorm</Link>
                        </Router>
                    </Grid>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Recursos Sugeridos</Typography>
                    <Wspace2/>
                    <Grid container class="pservices text-justify" >
                    Los siguientes recursos podrían serle de utilidad para apoyar el proceso de enseñanza-aprendizaje del inglés con compromiso social.</Grid>
                    <Grid container >
                    •	Página web profesora Yasna Yilorm.  
                    <a rel="pagina principal" href="https://www.lifeprint.com/asl101/lessons/lesson01.htm " md={6} xs={6} >https://www.lifeprint.com/asl101/lessons/lesson01.htm </a>
                    </Grid>
                    <Grid container >
                    •	Multisensory EFL classrooms 
                    <a rel="pagina principal" href="https://www.facebook.com/Multisensory-EFL-Classroooms-1398480293605042/  " md={6} xs={6} >https://www.facebook.com/Multisensory-EFL-Classroooms-1398480293605042/  </a> 
                    </Grid>
                    <Grid container >
                    •	Videos de actividades sugeridas por la profesora Yasna Yilorm. 
                    <a rel="pagina principal" href="https://www.youtube.com/channel/UC8C7FKFyojKvrDg2Ym4YxTw/videos " md={6} xs={6} >https://www.youtube.com/channel/UC8C7FKFyojKvrDg2Ym4YxTw/videos </a> 
                    </Grid>
                    <Grid container >
                    •	Bibliografía sugerida por la profesora Yasna Yilorm. 
                    <a rel="pagina principal" href="https://yasnayilorm.wixsite.com/multisensoryefl/bibliografia " md={6} xs={6} >https://yasnayilorm.wixsite.com/multisensoryefl/bibliografia </a> 
                    </Grid>

                </Grid>
                

            </div>

        );
    }



export default Resources1;