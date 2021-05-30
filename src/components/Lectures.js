import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Wspace2 from './Wspace2';
import book1 from './img/book1.png';
import Wspace from './Wspace';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title:{
      color:'#00b3c5',
      fontWeight: 'bold',
  
    },
    memberName:{
      fontWeight: 'bold',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
  const Repository = (props) => {
    const classes = useStyles();
        return(
            <div className="position_component_team">
                <Grid container justifyContent='flex-start'  md={6} lg={6}>
                <Link to='/Menu'>Atrás</Link>
                </Grid>
                <br></br>
                <Grid md={6} lg={6} style={{ justifyContent: "center"}}>
                <Typography className={classes.title} align='center' variant='h3'>Lecturas Sugeridas </Typography>
                </Grid>
                <br></br>
                <Wspace2/>
                <p>
                    Aquí te presentamos algunas lecturas recomendables de diferentes fuentes que pueden resultar de tu interés
                </p>
                <Wspace/>
                <a rel="license" href="https://unesdoc.unesco.org/ark:/48223/pf0000098427 ">
                  <img src={book1}  alt="encabezado" xs={6} sm={6} md={6} lg={6}/>
                </a>
                

            </div>

        );
    }



export default Repository;