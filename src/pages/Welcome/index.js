import React from 'react'
import Testbar3 from '../../components/Testbar3';
import Welcome from '../../components/Welcome';
import Buscador from '../../components/Buscador';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {grey} from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import { Component } from 'react';
import '../../components/myStyles.css'
import Footer from '../../components/Footer';



class App extends Component {
  
    
  
    render(){
        return (
          <Grid item container>
            <Grid item container xs={12} sm={12} md={12} style={{background:grey[400]}}>
                  <Buscador xs={12} sm={12} md={12}/> 
                </Grid>
          <Grid item container md={3} lg={3}>

          </Grid>
          <Grid item container md={6} lg={6}>
          <Testbar3 /> 
          <Welcome /> 
          </Grid>
          <Grid item container md={3} lg={3}>

          </Grid>

          <Footer/>      
        </Grid>

              
                

                  
                
          );

    }
  }
  
export default App;


