import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';

class Resources extends Component{
    render(){
        return(
            <div>
                <Grid container item style={{ justifyContent: "center"} }>
                        <ReactPlayer url='https://www.youtube.com/watch?v=6aphi7R-JNY' width='100%' 
                        height='100%'/>
                </Grid>
                <Grid container item style={{ justifyContent: "center"}}>
                    <Router>
                        <Link to="/curriculum2020(1).docx" target="_blank" download>Recurso 1</Link>
                    </Router>
                </Grid>

            </div>

        );
    }

}

export default Resources;