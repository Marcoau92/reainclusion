import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import {grey} from '@material-ui/core/colors';
import encabezado from './img/encabezado_sin_logo33.png';
import logo from './img/encabezado.png';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
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
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
  separator:{
    color:'white'
  }
}));


export default function Buttons(){

      const classes = useStyles();
      return(
          <div>
              <Grid className="position_banner" style={{background:grey[400]}}>
                <img src={encabezado} alt="encabezado" height='105px' xs={12} sm={12} md={12}/>
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
              </Grid>


             
            

              <Grid item container xs={12} sm={12} md={12} lg={12} 
                  justify="center"              
                  direction="row"
                  width="170px">
                
                <div className="posicion" style={{ backgroundColor: 'rgba(207,207,207, 0.8)'}}>
                  <img src={logo} alt="logo"/>
                      <div style={{display: 'flex'}} >
                          <div className='navBar'>
                              <ul style={{listStyleType: 'none'}}>
                                <ButtonGroup className={classes.separator}
                                orientation="vertical"
                                color="white"
                                variant="text" 
                                size="small">
                                  <li><Link to='/' className="link">Bienvenida</Link></li>
                                  <li><Link to='/project' className="link">Proyecto</Link></li>
                                  <li><Link to='/Resources' className="link">Recursos</Link></li>
                                  <li><Link to='/Repository' className="link">Repositorio</Link></li>
                                  <li><Link to='/News' className="link">Noticias</Link></li>

                                </ButtonGroup>
                                  
                                  
                                  
                                  
                              </ul>
                          </div>
                      </div>
                  </div>
                  </Grid>
              
          </div>
      );
  }



