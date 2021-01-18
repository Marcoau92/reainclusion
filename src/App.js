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
import {grey,black} from '@material-ui/core/colors';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';
import Contact from './components/Contact'
import { Component } from 'react';
import { spacing } from '@material-ui/system';
import Box from '@material-ui/core/Box';

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
          <header>
          <Grid style={{background:grey[400]}}>
            <Buscador/>
            <Grid xs={2} sm={2} md={2}>

              </Grid>
            <img src={encabezado} alt="logo" xs={8} sm={8} md={8}/> 
            <Grid xs={2} sm={2} md={2}>

            </Grid> 
          </Grid>
          </header>
          <body>
            <Grid container              
              direction="row"
              justify="flex-start"
              alignItems="baseline">
              <Grid xs={2} sm={2} md={2}>

              </Grid>

              <Grid backgroundColor= '#000000'md={2}  >
                <Box m={-3}>
                  <ButtonGroup 
                    size="large"
                    orientation="vertical"
                    color="dark"
                    aria-label="vertical contained primary button group"
                    variant="text"
                  >
                    <Button style={{backgroundColor:grey[300]}} onClick={()=>{
                      this.setState({whichComponentToShow: "Welcome"})
                    }} >Inicio</Button>
                    <Button style={{backgroundColor:grey[300]}} onClick={()=>{
                      this.setState({whichComponentToShow: "Project"})
                    }} >Proyecto</Button>
                    <Button  style={{backgroundColor:grey[300]}} onClick={()=>{
                      this.setState({whichComponentToShow: "Team"})
                    }} >Integrantes</Button>
                    <Button style={{backgroundColor:grey[300]}} onClick={()=>{
                      this.setState({whichComponentToShow: "Resources"})
                    }} >Recursos</Button>
                    <Button style={{backgroundColor:grey[300]}} onClick={()=>{
                      this.setState({whichComponentToShow: "Repository"})
                    }} >Repositorio</Button>
                    <Button style={{backgroundColor:grey[300]}} onClick={()=>{
                      this.setState({whichComponentToShow: "Contact"})
                    }} >Contacto</Button>
                  </ButtonGroup>
                </Box>
                
               
              </Grid>
              <Welcome md={8}/>

            </Grid>
            
          </body>
          <footer className="App-footer">
            <a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a 
            <a rel="license" href="http://creativecommons.org/licenses/by/3.0/" font='Garamond Ligth Condensed'> Creative Commons Attribution 3.0 Unported License</a>.
          </footer>
              </Grid>
            
      );
    }else if(this.state.whichComponentToShow === "Project"){
      return (
      
    
        <Grid className="App"  >
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
                  color="dark"
                  aria-label="vertical contained primary button group"
                  variant="text"
                >
                  <Button style={{backgroundColor:grey[300]}} onClick={()=>{
                    this.setState({whichComponentToShow: "Welcome"})
                  }} >Inicio</Button>
                  <Button style={{backgroundColor:grey[300]}} onClick={()=>{
                    this.setState({whichComponentToShow: "Project"})
                  }} >Proyecto</Button>
                  <Button  style={{backgroundColor:grey[300]}} onClick={()=>{
                    this.setState({whichComponentToShow: "Team"})
                  }} >Integrantes</Button>
                  <Button style={{backgroundColor:grey[300]}} onClick={()=>{
                    this.setState({whichComponentToShow: "Resources"})
                  }} >Recursos</Button>
                  <Button style={{backgroundColor:grey[300]}} onClick={()=>{
                    this.setState({whichComponentToShow: "Repository"})
                  }} >Repositorio</Button>
                  <Button style={{backgroundColor:grey[300]}} onClick={()=>{
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
              </Grid>
            
    );

    }else if(this.state.whichComponentToShow === "Team"){
      return (
      
    
        <Grid className="App"  >
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
                  color="dark"
                  aria-label="vertical contained primary button group"
                  variant="text"
                >
                  <Button style={{backgroundColor:grey[300]}} onClick={()=>{
                    this.setState({whichComponentToShow: "Welcome"})
                  }} >Inicio</Button>
                  <Button style={{backgroundColor:grey[300]}} onClick={()=>{
                    this.setState({whichComponentToShow: "Project"})
                  }} >Proyecto</Button>
                  <Button  style={{backgroundColor:grey[300]}} onClick={()=>{
                    this.setState({whichComponentToShow: "Team"})
                  }} >Integrantes</Button>
                  <Button style={{backgroundColor:grey[300]}} onClick={()=>{
                    this.setState({whichComponentToShow: "Resources"})
                  }} >Recursos</Button>
                  <Button style={{backgroundColor:grey[300]}} onClick={()=>{
                    this.setState({whichComponentToShow: "Repository"})
                  }} >Repositorio</Button>
                  <Button style={{backgroundColor:grey[300]}} onClick={()=>{
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
              </Grid>
            
    );

    }else if(this.state.whichComponentToShow === "Resources"){
      return (
      
    
        <Grid className="App"  >
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
                  color="dark"
                  aria-label="vertical contained primary button group"
                  variant="text"
                >
                  <Button style={{backgroundColor:grey[300]}} onClick={()=>{
                    this.setState({whichComponentToShow: "Welcome"})
                  }} >Inicio</Button>
                  <Button style={{backgroundColor:grey[300]}} onClick={()=>{
                    this.setState({whichComponentToShow: "Project"})
                  }} >Proyecto</Button>
                  <Button  style={{backgroundColor:grey[300]}} onClick={()=>{
                    this.setState({whichComponentToShow: "Team"})
                  }} >Integrantes</Button>
                  <Button style={{backgroundColor:grey[300]}} onClick={()=>{
                    this.setState({whichComponentToShow: "Resources"})
                  }} >Recursos</Button>
                  <Button style={{backgroundColor:grey[300]}} onClick={()=>{
                    this.setState({whichComponentToShow: "Repository"})
                  }} >Repositorio</Button>
                  <Button style={{backgroundColor:grey[300]}} onClick={()=>{
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
              </Grid>
            
    );

    }else if(this.state.whichComponentToShow === "Repository"){
      return (
      
    
        <Grid className="App"  >
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
                  color="dark"
                  aria-label="vertical contained primary button group"
                  variant="text"
                >
                  <Button style={{backgroundColor:grey[300]}} onClick={()=>{
                    this.setState({whichComponentToShow: "Welcome"})
                  }} >Inicio</Button>
                  <Button style={{backgroundColor:grey[300]}} onClick={()=>{
                    this.setState({whichComponentToShow: "Project"})
                  }} >Proyecto</Button>
                  <Button  style={{backgroundColor:grey[300]}} onClick={()=>{
                    this.setState({whichComponentToShow: "Team"})
                  }} >Integrantes</Button>
                  <Button style={{backgroundColor:grey[300]}} onClick={()=>{
                    this.setState({whichComponentToShow: "Resources"})
                  }} >Recursos</Button>
                  <Button style={{backgroundColor:grey[300]}} onClick={()=>{
                    this.setState({whichComponentToShow: "Repository"})
                  }} >Repositorio</Button>
                  <Button style={{backgroundColor:grey[300]}} onClick={()=>{
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
              </Grid>
            
    );

    }else if(this.state.whichComponentToShow === "Contact"){
      return (
      
    
        <Grid className="App"  >
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
                  color="dark"
                  aria-label="vertical contained primary button group"
                  variant="text"
                >
                  <Button style={{backgroundColor:grey[300]}} onClick={()=>{
                    this.setState({whichComponentToShow: "Welcome"})
                  }} >Inicio</Button>
                  <Button style={{backgroundColor:grey[300]}} onClick={()=>{
                    this.setState({whichComponentToShow: "Project"})
                  }} >Proyecto</Button>
                  <Button  style={{backgroundColor:grey[300]}} onClick={()=>{
                    this.setState({whichComponentToShow: "Team"})
                  }} >Integrantes</Button>
                  <Button style={{backgroundColor:grey[300]}} onClick={()=>{
                    this.setState({whichComponentToShow: "Resources"})
                  }} >Recursos</Button>
                  <Button style={{backgroundColor:grey[300]}} onClick={()=>{
                    this.setState({whichComponentToShow: "Repository"})
                  }} >Repositorio</Button>
                  <Button style={{backgroundColor:grey[300]}} onClick={()=>{
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
              </Grid>
            
    );

    }


  }
  
}

export default App;
