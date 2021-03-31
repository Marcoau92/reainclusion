import React from 'react'
import Buscador from '../../../components/Buscador';
import Resource1 from '../../../components/Resource5m';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {grey} from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import { Component } from 'react';
import '../../../components/myStyles.css'
import Wspace from '../../../components/Wspace';
import Footer from '../../../components/Footer';
import AppBar from '../../../components/AppBar';
import Resources from '../../../components/ResourcesMenu';


class App extends Component {
  
    
  
    render(){
        return (
            <Grid>
                <Grid item style={{background:grey[400]}}>
                    <Buscador xs={12} sm={12} md={12}/>
                </Grid>
                <AppBar/>
                <Resource1/>
                <Footer/>

            </Grid>
        );
    }
}
export default App;