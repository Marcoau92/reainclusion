import React from 'react';
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
    <Grid className={classes.root} item container xs={12} sm={12} md={12} lg={12} 
            justify="center"              
            direction="row">
    <div className='position_test1_bar' id="contacto" justify="center" >
      <br></br>
      <Grid >
      <Typography className={classes.title} align='center' variant='h3' >Contacto</Typography>
      <br></br>

      </Grid>
      
      <Grid item container justifyContent="center"              
            direction="row">
                <Grid md={3} lg={3} item container justifyContent="center"              
            direction="row"></Grid>
                <Grid md={6} lg={6} item container justifyContent="center"              
            direction="row">
                <p  class="pservices text-justify" align='center' md={6} lg={6}>
                ¡Muchas gracias por visitarnos!
      Si tienes alguna duda, sugerencia o quieres contactarte con alguno de nuestros colaboradores, déjanos un mensaje y te responderemos prontamente.

            </p>

                </Grid>
            
      
      </Grid>
      <Grid item container justifyContent="center"              
            direction="row">
      <Grid md={3} lg={3} item container justifyContent="center"              
            direction="row"></Grid>

      <Grid md={6} lg={6} item container justifyContent="center"              
            direction="row">
      <form onSubmit={sendEmail}>
        <Grid item container md={12}>
          Nombre
        </Grid>
        <Grid item container md={12}>
          <label>
              <input type="center" name="name" />
            </label>

        </Grid>
        <Grid item container md={12}>
            Apellido:
        </Grid>
        <Grid item container md={12}>
          <label>
              <input type="text" name="lastname" />
          </label>
        </Grid>
        <Grid item container md={12}>
            e-mail:

        </Grid>
        <Grid item container md={12}>
          <label>
            <input type="text" name="email" />
          </label> 

        </Grid>
        <Grid item container md={12}>
            mensaje:
        </Grid>
        <Grid item container md={12}>
          <label>
            <input type="text" name="message" style={{ width:"500px"} } />
          </label>
        </Grid>
        <Grid item container md={12}>
          <input type="submit" className="btn btn-info" value="Enviar" />
        </Grid>    
        
        
      </form>
      </Grid> 
      </Grid>    
      
    
        
    </div>
    </Grid>
  );
}

