import React from 'react';
import encabezado from './components/encabezado.png';
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



class App extends Component {
  
  state = {
    visible: true,
    whichComponentToShow: "Welcome"

  }

  render(){
    if (this.state.whichComponentToShow === "Welcome"){
      return (
      
    
        <div className="App"  >
          <header>
          <div style={{background:grey[400]}}>
            <Buscador/>
            <img src={encabezado} alt="logo" xs={12} sd={12} md={12}/>  
          </div>
          </header>
          <body>
          
            <div backgroundColor= '#000000'>
              <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical outlined primary button group"
              >
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Welcome"})
                }} >Inicio</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Project"})
                }} >Proyecto</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Team"})
                }} >Integrantes</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Resources"})
                }} >Recursos</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Repository"})
                }} >Repositorio</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Contact"})
                }} >Contacto</Button>
              </ButtonGroup>
              <Welcome/>
            </div>
          </body>
          <footer className="App-footer">
            <a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a 
            <a rel="license" href="http://creativecommons.org/licenses/by/3.0/" font='Garamond Ligth Condensed'> Creative Commons Attribution 3.0 Unported License</a>.
          </footer>
              </div>
            
      );
    }else if(this.state.whichComponentToShow === "Project"){
      return (
      
    
        <div className="App"  >
          <header>
          <div style={{background:grey[400]}}>
            <Buscador/>
            <img src={encabezado} alt="logo" xs={12} sd={12} md={12}/>  
          </div>
          </header>
          <body>
          
          <div backgroundColor= '#000000'>
              <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical outlined primary button group"
              >
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Welcome"})
                }} >Inicio</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Project"})
                }} >Proyecto</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Team"})
                }} >Integrantes</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Resources"})
                }} >Recursos</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Repository"})
                }} >Repositorio</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Contact"})
                }} >Contacto</Button>
              </ButtonGroup>
              <Project/>
            </div>
          </body>
          <footer className="App-footer">
            <a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a 
            <a rel="license" href="http://creativecommons.org/licenses/by/3.0/" font='Garamond Ligth Condensed'> Creative Commons Attribution 3.0 Unported License</a>.
          </footer>
              </div>
            
    );

    }else if(this.state.whichComponentToShow === "Team"){
      return (
      
    
        <div className="App"  >
          <header>
          <div style={{background:grey[400]}}>
            <Buscador/>
            <img src={encabezado} alt="logo" xs={12} sd={12} md={12}/>  
          </div>
          </header>
          <body>
          
          <div backgroundColor= '#000000'>
              <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical outlined primary button group"
              >
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Welcome"})
                }} >Inicio</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Project"})
                }} >Proyecto</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Team"})
                }} >Integrantes</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Resources"})
                }} >Recursos</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Repository"})
                }} >Repositorio</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Contact"})
                }} >Contacto</Button>
              </ButtonGroup>
              <Team/>
            </div>
          </body>
          <footer className="App-footer">
            <a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a 
            <a rel="license" href="http://creativecommons.org/licenses/by/3.0/" font='Garamond Ligth Condensed'> Creative Commons Attribution 3.0 Unported License</a>.
          </footer>
              </div>
            
    );

    }else if(this.state.whichComponentToShow === "Resources"){
      return (
      
    
        <div className="App"  >
          <header>
          <div style={{background:grey[400]}}>
            <Buscador/>
            <img src={encabezado} alt="logo" xs={12} sd={12} md={12}/>  
          </div>
          </header>
          <body>
          
          <div backgroundColor= '#000000'>
              <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical outlined primary button group"
              >
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Welcome"})
                }} >Inicio</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Project"})
                }} >Proyecto</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Team"})
                }} >Integrantes</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Resources"})
                }} >Recursos</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Repository"})
                }} >Repositorio</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Contact"})
                }} >Contacto</Button>
              </ButtonGroup>
              <Resources/>
            </div>
          </body>
          <footer className="App-footer">
            <a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a 
            <a rel="license" href="http://creativecommons.org/licenses/by/3.0/" font='Garamond Ligth Condensed'> Creative Commons Attribution 3.0 Unported License</a>.
          </footer>
              </div>
            
    );

    }else if(this.state.whichComponentToShow === "Repository"){
      return (
      
    
        <div className="App"  >
          <header>
          <div style={{background:grey[400]}}>
            <Buscador/>
            <img src={encabezado} alt="logo" xs={12} sd={12} md={12}/>  
          </div>
          </header>
          <body>
          
          <div backgroundColor= '#000000'>
              <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical outlined primary button group"
              >
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Welcome"})
                }} >Inicio</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Project"})
                }} >Proyecto</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Team"})
                }} >Integrantes</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Resources"})
                }} >Recursos</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Repository"})
                }} >Repositorio</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Contact"})
                }} >Contacto</Button>
              </ButtonGroup>
              <Repository/>
            </div>
          </body>
          <footer className="App-footer">
            <a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a 
            <a rel="license" href="http://creativecommons.org/licenses/by/3.0/" font='Garamond Ligth Condensed'> Creative Commons Attribution 3.0 Unported License</a>.
          </footer>
              </div>
            
    );

    }else if(this.state.whichComponentToShow === "Contact"){
      return (
      
    
        <div className="App"  >
          <header>
          <div style={{background:grey[400]}}>
            <Buscador/>
            <img src={encabezado} alt="logo" xs={12} sd={12} md={12}/>  
          </div>
          </header>
          <body>
          
          <div backgroundColor= '#000000'>
              <ButtonGroup
                orientation="vertical"
                color="primary"
                aria-label="vertical outlined primary button group"
              >
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Welcome"})
                }} >Inicio</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Project"})
                }} >Proyecto</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Team"})
                }} >Integrantes</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Resources"})
                }} >Recursos</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Repository"})
                }} >Repositorio</Button>
                <Button onClick={()=>{
                  this.setState({whichComponentToShow: "Contact"})
                }} >Contacto</Button>
              </ButtonGroup>
              <Contact/>
            </div>
          </body>
          <footer className="App-footer">
            <a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a 
            <a rel="license" href="http://creativecommons.org/licenses/by/3.0/" font='Garamond Ligth Condensed'> Creative Commons Attribution 3.0 Unported License</a>.
          </footer>
              </div>
            
    );

    }


  }
  
}

export default App;
