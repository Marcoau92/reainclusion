import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';
import { GridList, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton } from '@material-ui/core';
import est_sor from './img/estudiantes_sordos.png';
import com_lgbt from './img/comunidad_lgbt.png';
import tec_tea from './img/tecnicas_teatro.png';
import com_soc from './img/compromiso_social.png';
import dis_vis from './img/discapacidad_visual.png';
import est_tea from './img/estudiantes_tea.png';

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

const Resources = (props) => {  
    const classes = useStyles();
        return(
            
            <Grid item container justify='center' alignItems='center'>
                <Grid item container xs={5} sm={5} md={5} lg={5}>

                </Grid>
                <Grid xs={7} justify='flex-start' sm={7} md={7} lg={7}>
                    <Typography className={classes.title} align='center' variant='h2'>Recursos</Typography>
                </Grid>
                
                <Grid item container xs={5} sm={5} md={5} lg={5}>

                </Grid>
                <Grid item container xs={1} sm={1} md={1} lg={1}  >
                    <img src={est_sor} alt="logo" style={{width: '80px', height: '80px'}} onClick={()=>{
                        console.log("hola")
                                    }}/>

                    
                    
                </Grid>
                <Grid item container xs={6} sm={6} md={6} lg={6} >
                    <p className="lead text"  style={{fontWeight: 'bold' }}>Inclusión de estudiantes Sordos Felipe Martínez Corona </p>
                </Grid>
                <Grid item container xs={5} sm={5} md={5} lg={5}>

                </Grid>
                <Grid item container xs={1} sm={1} md={1} lg={1}  >
                    <img src={com_lgbt} alt="logo" style={{width: '80px', height: '80px'}}/>

                    
                    
                </Grid>
                <Grid item container xs={6} sm={6} md={6} lg={6} >
                    <p className="lead text" style={{fontWeight: 'bold' }}>Inclusión de estudiantes de la comunidad LGBT Ana Venegas Millapan </p>
                </Grid>
                <Grid item container xs={5} sm={5} md={5} lg={5}>

                </Grid>
                <Grid item container xs={1} sm={1} md={1} lg={1}  >
                    <img src={tec_tea} alt="logo" style={{width: '80px', height: '80px'}}/>

                    
                    
                </Grid>
                <Grid item container xs={6} sm={6} md={6} lg={6} >
                    <p className="lead text" style={{fontWeight: 'bold' }}>Técnicas teatrales en el aula de inglés Amalia Ortíz de Zárate</p>
                </Grid>
                <Grid item container xs={5} sm={5} md={5} lg={5}>

                </Grid>
                <Grid item container xs={1} sm={1} md={1} lg={1}  >
                    <img src={com_soc} alt="logo" style={{width: '80px', height: '80px'}}/>

                    
                    
                </Grid>
                <Grid item container xs={6} sm={6} md={6} lg={6} >
                    <p className="lead text" style={{ fontWeight: 'bold' }}>Enseñanza del inglés con compromiso social Yasna Yilorm Barrientos </p>
                </Grid>
                <Grid item container xs={5} sm={5} md={5} lg={5}>

                </Grid>

                <Grid item container xs={1} sm={1} md={1} lg={1}  >
                    <img src={dis_vis} alt="logo" style={{width: '80px', height: '80px'}}/>

                    
                    
                </Grid>
                <Grid item container xs={6} sm={6} md={6} lg={6} >
                    <p className="lead text" style={{fontWeight: 'bold' }}>Inclusión de estudiantes con discapacidad visual Priscila Ancheo Navarrete</p>
                </Grid>
                <Grid item container xs={5} sm={5} md={5} lg={5}>

                </Grid>
                <Grid item container xs={1} sm={1} md={1} lg={1}  >
                    
                    
                    
                    
                    <img src={est_tea} alt="logo" style={{width: '80px', height: '80px'}}/>
                    
                    
                </Grid>
                <Grid item container xs={6} sm={6} md={6} lg={6} >

                    <p className="lead text" style={{ fontWeight: 'bold' }}>Inclusión de estudiantes con TEA Paola Castro Fuentes & Camila Ojeda Pastene</p>
                </Grid>               
                    
                    
                       

            </Grid>

        );
    }



export default Resources;