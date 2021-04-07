import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Grid from '@material-ui/core/Grid';



class Buscador extends Component{
  

     myFunction = (e)  => {
        var palabra = document.getElementById('myInput').value;
        var palabra2 =palabra.toLowerCase();
        if (e.keyCode === 13){
          console.log(palabra);
          if (palabra2 === "felipe"){
            window.location.replace('/resources/1');
          }
          if (palabra2 === "felipe martinez"){
            window.location.replace('/resources/1');
          }
          if (palabra2 === "felipe martinez corona"){
            window.location.replace('/resources/1');
          }
          if (palabra2 === "estudiantes sordos"){
            window.location.replace('/resources/1');
          }
          if (palabra2 === "ana venegas millapan"){
            window.location.replace('/resources/2');
          }
          if (palabra2 === "ana venegas"){
            window.location.replace('/resources/2');
          }
          if (palabra2 === "ana"){
            window.location.replace('/resources/2');
          }
          if (palabra2 === "LGBTQ+"){
            window.location.replace('/resources/2');
          }
          if (palabra2 === "amalia ortiz de zarate"){
            window.location.replace('/resources/3');
          }
          if (palabra2 === "amalia ortiz"){
            window.location.replace('/resources/3');
          }
          if (palabra2 === "amalia"){
            window.location.replace('/resources/3');
          }
          if (palabra2 === "tecnicas teatrales"){
            window.location.replace('/resources/3');
          }
          if (palabra2 === "yasna yilorn barrientos"){
            window.location.replace('/resources/4');
          }
          if (palabra2 === "yasna yilorn"){
            window.location.replace('/resources/4');
          }
          if (palabra2 === "yasna"){
            window.location.replace('/resources/4');
          }
          if (palabra2 === "compromiso social"){
            window.location.replace('/resources/4');
          }
        }
    }

    render(){
      return(
          <Router>
            <Grid container className="row-reverse" justify='flex-end'> 
              <a rel="pagina principal" href="http://uach.cl" md={6} xs={6} >www.uach.cl</a>  
              <div className="form-group col-md-2" sd={2} xs={2}> 
                <input type="text" id="myInput" onKeyUp={this.myFunction} placeholder="Buscar..."/>
              </div>
            </Grid>
          </Router>
      );  
    };
}

export default Buscador;
