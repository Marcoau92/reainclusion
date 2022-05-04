import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import logo from './img/encabezado.png';
import ButtonGroup from '@material-ui/core/ButtonGroup';

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
      color:'white'
    }
  }));
  

export default function Buttons(){

        const classes = useStyles();
        return(
            <div className='position_test1_logo'>
                            
                  

                <Grid item container xs={7} sm={7} md={7} lg={7} 
                    justify="center"              
                    direction="row"
                    width="170px">
                  
                  <AppBar position="sticky" style={{background:grey[400],height:'40px',width:'884px'}}>
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
                    </Grid>
                
            </div>
        );
    }



