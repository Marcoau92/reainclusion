import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';
import { Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Wspace from './Wspace'
import Wspace2 from './Wspace2'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title:{
      color:'#00b3c5',
      fontWeight: 'bold'
  
    },
    subtitle:{
        color:'#00b3c5',
        fontWeight: 'bold',
        fontSize: '20px'
    },
  }));

const Resources1 = (props) => {
    const classes = useStyles();

        return(
            
            <div className="position_component_team">
                <Grid container justifyContent='flex-start'  md={6} lg={6}>
                <Link to='/Menu'>Atrás</Link>
                </Grid>
                
                <Grid md={6} lg={6}>
                    <Typography className={classes.title} align='center' variant='h3'>Food for Thought </Typography>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Inclusión sí, ¿pero cómo? – Tatiana Cisternas </Typography>
                    <Wspace2/>
                    <Grid container style={{ justifyContent: "center"} }>
                            <ReactPlayer url='https://www.youtube.com/watch?v=3asWghCCN3M&ab_channel=UniversidadAlbertoHurtado ' />
                    </Grid>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Implicit bias  </Typography>
                    <Wspace2/>
                    <Grid container style={{ justifyContent: "center"} }>
                            <ReactPlayer url='https://www.youtube.com/watch?v=OoBvzI-YZf4&ab_channel=McCombsSchoolofBusiness ' />
                    </Grid>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Kindness </Typography>
                    <Wspace2/>
                    <Grid container style={{ justifyContent: "center"} }>
                            <ReactPlayer url='https://www.youtube.com/watch?v=yn9VxUPlC5g&ab_channel=LifeVestInside ' />
                    </Grid>
                    <Wspace/>
                </Grid>

                     
                    
                

            </div>

        );
    }



export default Resources1;