import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';
import { Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import sections from './test_sections'

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
    memberName: {
        fontStyle: 'italic'

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        backgroundcolor: '#a4f9ef7F',
      }
  }));

const Resources = (props) => {  
    const classes = useStyles();
        return(
            <div >
                <Grid item container md={4} lg={4} ></Grid>
                <br></br>
                <Grid item container md={8} lg={8}  justifyContent="center" > 
                <Grid md={12} lg={12}>
                <Typography className={classes.title} align='center' variant='h3'>Recursos</Typography>

                </Grid>

                <br></br>
                <Grid item container justifyContent="center"              
            direction="row">
        <Grid item containerjustifyContent="center"              
            direction="row"> 
                <Grid >
                <p  class="pservices text-justify">
                La individualidad de nuestros estudiantes no puede reducirse a una categoría. Por lo tanto, los siguientes recursos representan un apoyo para que en conjunto con su comunidad puedan potenciar la inclusión y celebrar la diversidad en su aula.
                </p>
                </Grid>
                <br></br>
                <Grid className={classes.root} container justify='center' alignItems='center' >
                {sections.map(member => (
                    <Grid item justify="center"  sm={6} md={6} lg={6}>
                        <Link to={member.url} >
                            <Card className={classes.paper} elevation={0}>
                                <img alt={member.name} src={member.picture} justify="center" width='120px' height='120px'/>
                                <Typography className={classes.subtitle}>{member.theme}</Typography>
                                <Typography className={classes.memberName}>{member.name}</Typography>
                            </Card>
                        </Link>
                    
                </Grid>
                ))}
                </Grid>
                </Grid>
                </Grid>
                </Grid>


                <br></br>

            </div>
           
            

        );
    }



export default Resources;