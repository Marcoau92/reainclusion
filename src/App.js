import React from 'react';
import encabezado from './components/img/encabezado_sin_logo.png';
import './App.css';
import Buscador from './components/Buscador';
import Buttons from './components/Buttons';
import Resources from './components/Resources';
import Welcome from './components/Welcome';
import Project from './components/Project';
import Repository from './components/Repository';
import Team from './components/Team';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {grey} from '@material-ui/core/colors';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';
import Contact from './components/Contact'
import { Component } from 'react';
import { spacing } from '@material-ui/system';
import logo from './components/img/encabezado.png';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './components/myStyles.css'

const theme ={
  spacing: 8,
}


class App extends Component {
  
  state = {
    visible: true,
    whichComponentToShow: "Welcome"

  }

  render(){
    if (this.state.whichComponentToShow === "Welcome"){
      return (
      
    
        <Grid className="App"  >
            <Grid item style={{background:grey[400]}}>
              <Buscador xs={12} sm={12} md={12}/> 
            </Grid>
            <Grid style={{background:grey[400]}}>
              <img src={encabezado} alt="logo" xs={12} sm={12} md={12}/>
            </Grid>

            <Grid item container xs={12} sm={12} md={12} lg={12} 
                justify="center"              
                direction="row">
              <div className="posicion" style={{ backgroundColor:"#cfcfcf"}}>
                <img src={logo} alt="logo" />
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
                <Grid xs={4} sm={4} md={4} lg={4}>

                </Grid>
              <Welcome xs={8} sm={8} md={8} lg={8}/>
            </Grid> 
          
            
              

            
          <footer className="App-footer">
            <a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a 
            <a rel="license" href="http://creativecommons.org/licenses/by/3.0/" font='Garamond Ligth Condensed'> Creative Commons Attribution 3.0 Unported License</a>.
          </footer>
        </Grid>
              
            
      );
    }else if(this.state.whichComponentToShow === "Project"){
      return (
      
    
        <Grid className="App"  >
            <Grid item style={{background:grey[400]}}>
              <Buscador xs={12} sm={12} md={12}/> 
            </Grid>
            <Grid style={{background:grey[400]}}>
              <img src={encabezado} alt="logo" xs={12} sm={12} md={12}/>
            </Grid>

            <Grid item container xs={12} sm={12} md={12} lg={12} 
                justify="center"              
                direction="row">
              <div className="posicion" style={{ backgroundColor:"#cfcfcf"}}>
                <img src={logo} alt="logo" />
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
                <Grid xs={4} sm={4} md={4} lg={4}>

                </Grid>
              <Project xs={8} sm={8} md={8} lg={8}/>
            </Grid> 
          
            
              

            
          <footer className="App-footer">
            <a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a 
            <a rel="license" href="http://creativecommons.org/licenses/by/3.0/" font='Garamond Ligth Condensed'> Creative Commons Attribution 3.0 Unported License</a>.
          </footer>
        </Grid>
            
    );

    }else if(this.state.whichComponentToShow === "Team"){
      return (
      
    
        <Grid className="App"  >
            <Grid item style={{background:grey[400]}}>
              <Buscador xs={12} sm={12} md={12}/> 
            </Grid>
            <Grid style={{background:grey[400]}}>
              <img src={encabezado} alt="logo" xs={12} sm={12} md={12}/>
            </Grid>

            <Grid item container xs={12} sm={12} md={12} lg={12} 
                justify="center"              
                direction="row">
              <div className="posicion" style={{ backgroundColor:"#cfcfcf"}}>
                <img src={logo} alt="logo" />
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
                <Grid xs={6} sm={6} md={6} lg={6}>

                </Grid>
              <Team xs={6} sm={6} md={6} lg={6}/>
            </Grid> 
          
            
              

            
          <footer className="App-footer">
            <a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a 
            <a rel="license" href="http://creativecommons.org/licenses/by/3.0/" font='Garamond Ligth Condensed'> Creative Commons Attribution 3.0 Unported License</a>.
          </footer>
        </Grid>
            
    );

    }else if(this.state.whichComponentToShow === "Resources"){
      return (
      
    
        <Grid className="App"  >
            <Grid item style={{background:grey[400]}}>
              <Buscador xs={12} sm={12} md={12}/> 
            </Grid>
            <Grid style={{background:grey[400]}}>
              <img src={encabezado} alt="logo" xs={12} sm={12} md={12}/>
            </Grid>

            <Grid item container xs={12} sm={12} md={12} lg={12} 
                justify="center"              
                direction="row">
              <div className="posicion" style={{ backgroundColor:"#cfcfcf"}}>
                <img src={logo} alt="logo" />
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
                <Grid xs={4} sm={4} md={4} lg={4}>

                </Grid>
              <Resources xs={8} sm={8} md={8} lg={8}/>
            </Grid> 
          
            
              

            
          <footer className="App-footer">
            <a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a 
            <a rel="license" href="http://creativecommons.org/licenses/by/3.0/" font='Garamond Ligth Condensed'> Creative Commons Attribution 3.0 Unported License</a>.
          </footer>
        </Grid>
            
    );
    }else if(this.state.whichComponentToShow === "Repository"){
      return (
      
    
        <Grid className="App"  >
            <Grid item style={{background:grey[400]}}>
              <Buscador xs={12} sm={12} md={12}/> 
            </Grid>
            <Grid style={{background:grey[400]}}>
              <img src={encabezado} alt="logo" xs={12} sm={12} md={12}/>
            </Grid>

            <Grid item container xs={12} sm={12} md={12} lg={12} 
                justify="center"              
                direction="row">
              <div className="posicion" style={{ backgroundColor:"#cfcfcf"}}>
                <img src={logo} alt="logo" />
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
                <Grid xs={4} sm={4} md={4} lg={4}>

                </Grid>
              <Repository xs={8} sm={8} md={8} lg={8}/>
            </Grid> 
          
            
              

            
          <footer className="App-footer">
            <a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a 
            <a rel="license" href="http://creativecommons.org/licenses/by/3.0/" font='Garamond Ligth Condensed'> Creative Commons Attribution 3.0 Unported License</a>.
          </footer>
        </Grid>
            
    );

    }else if(this.state.whichComponentToShow === "Contact"){
      return (
      
    
        <Grid className="App"  >
            <Grid item style={{background:grey[400]}}>
              <Buscador xs={12} sm={12} md={12}/> 
            </Grid>
            <Grid style={{background:grey[400]}}>
              <img src={encabezado} alt="logo" xs={12} sm={12} md={12}/>
            </Grid>

            <Grid item container xs={12} sm={12} md={12} lg={12} 
                justify="center"              
                direction="row">
              <div className="posicion" style={{ backgroundColor:"#cfcfcf"}}>
                <img src={logo} alt="logo" />
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
                <Grid xs={4} sm={4} md={4} lg={4}>

                </Grid>
              <Contact xs={8} sm={8} md={8} lg={8}/>
            </Grid> 
          
            
              

            
          <footer className="App-footer">
            <a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a 
            <a rel="license" href="http://creativecommons.org/licenses/by/3.0/" font='Garamond Ligth Condensed'> Creative Commons Attribution 3.0 Unported License</a>.
          </footer>
        </Grid>
            
    );
    }


  }
  
}

export default App;
