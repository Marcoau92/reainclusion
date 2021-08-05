import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import ReactPlayer from 'react-player';
import { Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Wspace from '../Wspace'
import Wspace2 from '../Wspace2'

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
            
            <div >
                <Grid container justifyContent='flex-start'  md={6} lg={6}>
                <Link to='/Menu'>Atrás</Link>
                </Grid>                
                <Grid md={6} lg={6}>
                    <Typography className={classes.title} align='center' variant='h4'>Food for Thought </Typography>
                    <Wspace/>
                    <p class="pservices text-justify">
                    Aquí te presentaremos videos con los cuales enriquecer tus pensamientos sobre la diversidad y tener un nuevo punto de vista sobre la inclusión                                                                                 
                    </p>
                    <Wspace2/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Inclusión sí, ¿pero cómo? – Tatiana Cisternas </Typography>
                    <Wspace2/>
                    <Grid container style={{ justifyContent: "center"} }>
                            <ReactPlayer url='https://www.youtube.com/watch?v=3asWghCCN3M&ab_channel=UniversidadAlbertoHurtado '/>
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
                    <Typography className={classes.subtitle} align='center' variant='h1'>The difference between Diversity, Inclusion and Equity  </Typography>
                    <Wspace2/>
                    <Grid container style={{ justifyContent: "center"} }>
                            <ReactPlayer url='https://www.youtube.com/watch?v=spBB68Wv7KM&ab_channel=bhasinconsultinginc ' />
                    </Grid>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Inclusive Pedagogy – Professor Lani Florian </Typography>
                    <Wspace2/>
                    <Grid container style={{ justifyContent: "center"} }>
                            <ReactPlayer url='https://www.youtube.com/watch?v=LeeDwzZwTj8&list=WL&index=4&ab_channel=TheUniversityofEdinburgh  ' />
                    </Grid>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Los centros de educación especial en la Educación Inclusiva   </Typography>
                    <Wspace2/>
                    <Grid container style={{ justifyContent: "center"} }>
                            <ReactPlayer url='https://www.youtube.com/watch?v=V3M_xf0v0zc&ab_channel=IgnacioCalder%C3%B3nAlmendros  ' />
                    </Grid>
                    <Wspace/>
                </Grid>

                     
                    
                

            </div>

        );
    }



export default Resources1;