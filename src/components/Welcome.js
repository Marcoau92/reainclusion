import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';
import { Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Wspace2 from './Wspace2'
import { BrowserRouter as Router,Link } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title:{
      color:'#00b3c5',
      fontWeight: 'bold',
  
    },
    memberName:{
      fontWeight: 'bold',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
  const Welcome = (props) => {
    const classes = useStyles();
        return(
            <div className="position_component_team" justify="center">
              <Grid md={6} lg={6}>
                <Typography className={classes.title} align='center' variant='h3'>Inicio</Typography>
                <Wspace2/>
                <text  class="pservices text-justify">
                Te damos la bienvenida a este espacio de colaboración y aprendizaje sobre prácticas inclusivas en el aula de inglés como lengua extranjera. Recorre nuestra página, déjanos tus preguntas o sugerencias, aprendamos juntos y acompañémonos en este proceso constante de transformación que es la inclusión en educación.
Te invitamos a ver este video para que conozcas a nuestro equipo y las motivaciones de este proyecto.

                    </text>
              </Grid> 
              <Wspace2/>
              <Grid md={6} lg={6} container style={{ justifyContent: "center"} }>
                  <ReactPlayer url='https://www.youtube.com/watch?v=YT_xTZjZQmE&feature=youtu.be' />
                      
              </Grid>
              <Grid md={6} lg={6}>
              <text  class="pservices text-justify">
             Puedes mantenerte en contacto con nosotros a través de las siguientes plataformas: 
                    </text>


              </Grid>
              <Grid md={6} lg={6}>
              <text  class="pservices text-justify">
                Si te gustaría aportar a que esta comunidad de aprendizaje siga creciendo, escríbenos <Link to='/Contact' >aquí</Link> y nos pondremos en contacto contigo para que puedas colaborar con tu experiencia o recursos
                    </text>


              </Grid>
              <Grid md={6} lg={6}>
              <text  class="pservices text-justify">
                Todo el material disponible en esta página es de uso libre y gratuito. Puedes compartir este material siempre y cuando cites la página y a nuestros colaboradores, no lo uses con fines comerciales y lo compartas bajo estas mismas condiciones. Haz click <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"> aquí</a>. para conocer más sobre nuestra licencia Creative Commons. 
                    </text>


              </Grid>
              
            </div>

        );
    }


export default Welcome;