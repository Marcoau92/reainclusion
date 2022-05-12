import React from 'react';
import './App.css';
import Welcome from './pages/Welcome/index';
import Project from './pages/Project/index';
import Team from './pages/Team/index';
import Resources from './pages/Resources/index';
import Repository from './pages/Repository/index';
import Contact from './pages/Contact/index';
import News from './pages/News/index';
import Menu from './pages/Menu/index';
import Food from './pages/Food/index';
import Links from './pages/Links/index';
import Apoyo from './pages/Apoyo/index';
import Lecturas from './pages/Lecturas/index';
import Test from './pages/Test_welcome/index';
import Test_apoyo from './pages/Test_apoyo/index';
import Test_contacto from './pages/Test_contacto/index';
import Test_food from './pages/Test_food/index';
import Test_lecturas from './pages/Test_lecturas/index';
import Test_links from './pages/Test_links/index';
import Test_menu from './pages/Test_menu/index';
import Test_news from './pages/Test_news/index';
import Test_project from './pages/Test_project/index';
import Test_recurso1 from './pages/Test_recurso1/index';
import Test_recurso2 from './pages/Test_recurso2/index';
import Test_recurso3 from './pages/Test_recurso3/index';
import Test_recurso4 from './pages/Test_recurso4/index';
import Test_recurso5 from './pages/Test_recurso5/index';
import Test_recurso6 from './pages/Test_recurso6/index';
import Test_recursos from './pages/Test_recursos/index';
import Test_repository from './pages/Test_repository/index';
import Test_team from './pages/Test_team/index';
import Welcomem from './pages/Mobile/Welcome/index';
import Projectm from './pages/Mobile/Project/index';
import Teamm from './pages/Mobile/Team/index';
import Resourcesm from './pages/Mobile/Resources/index';
import Repositorym from './pages/Mobile/Repository/index';
import Contactm from './pages/Mobile/Contact/index';
import Foodm from './pages/Mobile/Food/index';
import Menum from './pages/Mobile/Menu/index';
import Apoyom from './pages/Mobile/Apoyo/index';
import Linksm from './pages/Mobile/Links/index';
import Lecturasm from './pages/Mobile/Lecturas/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './components/myStyles.css'
import Resources1 from './pages/Resource1';
import Resources2 from './pages/Resource2';
import Resources3 from './pages/Resource3';
import Resources4 from './pages/Resource4';
import Resources5 from './pages/Resource5';
import Resources6 from './pages/Resource6';
import Resources1m from './pages/Mobile/Resource1';
import Resources2m from './pages/Mobile/Resource2';
import Resources3m from './pages/Mobile/Resource3';
import Resources4m from './pages/Mobile/Resource4';
import Resources5m from './pages/Mobile/Resource5';
import Resources6m from './pages/Mobile/Resource6';
import Newsm from './pages/Mobile/News';

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
            <Route exact path="/resources/2">
              <Resources2m />
            </Route>
            <Route exact path="/resources/3">
              <Resources3m />
            </Route>
            <Route exact path="/resources/4">
              <Resources4m />
            </Route>
            <Route exact path="/resources/5">
              <Resources5m />
            </Route>
            <Route exact path="/resources/6">
              <Resources6m />
            </Route>
            <Route exact path="/news">
              <Newsm />
            </Route>
            <Route exact path="/menu">
              <Menum />
            </Route>
            <Route exact path="/Food">
              <Foodm />
            </Route>
            <Route exact path="/links">
              <Linksm />
            </Route>
            <Route exact path="/supports">
              <Apoyom />
            </Route>
            <Route exact path="/lectures">
              <Lecturasm />
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
              <Test />
            </Route>
            <Route exact path="/project">
              <Test_project />
            </Route>
            <Route exact path="/team">
              <Test_team />
            </Route>
            <Route exact path="/resources">
              <Test_recursos />
            </Route>
            <Route exact path="/repository">
              <Test_repository />
            </Route>
            <Route exact path="/contact">
              <Test_contacto />
            </Route>
            <Route exact path="/resources/1">
              <Test_recurso1 />
            </Route>
            <Route exact path="/resources/2">
              <Test_recurso2 />
            </Route>
            <Route exact path="/resources/3">
              <Test_recurso3 />
            </Route>
            <Route exact path="/resources/4">
              <Test_recurso4 />
            </Route>
            <Route exact path="/resources/5">
              <Test_recurso5 />
            </Route>
            <Route exact path="/resources/6">
              <Test_recurso6 />
            </Route>
            <Route exact path="/news">
              <Test_news />
            </Route>
            <Route exact path="/menu">
              <Test_menu />
            </Route>
            <Route exact path="/food">
              <Test_food />
            </Route>
            <Route exact path="/links">
              <Test_links />
            </Route>
            <Route exact path="/supports">
              <Test_apoyo />
            </Route>
            <Route exact path="/lectures">
              <Test_lecturas />
            </Route>
          </Switch>
    
      </Router>
    );

  }
}
  


