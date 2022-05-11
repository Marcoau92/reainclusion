import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {grey} from '@material-ui/core/colors';
import banner from './img/banner_welc.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import Testbar from './Testbar';
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
          <div  xs={12} sm={12} md={12} lg={12}>
            
            <Grid container item style={{ justifyContent: "center",background:grey[400]}}>
            <Testbar/>
            </Grid>
            <Grid container item style={{ justifyContent: "center"}}>
            <AppBar position='relative'  style={{background:grey[400],height:'40px',width:'1086px', zIndex:'0'}}>
                    <Toolbar className={classes.menuButton}>
                      <Breadcrumbs className={classes.separator} separator='|'>
                        <Button style={{color:'white', height:'25px'}} className={classes.menuButton} href="https://docs.google.com/forms/d/e/1FAIpQLScZA8KRTe6efVXffr6lDR0ls5JE8aW7E67DLPlaYojNGFo43Q/viewform?usp=sf_link">
                        Encuesta
                        </Button>
                        <Link to='/testteam' className="link">
                          <Button style={{color:'white', height:'25px'}} className={classes.menuButton}>
                          Equipo</Button></Link>
                        <Link to='/testcontact' className="link" >
                          <Button style={{color:'white', height:'25px'}} className={classes.menuButton}>
                          Contacto</Button></Link>
                      </Breadcrumbs>

                      
                    </Toolbar>
                    
                  </AppBar>
                  <div position='relative' style={{backgroundImage:`url(${banner})`,
          backgroundRepeat:'no-repeat',backgroundPosition: 'center top',height:'305px',width:'1086px', zIndex:'1'}} >
                  <div style={{display: 'flex',backgroundColor: 'rgba(207,207,207, 0.8)',position:'relative',width:'158px',top:'-40px',left:'10px'}} >
                                        <div className='navBar'>
                                            <ul style={{listStyleType: 'none'}}>
                                              <ButtonGroup className={classes.separator}
                                              orientation="vertical"
                                              color="white"
                                              variant="text" 
                                              size="small">
                                                <li><Link to='/test' className="link">Bienvenida</Link></li>
                                                <li><Link to='/testproject' className="link">Proyecto</Link></li>
                                                <li><Link to='/testmenu' className="link">Recursos</Link></li>
                                                <li><Link to='/testrepository' className="link">Repositorio</Link></li>
                                                <li><Link to='/testnews' className="link">Noticias</Link></li>
            
                                              </ButtonGroup>
                                                
                                                
                                                
                                                
                                            </ul>
                                        </div>
                                    </div>

                  </div>
                  

               
            
            
                  </Grid>
           
          </div>
                    
        );
    }


export default Welcome;