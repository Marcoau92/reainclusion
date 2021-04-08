import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Grid from '@material-ui/core/Grid';
import { Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


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
            <div justify="center" >
            <br></br>
            <Grid md={6} lg={6}>
            <Typography className={classes.title} align='center' variant='h3' >Noticias</Typography>
      
            </Grid> 
            <br></br>
            <Grid md={6} lg={6}>
            <p class="pservices text-justify">
            Aquí te presentaremos las más recientes entrevistas y noticias relevantes sobre actividades relacionadas con inclusión en el aula que te pueden servir para realizar tus clases
      
      
            </p>
      
            </Grid>
            <br></br>
            <Grid md={6} lg={6}>
            <Typography className={classes.memberName} align='center' position="center" variant='h1' >Presentación del proyecto en Radio UACh</Typography>
      
            </Grid> 
            <br></br>
            <Grid md={6} lg={6} container style={{ justifyContent: "center"} }>
            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fradiouachvaldivia%2Fvideos%2F174674644390435%2F&show_text=false&width=560" width="560" height="314" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
            
            </Grid>    
            
             
          </div>
        );
    }
    export default News;