import React from 'react'
import Buscador from '../../components/Buscador';
import Test from '../../components/Test';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {grey} from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import { Component } from 'react';
import '../../components/myStyles.css'
import Testbar from '../../components/Testbar';
import Testbar2 from '../../components/Testbar2';
import Testbar3 from '../../components/Testbar3';
import Testbar4 from '../../components/Testbar4';
import Footer from '../../components/Footer_test';
import News_test from '../../components/News_test';
import { makeStyles } from '@material-ui/core/styles';



class App extends Component {
  
    
  
    render(){
        return (
            <Grid className="App" >
                <Grid item style={{background:grey[400]}}>
                  <Buscador xs={12} sm={12} md={12}/>
                </Grid>               
                <Testbar3 />
                <Grid item container md={6} lg={6}></Grid>
                <News_test />
                <Grid item style={{background:grey[400]}}>
                  <Footer className="position_test1_footer" xs={12} sm={12} md={12}/>
                </Grid> 
            </Grid> 
            
              
                

                  
                
          );

    }
  }
  
export default App;