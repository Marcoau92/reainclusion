import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';

class Repository extends Component{
    render(){
        return(
            <div>
                <Grid container style={{ justifyContent: "center"}}>
                    <Router>
                        <Link to="/Igor Pérez_Tesis Final.pdf" target="_blank" download>DEVELOPING CHILDREN’S SOCIO-AFFECTIVE AND COMMUNICATIVE SKILLS</Link>
                    </Router>
                </Grid>

            </div>

        );
    }

}

export default Repository;