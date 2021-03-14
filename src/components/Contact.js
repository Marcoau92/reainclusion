import React from 'react';
import Buscador from './Buscador';
import Buttons from './Buttons';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Grid from '@material-ui/core/Grid';
import { Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import emailjs from 'emailjs-com';


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

export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_yr537xn', 'template_t619zpq', e.target, 'user_WrOsiT2QPUOvDxOJjmuVx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  const classes = useStyles();
  return (
    <div className="App" id="contacto" justify="center" >
      <Typography className={classes.title} align='center' variant='h3' >Contacto</Typography>
      <form onSubmit={sendEmail}>
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
          <input type="submit" className="btn btn-info" value="Enviar"/>
        </Grid>    
        
        
      </form>  
    </div>
  );
}

