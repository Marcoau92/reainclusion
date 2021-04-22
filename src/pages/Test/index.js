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



class App extends Component {
  
    
  
    render(){
        return (
            <Grid className="App" >
                <Grid item style={{background:grey[400]}}>
                  <Buscador xs={12} sm={12} md={12}/>
                </Grid>
                  <Testbar>
                    <Testbar2/>
                  </Testbar>
                  <Test xs={10} sm={10} md={10} lg={10}/>                  
                </Grid> 
              
                

                  
                
          );

    }
  }
  
export default App;