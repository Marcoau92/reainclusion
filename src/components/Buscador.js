import React, {Component} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

class Buscador extends Component{
    state={}
    render(){
      return(
        <form>
          <Router>
            <Grid container className="row-reverse" justify='flex-end'> 
              <a rel="pagina principal" href="http://uach.cl" md={6} xs={6} >UACh</a>  
              <div className="form-group col-md-2" sd={2} xs={2}>
                  <input type="text" className="form-control form-control-xs" placeholder="Buscar"/>
              </div>
            </Grid>
          </Router>
    </form>
      );  
    };
}

export default Buscador;
