import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Wspace2 from './Wspace2';


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
                <Typography className={classes.title} align='center' variant='h4'>Recursos sugeridos por el ministerio de educación</Typography>
                </Grid>
                <br></br>
                <Wspace2/>
                <Grid container style={{ justifyContent: "flex-start"}} md={6} lg={6} >
                    <Grid container >
                           
                        <a rel="pagina principal" href="https://migrantes.mineduc.cl/wp-content/uploads/sites/88/2018/06/Orientaciones-para-la-construcci%C3%B3n-de-comunidades-educativas-inclusivas-2017.pdf" md={6} xs={6} >1.	Orientaciones para la construcción de comunidades educativas inclusivas </a> 
                    </Grid>
                    <Grid container >
                          
                        <a rel="pagina principal" href="https://www.ayudamineduc.cl/sites/default/files/orientaciones-estudiantes-extranjeros-21-12-17.pdf " md={6} xs={6} >2.	Orientaciones técnicas para la inclusión educativa de estudiantes extranjeros </a> 
                    </Grid>
                    <Grid container >
                             
                        <a rel="pagina principal" href="https://bibliotecadigital.mineduc.cl/bitstream/handle/20.500.12365/14457/Comunidades-Educativas-Inclusivas.pdf?sequence=1&isAllowed=y " md={6} xs={6} >3.	Comunidades educativas inclusivas: Claves para la acción  </a> 
                    </Grid>
                    <Grid container >
                           
                        <a rel="pagina principal" href="https://bibliotecadigital.mineduc.cl/bitstream/handle/20.500.12365/14488/Manual-Lenguaje-Inclusivo-No-Sexista.pdf?sequence=1&isAllowed=y  " md={6} xs={6} >4.	Orientaciones para un uso de lenguaje no sexista e inclusivo  </a> 
                    </Grid>
                    <Grid container >
                        <a rel="pagina principal" href="https://bibliotecadigital.mineduc.cl/bitstream/handle/20.500.12365/2099/mono-918.pdf?sequence=1&isAllowed=y " md={6} xs={6} >5.	Discriminación en el contexto escolar: Orientaciones para promover <br></br>una escuela inclusiva </a> 
                    </Grid>
                    <Grid container >
                            
                        <a rel="pagina principal" href="https://bdescolar.mineduc.cl/results?facets=materia_facet_ss:%22Educaci%C3%B3n%20Inclusiva%22 " md={6} xs={6} >6.	Biblioteca Digital Escolar </a> 
                    </Grid>
                    

                </Grid>

            </div>

        );
    }



export default Repository;