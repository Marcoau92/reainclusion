import React from 'react';
import Buscador from './Buscador';
import Buttons from './Buttons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Grid from '@material-ui/core/Grid';
import { Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


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

const Contact = (props) => {
  const classes = useStyles();
  return (
    <div className="App" id="contacto" justify="center" >
      <Typography className={classes.title} align='center' variant='h2'>Contacto</Typography>
      <form>
        <Grid justify='center' md={12}>
          Nombre
        </Grid>
        <Grid justify='center' md={12}>
          <label>
              <input type="center" name="name" />
            </label>

        </Grid>
        <Grid justify='center' md={12}>
            Apellido:
        </Grid>
        <Grid justify='center' md={12}>
          <label>
              <input type="text" name="lastname" />
          </label>
        </Grid>
        <Grid justify='center' md={12}>
            e-mail:

        </Grid>
        <Grid justify='center' md={12}>
          <label>
            <input type="text" name="email" />
          </label> 

        </Grid>
        <Grid justify='center' md={12}>
            mensaje:
        </Grid>
        <Grid justify='center' md={12}>
          <label>
            <input type="text" name="message" />
          </label>
        </Grid>
        <Grid justify='center' md={12}>
          <input type="submit" value="Enviar"/>
        </Grid>    
        
        
      </form>  
    </div>
  );
}

export default Contact;
