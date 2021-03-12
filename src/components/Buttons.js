import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {grey} from '@material-ui/core/colors';
import encabezado from './img/encabezado_sin_logo3.png';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import logo from './img/encabezado.png';

class Buttons extends Component{
    render(){
        return(
            <div>
                <Grid className="position_banner" style={{background:grey[400]}}>
                  <img src={encabezado} alt="encabezado" xs={12} sm={12} md={12}/>
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
                                    <li><Link to='/Team' className="link">Equipo</Link></li>
                                    <li><Link to='/Resources' className="link">Recursos</Link></li>
                                    <li><Link to='/Repository' className="link">Repositorio</Link></li>
                                    <li><Link to='/Contact' className="link">Contacto</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    </Grid>
                
            </div>
        );
    };

}

export default Buttons;