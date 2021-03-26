import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import {grey} from '@material-ui/core/colors';
import encabezado from './img/encabezado_sin_logo3.png';
import logo from './img/encabezado.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

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
    title: {
      flexGrow: 1,
      alignSelf: 'flex-end',
    },
  }));
  

export default function Buttons(){

        const classes = useStyles();
        return(
            <div>
                <Grid className="position_banner" style={{background:grey[400]}}>
                  <img src={encabezado} height='129px' alt="encabezado" xs={12} sm={12} md={12}/>
                  <AppBar position="static" style={{background:grey[400],height:'35px'}}>
                  <Toolbar className={classes.menuButton}>
                      <Link to='/Team' className="link">
                        <Button style={{color:'white', height:'10px'}} className={classes.menuButton}>
                        Equipo</Button></Link>
                      <Link to='/Contact' className="link" >
                        <Button style={{color:'white', height:'20px'}} className={classes.menuButton}>
                        Contacto</Button></Link>

                    
                  </Toolbar>
                </AppBar>

                </Grid>


               
              

                <Grid item container xs={12} sm={12} md={12} lg={12} 
                    justify="center"              
                    direction="row">
                  
                  <div className="posicion" style={{ backgroundColor:"#cfcfcf"}}>
                    <img src={logo} alt="logo" />
                        <div style={{display: 'flex'}}>
                            <div className='navBar'>
                                <ul style={{listStyleType: 'none'}}>
                                    <li><Link to='/' className="link">Bienvenida</Link></li>
                                    <li><Link to='/project' className="link">Proyecto</Link></li>
                                    <li><Link to='/Resources' className="link">Recursos</Link></li>
                                    <li><Link to='/Repository' className="link">Repositorio</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </Grid>
                
            </div>
        );
    }



