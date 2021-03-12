import React from 'react';
import './App.css';
import Welcome from './pages/Welcome/index';
import Project from './pages/Project/index';
import Team from './pages/Team/index';
import Resources from './pages/Resources/index';
import Repository from './pages/Repository/index';
import Contact from './pages/Contact/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './components/myStyles.css'
import Resources1 from './pages/Resource1';


export default function App() {
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    
  if (isMobile) {
    <Router>
          <Switch>
            <Route exact path={["/m","/mhome"]}>
              <Welcome />
            </Route>
            <Route exact path="/mproject">
              <Project />
            </Route>
            <Route exact path="/mteam">
              <Team />
            </Route>
            <Route exact path="/mresources">
              <Resources />
            </Route>
            <Route exact path="/mrepository">
              <Repository />
            </Route>
            <Route exact path="/mcontact">
              <Contact />
            </Route>
            <Route exact path="/mresources/1">
              <Resources1 />
            </Route>
          </Switch>
    
      </Router>

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
          </Switch>
    
      </Router>
    );

  }
  
}

