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
                  
                  <div style={{ backgroundColor: 'rgba(207,207,207, 0.8)',position:'static'}}>
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



