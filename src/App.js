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



function App() {
  return (
    
    <div className="App"  >
      <header>
      <div style={{background:grey[400]}}>
        <Buscador/>
        <img src={encabezado} alt="logo" xs={12} sd={12} md={12}/>  
      </div>
      </header>
      <body className="App">
        <Grid>
          <Grid container justify="center" style={{}} md={5} lg={5}>   
              



          </Grid>
          <Grid container justify="center" style={{}} md={2} lg={2} xl={2}>
            <Buttons/>          
          </Grid>
          <Grid container justify="center" md={5} lg={5} xl={5}>
            <Welcome/>
          </Grid>
        </Grid>
        <Grid container style={{display: "flex", justifyContent: "center"}} md={5} lg={5} xl={5}>
          <Project/>
        </Grid>
        <Grid container style={{display: "flex", justifyContent: "center"}} md={5} lg={5} xl={5}>
          <Team/>
        </Grid>
        <Grid container style={{display: "flex", justifyContent: "center"}} md={5} lg={5} xl={5}>
          <Resources/>
        </Grid>
        <Grid container style={{display: "flex", justifyContent: "center"}} md={5} lg={5} xl={5}>
          <Repository/>
        </Grid>
        <Grid container style={{display: "flex", justifyContent: "center"}} md={5} lg={5} xl={5}>
          <Contact/>
        </Grid>
      </body>
      <footer className="App-footer">
        <a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a 
        <a rel="license" href="http://creativecommons.org/licenses/by/3.0/"> Creative Commons Attribution 3.0 Unported License</a>.
      </footer>
          </div>
  );
}

export default App;
