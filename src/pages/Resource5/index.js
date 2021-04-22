import React from 'react'
import Buscador from '../../components/Buscador';
import Resources from '../../components/Resource5';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {grey} from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import { Component } from 'react';
import '../../components/myStyles.css'
import Wspace from '../../components/Wspace';
import Footer from '../../components/Footer';
import Buttons from '../../components/Buttons';
import Testbar from '../../components/Testbar';

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
        <Testbar /> 
        <Resources/> 
        </Grid>
        <Grid item container md={3} lg={3}>

        </Grid>

        <Footer/>      
      </Grid>
               
                
        );

    }
    
}
export default App;