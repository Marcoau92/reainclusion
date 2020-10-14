import React from 'react';
import encabezado from './components/encabezado.png';
import './App.css';
import Buscador from './components/Buscador';
import Principal from './components/Principal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {lightBlue, grey} from '@material-ui/core/colors';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';
import Contact from './Contact'


function App() {
  return (
    
    <div className="App"  >
      <header>
      <div style={{background:grey[400]}}>
        <Buscador/>
        <img src={encabezado} className='img-fluid' alt="logo" xs={12} sd={4} md={12}/>  
      </div>
      </header>
      <body className="App">
      <div class="btn-group-vertical">
                    <Router>
                        <ButtonGroup
                            orientation="vertical"
                            
                            position='absolute'
                            >
                            <Button>
                                <Switch>
                                  <Route path='/contacto' exact component={Contact}/>
                                </Switch>
                                
                                    Inicio</Button>
                            <Button>Proyecto</Button>
                            <Button>Integrantes</Button>
                            <Button>Recursos</Button>
                            <Button>Repositorio</Button>
                            <Button>Contacto</Button>
                        </ButtonGroup>
    
                    </Router>
                
                    <Grid container item style={{display: "flex", justifyContent: "center", alignItems: "center"}} md={10} xs={7}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=6aphi7R-JNY'/>
                        
                    </Grid>
                    <Grid>
                    <a rel="material" href="http://www.mediafire.com/file/hkb2kmfrf7nehp8/file">material1 </a>
                    </Grid>
                </div>
      </body>
      hola
      <footer className="App-footer">
        <a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a 
        <a rel="license" href="http://creativecommons.org/licenses/by/3.0/"> Creative Commons Attribution 3.0 Unported License</a>.
      </footer>
          </div>
  );
}

export default App;
