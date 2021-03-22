import React from 'react';
import { Component } from 'react';
import {grey} from '@material-ui/core/colors';
import { Grid } from "@material-ui/core";
import logo from './img/encabezado_no_fondo.png';



class Footer extends Component{
	render(){
		return(
			<Grid className="footer" justify="center">
                <footer className="App-footer" style={{background:grey[400]}}>
                    <img src={logo} md={12} lg={12}/>
                    <Grid md={12} lg={12} justifyContent="center">
                    <text className="pservices text-justify">
                    Proyecto Recursos Educativos Abiertos (REA): Una oportunidad de innovación y democratización del conocimiento sobre prácticas inclusivas en el aula de inglés. VIDCA, 2020. Universidad Austral de Chile.
                    </text>

                    </Grid>
                    
                    <div>
                        <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Licencia Creative Commons" className="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />Esta obra está bajo una 
                        <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Licencia Creative Commons Atribución-NoComercial-CompartirIgual 4.0 Internacional</a>. 
                    </div>
                    
                </footer>
            </Grid>
			);
	}
}

export default Footer;