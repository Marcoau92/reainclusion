import React, {Component} from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';



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
          if (palabra2 === "discapacidad visual"){
            window.location.replace('/resources/5');
          }
          if (palabra2 === "priscila ancheo"){
            window.location.replace('/resources/5');
          }
          if (palabra2 === "estudiantes con tea"){
            window.location.replace('/resources/6');
          }
          if (palabra2 === "paola castro"){
            window.location.replace('/resources/6');
          }
          if (palabra2 === "camila ojeda"){
            window.location.replace('/resources/6');
          }
        }
    }

    render(){
      return(
          <Router>
            <Grid container className="row-reverse" justify='flex-start'> 
            <Button style={{color:'white', height:'25px'}} className="menuButton" href="">
            Para visualizar mejor esta pagina use chrome
            </Button>
            </Grid>
            <Grid container className="row-reverse" justify='flex-end'> 
            <Breadcrumbs className="separador" separator='|'>
                      <Button style={{color:'white', height:'25px'}} className="menuButton" href="http://uach.cl">
                      UACh
                      </Button>
                      <Button style={{color:'white', height:'25px'}} className="menuButton" href="http://humanidades.uach.cl/">
                      Facultad de Filosofía y Humanidades
                      </Button>
                    </Breadcrumbs> 
              <div className="form-group col-md-2" sd={2} xs={2}> 
                <input type="text" id="myInput" onKeyUp={this.myFunction} placeholder="Buscar..."/>
              </div>
            </Grid>
          </Router>
      );  
    };
}

export default Buscador;
