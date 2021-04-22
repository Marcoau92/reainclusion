import React from 'react'
import Buscador from '../../components/Buscador';
import Repository from '../../components/Repository';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {grey} from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import { Component } from 'react';
import '../../components/myStyles.css'
import Wspace from '../../components/Wspace';
import Footer from '../../components/Footer';
import Buttons from '../../components/Buttons';

class App extends Component {
    render(){
        return (
        
      
            <Grid className="App"  >
                <Grid item style={{background:grey[400]}}>
                  <Buscador xs={12} sm={12} md={12}/> 
                </Grid>
                <Buttons/>
                  
                    <Grid xs={2} sm={2} md={2} lg={2}>
    
                    </Grid>
                  <Wspace/>
                  <Wspace/>
                  <Repository/>
                  <Wspace/>
                  <Wspace/>
                  <Wspace/>
                  <Wspace/>
                  <Wspace/>
                  <Wspace/>
                  <Wspace/>
                  <Wspace/>
                  <Wspace/>
                  <Wspace/>
                  <Wspace/>
                  <Wspace/>
                  <Wspace/>
                  <Wspace/>
                  <Wspace/>
                  <Wspace/>
                  <Wspace/>
               
              
                
                  
    
                
              <Footer/>
            </Grid>
                
        );

    }
    
}
export default App;