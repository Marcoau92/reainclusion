import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { makeStyles } from '@material-ui/core/styles';
import encabezado from './img/encabezado_sin_logo33.png';
import logo from './img/encabezado1.png';
import Grid from '@material-ui/core/Grid';

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
            <div justify="center" style={{backgroundImage:`url(${encabezado})`,
          backgroundRepeat:'no-repeat',backgroundPosition: 'center top',heigh:'170px',width:'1086px',}}>

                            
                  

                            <Grid item container  
                                justify="flex-start"              
                                direction="row"
                                width="129px">
                              
                              <div style={{ backgroundColor: 'rgba(207,207,207, 0.8)',position:'relative',left:'10px'}}>
                                <img src={logo} alt="logo"/>
                                    
                                </div>
                                </Grid>
                
            </div>
        );
    }



