import React from 'react';
import './App.css';
import Welcome from './pages/Welcome/index';
import Project from './pages/Project/index';
import Team from './pages/Team/index';
import Resources from './pages/Resources/index';
import Repository from './pages/Repository/index';
import Contact from './pages/Contact/index';
import Welcomem from './pages/Mobile/Welcome/index';
import Projectm from './pages/Mobile/Project/index';
import Teamm from './pages/Mobile/Team/index';
import Resourcesm from './pages/Mobile/Resources/index';
import Repositorym from './pages/Mobile/Repository/index';
import Contactm from './pages/Mobile/Contact/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './components/myStyles.css'
import Resources1 from './pages/Resource1';
import Resources2 from './pages/Resource2';
import Resources3 from './pages/Resource3';
import Resources4 from './pages/Resource4';
import Resources1m from './pages/Mobile/Resource1';


export default function App() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    return(
    <Router>
          <Switch>
            <Route exact path={["/","/home"]}>
              <Welcomem />
            </Route>
            <Route exact path="/project">
              <Projectm />
            </Route>
            <Route exact path="/team">
              <Teamm />
            </Route>
            <Route exact path="/resources">
              <Resourcesm />
            </Route>
            <Route exact path="/repository">
              <Repositorym />
            </Route>
            <Route exact path="/contact">
              <Contactm />
            </Route>
            <Route exact path="/resources/1">
              <Resources1m />
            </Route>
          </Switch>
    
      </Router>
    );
        
  }
  
  else{
    return (
      <Router>
          <Switch>
            <Route exact path={["/","/home"]}>
              <Welcome />
            </Route>
            <Route exact path="/project">
              <Project />
            </Route>
            <Route exact path="/team">
              <Team />
            </Route>
            <Route exact path="/resources">
              <Resources />
            </Route>
            <Route exact path="/repository">
              <Repository />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/resources/1">
              <Resources1 />
            </Route>
            <Route exact path="/resources/2">
              <Resources2 />
            </Route>
            <Route exact path="/resources/3">
              <Resources3 />
            </Route>
            <Route exact path="/resources/4">
              <Resources4 />
            </Route>
          </Switch>
    
      </Router>
    );

  }
}
  


