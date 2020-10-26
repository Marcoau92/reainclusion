import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import ReactPlayer from 'react-player';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Principal extends Component{
    render(){
        return(
                <Grid>
                    <Router>
                        <Switch>
                        <ButtonGroup
                            orientation="vertical"
                            color="primary"
                            aria-label="vertical outlined primary button group"
                            
                            >
                            <Button>Inicio</Button>
                            <Button>Proyecto</Button>
                            <Button>Integrantes</Button>
                            <Button>Recursos</Button>
                            <Button>Repositorio</Button>
                            <Button>Contacto</Button>
                        </ButtonGroup>
                        </Switch>
                    </Router>
                </Grid>
        );
    };

}

export default Principal;