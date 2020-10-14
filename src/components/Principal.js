import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactPlayer from 'react-player';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Contact from '../Contact';

class Principal extends Component{
    render(){
        return(
                <div>
                    <Router>
                        <Switch>
                        <ButtonGroup
                            orientation="vertical"
                            color="primary"
                            aria-label="vertical outlined primary button group"
                            
                            >
                            <Button>
                                <Route path='/contacto' exact components={Contact}/>
                                    Inicio</Button>
                            <Button>Proyecto</Button>
                            <Button>Integrantes</Button>
                            <Button>Recursos</Button>
                            <Button>Repositorio</Button>
                            <Button>Contacto</Button>
                        </ButtonGroup>
                        </Switch>
                    </Router>
                
                    <Grid container item style={{display: "flex", justifyContent: "center", alignItems: "center"}} md={10} xs={7}>
                        <ReactPlayer url='https://www.youtube.com/watch?v=6aphi7R-JNY'/>
                    </Grid>
                </div>
        );
    };

}

export default Principal;