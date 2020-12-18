import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Buttons extends Component{
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
                            <Button variant="contained" color="default" >Inicio</Button>
                            <Button variant="contained" color="default">Proyecto</Button>
                            <Button variant="contained" color="default">Integrantes</Button>
                            <Button variant="contained" color="default">Recursos</Button>
                            <Button variant="contained" color="default">Repositorio</Button>
                            <Button variant="contained" color="default">Contacto</Button>
                        </ButtonGroup>
                        </Switch>
                    </Router>
                </Grid>
        );
    };

}

export default Buttons;