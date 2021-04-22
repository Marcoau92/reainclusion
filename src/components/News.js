import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Grid from '@material-ui/core/Grid';
import { Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import news1 from './img/news1.png';
import Wspace2 from './Wspace2'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title:{
      color:'#00b3c5',
      fontWeight: 'bold',
  
    },
    memberName:{
      color:'#00b3c5',
      fontWeight: 'bold',
      fontSize: '20px',
      textAlign: 'center',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    banners:{
      color:'white',
  
    },
    text:{
      color:'black',
    }
  }));
  
  const News = (props) => {
    const classes = useStyles();
        return(
            <div className='test_position_component' id="contacto" justify="center" style={{width:'884px',marginLeft: '10.8rem',marginRight: '10.8rem'}} >
            <Grid >
            <Typography className={classes.title} align='center' variant='h3' >Noticias</Typography>
      
            </Grid> 
            <br></br>
            <Grid >
            <p class="pservices text-justify">
            Aquí te presentaremos las más recientes entrevistas y noticias relevantes sobre actividades relacionadas con inclusión en el aula que te pueden servir para realizar tus clases.
      
      
            </p>
      
            </Grid>
            <br></br>
            <Grid >
            <Typography className={classes.memberName} align='center' position="center" variant='h1' >Presentación del proyecto en Radio UACh</Typography>
      
            </Grid> 
            <br></br>
            <Grid  container style={{ justifyContent: "center"} }>
            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fradiouachvaldivia%2Fvideos%2F174674644390435%2F&show_text=false&width=560" width="560" height="314" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
            
            </Grid>
            <br></br>
            <br></br>
            <Grid >
            <Typography className={classes.memberName} align='center' position="center" variant='h1' >Nota de prensa sobre página web</Typography>
      
            </Grid> 
            <br></br>
            <a rel="license" href="http://humanidades.uach.cl/2021/04/16/invitan-a-lanzamiento-de-plataforma-virtual-inclusiveclassroom-cl/">
                  <Grid item container className={classes.text}  style={{ justifyContent: "center"} }>
                  <img src={news1} alt="encabezado" />
                  </Grid>
            </a>
                   
            <Wspace2/>   
             
          </div>
        );
    }
    export default News;