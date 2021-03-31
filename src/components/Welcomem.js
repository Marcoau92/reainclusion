import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';
import { Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Wspace2 from './Wspace2'
import { Link } from "react-router-dom";
import youtube from './img/youtube_logo.png';
import instagram from './img/instagram_logo.png';
import correo from './img/correo_logo.png';
import importante from './img/importante.png';


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
    banners:{
      color:'white',
  
    },
  }));
  
  const Welcome = (props) => {
    const classes = useStyles();
        return(
            <div justify="center">
              <Grid md={6} lg={6}>
                <Typography className={classes.title} align='center' variant='h3'>Inicio</Typography>
                <Wspace2/>
                <p  class="pservices text-justify">
                Te damos la bienvenida a este espacio de colaboración y aprendizaje sobre prácticas inclusivas en el aula de inglés como lengua extranjera. Recorre nuestra página, déjanos tus preguntas o sugerencias, aprendamos juntos y acompañémonos en este proceso constante de transformación que es la inclusión en educación.
Te invitamos a ver este video para que conozcas a nuestro equipo y las motivaciones de este proyecto.

                    </p>
              </Grid> 
              <Wspace2/>
              <Grid md={6} lg={6} container style={{ justifyContent: "center"} }>
                  <ReactPlayer url='https://www.youtube.com/watch?v=YT_xTZjZQmE&feature=youtu.be' />
                      
              </Grid>
              <Wspace2/>
              <Grid className={classes.banners} md={6} lg={6} style={{background:'#00b3c5', borderRadius:'10px'}}>
              <p  class="pservices text-justify">
             Puedes mantenerte en contacto con nosotros a través de las siguientes plataformas: 
                    </p>
                    <a rel="license" href="https://www.youtube.com/channel/UC7CX6_dY5GPd0tG7bDOU3fA/featured"><img src={youtube} alt="encabezado" width='80px' xs={12} sm={12} md={12}/></a>
                    
                    <img src={instagram} alt="encabezado" width='80px' xs={12} sm={12} md={12}/>
                    <Link to='/contact'>
                    <img src={correo} alt="encabezado" width='80px' xs={12} sm={12} md={12}/>
                    </Link>
                    


              </Grid>
              <Wspace2/>
              <Grid justify='center' className={classes.banners} md={6} lg={6} style={{background:'#00b3c5', borderRadius:'10px'}}>
                <Grid md={11} lg={11} justifyContent='center'>
                <p  class="pservices text-justify">
                Si te gustaría aportar a que esta comunidad de aprendizaje siga creciendo, escríbenos <Link to='/Contact' >aquí</Link> y nos pondremos en contacto contigo para que puedas colaborar con tu experiencia o recursos
                    </p>

                </Grid>
              


              </Grid>
              <Wspace2/>
              <Grid className={classes.banners} md={6} lg={6} ml={4} mr={4} justifyContent='center' style={{background:'#00b3c5', borderRadius:'10px'}}>
                <Grid  md={12}>
                <img src={importante} alt="encabezado" width='80px' xs={12} sm={12} md={12}/>
                </Grid>
               
                <Grid justify='center' ml={8} mr={8} >
                <p  class="pservices text-justify">
                Todo el material disponible en esta página es de uso libre y gratuito. Puedes compartir este material siempre y cuando cites la página y a nuestros colaboradores, no lo uses con fines comerciales y lo compartas bajo estas mismas condiciones. Haz click <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"> aquí</a>. para conocer más sobre nuestra licencia Creative Commons. 
                    </p>

                </Grid>
              <Wspace2/>
              </Grid>

              
              
            </div>

        );
    }


export default Welcome;