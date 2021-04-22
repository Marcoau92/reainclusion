import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {grey} from '@material-ui/core/colors';
import encabezado from './img/encabezado_sin_logo33.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Testbar4 from './Testbar4'
import banner_welcome from './img/banner_welcome.jpg';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        color:"transparent",
      },
      menuButton: {
        marginTop: theme.spacing(-1),
        marginRight: theme.spacing(0),
        marginLeft: 'auto',
  
      },
      toolbar: {
        minHeight: 128,
        alignItems: 'flex-end',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(2),
      },
      separator:{
        color:'white',
      },
    title:{
      color:'#00b3c5',
      fontWeight: 'bold',
  
    },
    memberName:{
      fontWeight: 'bold',
      color: 'black',
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
  
  const Welcome = (props) => {
    const classes = useStyles();
        return(
          <div>
          <div style={{ width:'884px'}} >
        <div >
        <img src={encabezado} height='105px'/>
        <AppBar position="static" style={{background:grey[400],height:'40px',width:'884px'}}>
            <Toolbar className={classes.menuButton}>
              <Breadcrumbs className={classes.separator} separator='|'>
                <Button style={{color:'white', height:'25px'}} className={classes.menuButton} href="https://docs.google.com/forms/d/e/1FAIpQLScZA8KRTe6efVXffr6lDR0ls5JE8aW7E67DLPlaYojNGFo43Q/viewform?usp=sf_link">
                Encuesta
                </Button>
                <Link to='/Team' className="link">
                  <Button style={{color:'white', height:'25px'}} className={classes.menuButton}>
                  Equipo</Button></Link>
                <Link to='/Contact' className="link" >
                  <Button style={{color:'white', height:'25px'}} className={classes.menuButton}>
                  Contacto</Button></Link>
              </Breadcrumbs>

              
            </Toolbar>
          </AppBar>
          <img src={banner_welcome} alt="banner" width='884px' xs={12} sm={12} md={12}/>
        <Testbar4 />

          </div>
                  
      </div>
          
      </div>
                    
        );
    }


export default Welcome;