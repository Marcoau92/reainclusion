import React from 'react'
import Buscador from '../../components/Buscador';
import Welcome from '../../components/Welcome';
import Buttons from '../../components/Buttons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {grey} from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import { Component } from 'react';
import '../../components/myStyles.css'
import Wspace from '../../components/Wspace';
import Footer from '../../components/Footer';
import AppBar from '../../components/AppBar';

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

class App extends Component {
  
    
  
    render(){
      if (isMobile) {
        <Grid>
          <Grid item style={{background:grey[400]}}>
            <Buscador xs={12} sm={12} md={12}/>
          </Grid>
          <AppBar/>
          <Welcome/>
          <Footer/>

        </Grid>
      }
      
      else{
        return (
            <Grid className="App" >
                <Grid item style={{background:grey[400]}}>
                  <Buscador xs={12} sm={12} md={12}/>
                </Grid>
                <Buttons/>

                    <Grid xs={2} sm={2} md={2} lg={2}>
    
                    </Grid>
                  <Wspace/>
                  <Wspace/>
                  <Wspace/>
                  <Welcome xs={10} sm={10} md={10} lg={10}/>
                  <Wspace/>
                  <Wspace/>
                  <Wspace/>
                  <Wspace/>
                  
                  <Footer/>
                </Grid> 
              
                

                  
                
          );

    }
  }
  
    
}
export default App;


