import React from 'react';
import encabezado from './components/encabezado.png';
import './App.css';
import Buscador from './components/Buscador';
import Principal from './components/Principal';
import Resources from './components/Resources';
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
        <img src={encabezado} className='img-fluid' alt="logo" xs={12} sd={12} md={12}/>  
      </div>
      </header>
      <body className="App">
        <Grid container className='fluid' spacing={-10} style={{}} md={5}>
          <Principal/>          
        </Grid>
        <Grid container item style={{display: "flex", justifyContent: "center"}} md={5}>
          <Resources md={12}/>
        </Grid>
        <Grid container item style={{display: "flex", justifyContent: "center"}} md={5}>
          <Contact md={12}/>
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
