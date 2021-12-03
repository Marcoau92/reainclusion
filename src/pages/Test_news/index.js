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
import Test_news from '../../components/Test_news';



class App extends Component {
  
    
  
    render(){
        return (
            <Grid className="App" >
                <Grid item style={{background:grey[400]}}>
                  <Buscador xs={12} sm={12} md={12}/>
                </Grid>               
                <Testbar3 />
                <Grid item container md={6} lg={6}></Grid>
                <Test_news />
                <Grid item style={{background:grey[400]}}>
                  <Footer className="position_test1_footer" xs={12} sm={12} md={12}/>
                </Grid> 
            </Grid> 
            
              
                

                  
                
          );

    }
  }
  
export default App;