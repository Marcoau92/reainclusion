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
                    <Typography className={classes.subtitle} align='center' variant='h1'>Through the eyes of a child    </Typography>
                    <Wspace2/>
                    <Grid container style={{ justifyContent: "center"} }>
                            <ReactPlayer url='https://www.youtube.com/watch?v=fj60_kNQQP8&ab_channel=CermiArag%C3%B3n  ' />
                    </Grid>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Cómo tratar a una persona con discapacidad   </Typography>
                    <Wspace2/>
                    <Grid container style={{ justifyContent: "center"} }>
                            <ReactPlayer url='https://www.youtube.com/watch?v=A8aoyCdFmGQ&ab_channel=WOKITOKI ' />
                    </Grid>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Cómo referirse a una persona con discapacidad    </Typography>
                    <Wspace2/>
                    <Grid container style={{ justifyContent: "center"} }>
                            <ReactPlayer url='https://www.youtube.com/watch?v=Sz5EFArn-iU&ab_channel=WOKITOKI  ' />
                    </Grid>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Restorative approaches to school conflict management   </Typography>
                    <Wspace2/>
                    <Grid container style={{ justifyContent: "center"} }>
                            <ReactPlayer url='https://www.youtube.com/watch?v=gGUOavfSyy8&ab_channel=MarylandCareyLaw  ' />
                    </Grid>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Educación inclusiva – Gerardo Echeita    </Typography>
                    <Wspace2/>
                    <Grid container style={{ justifyContent: "center"} }>
                            <ReactPlayer url='https://www.youtube.com/watch?v=lzr1zHAxYGE&ab_channel=Plenainclusi%C3%B3n ' />
                    </Grid>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>What happens to schools in conflict zones?   </Typography>
                    <Wspace2/>
                    <Grid container style={{ justifyContent: "center"} }>
                            <ReactPlayer url='https://www.youtube.com/watch?v=LGlchPuFutE&ab_channel=NowThisWorld ' />
                    </Grid>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>Thinking differently about difference   </Typography>
                    <Wspace2/>
                    <Grid container style={{ justifyContent: "center"} }>
                    <a rel="pagina principal" href="https://www.bbc.co.uk/sounds/play/b0b52cn5" md={6} xs={6} >https://www.bbc.co.uk/sounds/play/b0b52cn5 </a> 
                    </Grid>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>“Lloran los niños” – Crecer en la Araucanía, Chile   </Typography>
                    <Wspace2/>
                    <Grid container style={{ justifyContent: "center"} }>
                            <ReactPlayer url='https://www.youtube.com/watch?v=gzzk-scVXz4&ab_channel=Se%C3%B1al3LaVictoria  ' />
                    </Grid>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>From special to inclusive education – Interview with Professor Mel Ainscow   </Typography>
                    <Wspace2/>
                    <Grid container style={{ justifyContent: "center"} }>
                            <ReactPlayer url='https://www.youtube.com/watch?v=oKz09ngdNcA&ab_channel=InterkantonaleHochschulef%C3%BCrHeilp%C3%A4dagogik   ' />
                    </Grid>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>The race – Are we equal?    </Typography>
                    <Wspace2/>
                    <Grid container style={{ justifyContent: "center"} }>
                            <ReactPlayer url='https://www.youtube.com/watch?v=ZT1zCK7aX4k&ab_channel=AliHassan ' />
                    </Grid>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>This is equity   </Typography>
                    <Wspace2/>
                    <Grid container style={{ justifyContent: "center"} }>
                            <ReactPlayer url='https://www.youtube.com/watch?v=tcPGacPFt6E&ab_channel=CaliforniansDedicatedtoEducationFoundation  ' />
                    </Grid>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'> La diversidad es la característica que hace al humano SER HUMANO  </Typography>
                    <Wspace2/>
                    <Grid container style={{ justifyContent: "center"} }>
                            <ReactPlayer url='https://www.youtube.com/watch?v=25EmyAA9uPU&ab_channel=InteligenciasyDesarrollo  ' />
                    </Grid>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'> Equality, Diversity & Inclusion  </Typography>
                    <Wspace2/>
                    <Grid container style={{ justifyContent: "center"} }>
                            <ReactPlayer url='https://www.youtube.com/watch?v=C-uyB5I6WnQ&ab_channel=GwenGlynn  ' />
                    </Grid>
                    <Wspace/>
                    <Typography className={classes.subtitle} align='center' variant='h1'>  Competencies for teaching in multicultural classrooms   </Typography>
                    <Wspace2/>
                    <Grid container style={{ justifyContent: "center"} }>
                            <ReactPlayer url='https://www.youtube.com/watch?v=MwM7kYUGUzA&ab_channel=UniversityofNewBrunswick   ' />
                    </Grid>
                    <Wspace/>
                </Grid>

                     
                    
                

            </div>

        );
    }



export default Resources1;