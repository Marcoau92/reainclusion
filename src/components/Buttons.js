import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {grey} from '@material-ui/core/colors';
import encabezado from './img/encabezado.png';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Buttons extends Component{
    state = {
        visible: true,
        whichComponentToShow: "Welcome"
    
      }
    render(){
        return(
            <div style={{ backgroundColor:"#cfcfcf"}}>
                <img src={encabezado} alt="logo" />
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button onClick={()=>{
                                this.setState({whichComponentToShow: "Welcome"})
                                }} >
                                    <ListItemText secondary="Welcome" />
                </ListItem>
                <ListItem button onClick={()=>{
                                this.setState({whichComponentToShow: "Project"})
                                }} >
                                    <ListItemText secondary="Proyecto" />
                </ListItem>
                <ListItem button onClick={()=>{
                                this.setState({whichComponentToShow: "Team"})
                                }} >
                                    <ListItemText secondary="Integrantes" />
                </ListItem>
                <ListItem button onClick={()=>{
                                this.setState({whichComponentToShow: "Resources"})
                                }} >
                                    <ListItemText secondary="Recursos" />
                </ListItem>
                <ListItem button onClick={()=>{
                                this.setState({whichComponentToShow: "Repository"})
                                }} >
                                    <ListItemText secondary="Repositorio" />
                </ListItem>
                <ListItem button onClick={()=>{
                                this.setState({whichComponentToShow: "Contact"})
                                }} >
                                    <ListItemText secondary="Contacto" />
                </ListItem>

                </List>

            </div>
            
                    
            
        );
    };

}

export default Buttons;