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
                    </Grid>
                    <Wspace/>

                </Grid>
                

            </div>

        );
    }



export default Resources1;