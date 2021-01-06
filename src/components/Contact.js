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
        <Grid justify='flex-end' md={6}>
          Nombre
        </Grid>
        <Grid justify='flex-start' md={6}>
          <label>
              <input type="text" name="name" />
            </label>

        </Grid>
        <Grid justify='flex-end' md={6}>
            Apellido:
        </Grid>
        <Grid justify='flex-start' md={6}>
          <label>
              <input type="text" name="lastname" />
          </label>
        </Grid>
        <Grid justify='flex-end' md={6}>
            e-mail:

        </Grid>
        <Grid justify='flex-start' md={6}>
          <label>
            <input type="text" name="email" />
          </label> 

        </Grid>
        <Grid justify='flex-end' md={6}>
            mensaje:
        </Grid>
        <Grid justify='flex-start' md={6}>
          <label>
            <input type="text" name="message" />
          </label>
        </Grid>
        <Grid justify='center' md={6}>
          <input type="submit" value="Enviar"/>
        </Grid>    
        
        
      </form>  
    </div>
  );
}

export default Contact;
