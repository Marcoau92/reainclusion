import React from 'react'
import Buscador from '../../components/Buscador';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {grey} from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import { Component } from 'react';
import '../../components/myStyles.css'
import Testbar3 from '../../components/Testbar3';
import Footer from '../../components/Footer_test';
import Test_welcome from '../../components/Test_welcome';



class App extends Component {
  
    
  
    render(){
        return (
            <Grid className="App" justify="center" >
                <Grid item style={{background:grey[400]}}>
                  <Buscador xs={12} sm={12} md={12}/>
                </Grid>
                <Grid container item md={4} lg={4}>

                </Grid>
                <Grid item container xs={12} sm={12} md={12}>              
                <Testbar3 xs={8} sm={8} md={8} />
                <Grid container item md={4} lg={4} ></Grid>
                <Grid item container xs={8} sm={8} md={8}> 
                <Test_welcome xs={8} sm={8} md={8} />
                </Grid> 
                </Grid>
                <Grid item style={{background:grey[400]}}>
                  <Footer xs={12} sm={12} md={12}/>
                </Grid> 
            </Grid> 
            
              
                

                  
                
          );

    }
  }
  
export default App;