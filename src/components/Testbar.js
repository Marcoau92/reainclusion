import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {grey} from '@material-ui/core/colors';
import encabezado from './img/encabezado_sin_logo33.png';
import banner from './img/banner_wel.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import logo from './img/encabezado1.png';
import ButtonGroup from '@material-ui/core/ButtonGroup';
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
          backgroundRepeat:'no-repeat',backgroundPosition: 'center top',heigh:'170px',width:'1086px',background:grey[400]}}>

                            
                  

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



