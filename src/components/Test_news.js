import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Grid from '@material-ui/core/Grid';
import { Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import news1 from './img/news1.png';
import banner_welcome from './img/banner_welcome.jpg';


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
            <Grid className={classes.root} item container xs={12} sm={12} md={12} lg={12} 
            justify="center"              
            direction="row"> 
                <div className='position_test1_bar'>
            <Grid >
            <Typography className={classes.title} align='center' variant='h3' >Noticias</Typography>
      
            
            <br></br>
            <Grid item container justifyContent="center"              
            direction="row">
                <Grid md={6} lg={6} item container justifyContent="center"              
            direction="row">
                <p  class="pservices text-justify" align='center' md={6} lg={6}>
            Aquí te presentaremos las más recientes entrevistas y noticias relevantes sobre actividades relacionadas con inclusión en el aula que te pueden servir para realizar tus clases.
      
      
            </p>

                </Grid>
            
      
            </Grid>
            <br></br>
            <Grid >
            <Typography className={classes.memberName} align='center' position="center" variant='h1' >Lanzamiento web Aula de Inglés Inclusiva</Typography>
      
            </Grid> 
            <br></br>
            <a rel="license" href="https://www.facebook.com/241106735925942/videos/796791650953439">
                  <Grid className={classes.text} >
                  <img src={banner_welcome} alt="encabezado" style={{width:"540px"}} xs={6} sm={6} md={6} lg={6}/>
                  </Grid>
            </a>
            <br></br>
            <br></br>
            <Grid >
            <Typography className={classes.memberName} align='center' position="center" variant='h1' >Nota de prensa sobre página web</Typography>
      
            </Grid> 
            <br></br>
            <a rel="license" href="http://humanidades.uach.cl/2021/04/16/invitan-a-lanzamiento-de-plataforma-virtual-inclusiveclassroom-cl/">
                  <Grid className={classes.text} >
                  <img src={news1} alt="encabezado" xs={6} sm={6} md={6} lg={6}/>
                  </Grid>
            </a>
            <br></br>
            <br></br>
            <Grid >
            <Typography className={classes.memberName} align='center' position="center" variant='h1' >Presentación del proyecto en Radio UACh</Typography>
      
            </Grid> 
            <br></br>
            <Grid  container style={{ justifyContent: "center"} }>
            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fradiouachvaldivia%2Fvideos%2F174674644390435%2F&show_text=false&width=560" width="560" height="314" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
            
            </Grid>
            </Grid> 
                </div>
            
                
             
            
             
          </Grid>
        );
    }
    export default News;