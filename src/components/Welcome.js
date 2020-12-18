import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';

class Welcome extends Component{
    render(){
        return(
            <div>
                <Grid container style={{ justifyContent: "center"} }>
                        <ReactPlayer url='https://www.youtube.com/watch?v=YT_xTZjZQmE&feature=youtu.be' />
                </Grid>

            </div>

        );
    }

}

export default Welcome;