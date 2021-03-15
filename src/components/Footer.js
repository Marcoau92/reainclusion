import React from 'react';
import { Component } from 'react';
import {grey} from '@material-ui/core/colors';
import { Grid } from "@material-ui/core";
import logo from './img/encabezado_no_fondo.png';



class Footer extends Component{
	render(){
		return(
			<Grid className="footer">
                <footer className="App-footer" style={{background:grey[400]}}>
                    <img src={logo} md={12} lg={12}/>
                    <div>
                        <a rel="license" href="http://creativecommons.org/licenses/by/3.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/3.0/88x31.png" /></a><br />This work is licensed under a 
                        <a rel="license" href="http://creativecommons.org/licenses/by/3.0/" font='Garamond Ligth Condensed'> Creative Commons Attribution 3.0 Unported License</a>.
                    </div>
                    
                </footer>
            </Grid>
			);
	}
}

export default Footer;