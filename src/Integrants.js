import React from 'react';
import encabezado from './components/encabezado.png';
import './App.css';
import Buscador from './components/Buscador';
import Principal from './components/Principal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {lightBlue} from '@material-ui/core/colors';




function Integrants() {
  return (
    <div className="App"  >
      <header>
      <div style={{background:lightBlue[200]}}>
        <Buscador/>
        <img src={encabezado} className='img-fluid' alt="logo" xs={12} sd={4} md={12}/>  
      </div>
      </header>
      <body className="App-body">
        <Principal/>
      </body>
      integrantes
      <footer className="App-footer">
        <a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a 
        <a rel="license" href="http://creativecommons.org/licenses/by/3.0/"> Creative Commons Attribution 3.0 Unported License</a>.
      </footer>
          </div>
  );
}

export default Integrants;
