import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Grid from '@material-ui/core/Grid';
import { Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import emailjs from 'emailjs-com';
import Wspace2 from './Wspace2'


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

    emailjs.sendForm('service_zxfwrxf', 'template_t619zpq', e.target, 'user_WrOsiT2QPUOvDxOJjmuVx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  const classes = useStyles();
  return (
    <div className="position_component_team" id="contacto" justify="center" style={{width:'884px'}}>
      <br></br>
      <Grid >
      <Typography className={classes.title} align='center' variant='h3' >Contacto</Typography>

      </Grid>
      <Grid >
      <p class="pservices text-justify">
      ¡Muchas gracias por visitarnos!
      Si tienes alguna duda, sugerencia o quieres contactarte con alguno de nuestros colaboradores, déjanos un mensaje y te responderemos prontamente.


      </p>

      </Grid>

      <Grid >
      <form onSubmit={sendEmail}>
        <Grid justify='flex-start' md={12}>
          Nombre
        </Grid>
        <Grid justify='flex-start' md={12}>
          <label>
              <input type="center" name="name" />
            </label>

        </Grid>
        <Grid justify='flex-start' md={12}>
            Apellido:
        </Grid>
        <Grid justify='flex-start' md={12}>
          <label>
              <input type="text" name="lastname" />
          </label>
        </Grid>
        <Grid justify='flex-start' md={12}>
            e-mail:

        </Grid>
        <Grid justify='flex-start' md={12}>
          <label>
            <input type="text" name="email" />
          </label> 

        </Grid>
        <Grid justify='flex-start' md={12}>
            mensaje:
        </Grid>
        <Grid justify='flex-start' md={12}>
          <label>
            <input type="text" name="message" style={{width: "884px",height: "300px"}}/>
          </label>
        </Grid>
        <Grid justify='flex-start' md={12}>
          <input type="submit" className="btn btn-info" value="Enviar"/>
        </Grid>    
        
        
      </form> 
      </Grid>    
      <Wspace2/>  
       
    </div>
  );
}

