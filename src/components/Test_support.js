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
            <div className="position_test1_bar">
                <Grid container justifyContent='flex-start'  md={6} lg={6}>
                <Link to='/Menu'>Atrás</Link>
                </Grid>
                <br></br>
                <Grid  style={{ justifyContent: "center"}}>
                <Typography className={classes.title} align='center' variant='h4'>Recursos sugeridos por el ministerio de educación</Typography>
                </Grid>
                <br></br>
                <Wspace2/>
                <Grid item container justifyContent="center"              
            direction="row">
        <Grid item container md={6} lg={6}justifyContent="center"              
            direction="row">
                <Grid container style={{ justifyContent: "flex-start"}} >
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
                        <a rel="pagina principal" href="https://bibliotecadigital.mineduc.cl/bitstream/handle/20.500.12365/2099/mono-918.pdf?sequence=1&isAllowed=y " md={6} xs={6} >5.	Discriminación en el contexto escolar: Orientaciones para promover una escuela inclusiva </a> 
                    </Grid>
                    <Grid container >
                            
                        <a rel="pagina principal" href="https://bdescolar.mineduc.cl/results?facets=materia_facet_ss:%22Educaci%C3%B3n%20Inclusiva%22 " md={6} xs={6} >6.	Biblioteca Digital Escolar </a> 
                    </Grid>
                    

                </Grid>
                <Grid  style={{ justifyContent: "center"}}>
                <br></br>
                <Typography className={classes.title} align='center' variant='h4'>Otros Recursos</Typography>
                </Grid>
                <br></br>
                <Wspace2/>
                <Grid container style={{ justifyContent: "flex-start"}}  >
                    <Grid container >
                           
                        <a rel="pagina principal" href="https://www.eenet.org.uk/resources/docs/Index%20English.pdf " md={6} xs={6} >7.	Index for Inclusion (2002 - English)  </a> 
                    </Grid>
                    <Grid container >
                          
                        <a rel="pagina principal" href="https://downgalicia.org/wp-content/uploads/2018/01/Guia-para-la-Educacion-Inclusiva.pdf " md={6} xs={6} >8.	Guía para la educación inclusive (2011 - Adaptación Index for Inclusion) </a> 
                    </Grid>
                    <Grid container >
                             
                        <a rel="pagina principal" href="https://www.unicef.org/media/66486/file/Child-Friendly-Schools-Manual.pdf " md={6} xs={6} >9.	Child-friendly schools – Manual </a> 
                    </Grid>
                    <Grid container >
                           
                        <a rel="pagina principal" href="https://www.unicef.org/media/58081/file/UNICEF-WHO-UNESCO-handbook-school-based-violence.pdf " md={6} xs={6} >10.	School-based violence prevention   </a> 
                    </Grid>
                    <Grid container >
                        <a rel="pagina principal" href="https://unesdoc.unesco.org/ark:/48223/pf0000243279  " md={6} xs={6} >11.	Training tools for curriculum development: Reaching out to all learners  </a> 
                    </Grid>
                    <Grid container >
                            
                        <a rel="pagina principal" href="https://unesdoc.unesco.org/ark:/48223/pf0000137522 " md={6} xs={6} >12.	Embracing diversity: toolkit for creating inclusive, learning-friendly environments </a> 
                    </Grid>
                    <Grid container >
                           
                        <a rel="pagina principal" href="https://www.teachingenglish.org.uk/sites/teacheng/files/J105_10_inclusive_practices_web_0.pdf " md={6} xs={6} >13.	Using inclusive practices  </a> 
                    </Grid>
                    <Grid container >
                          
                        <a rel="pagina principal" href="http://www.facso.uchile.cl/documentos/orientaciones-estrategicas-para-la-formacion-de-monitores-en-mediacion-de-conflictos_63095_5_5937.pdf " md={6} xs={6} >14.	Orientaciones estratégicas para la formación de monitores en mediación de conflictos escolares  </a> 
                    </Grid>
                    <Grid container >
                             
                        <a rel="pagina principal" href="http://www.educatolerancia.com/wp-content/uploads/2016/12/apoyo5.pdf " md={6} xs={6} >15.	Interculturalidad desde el aula: Sugerencias para trabajar a partir de la diversidad </a> 
                    </Grid>
                    <Grid container >
                           
                        <a rel="pagina principal" href="http://cultureofempathy.com/References/Experts/Others/Files/Marieke-Kingma-Empathy-Training-Manual.pdf  " md={6} xs={6} >16.	Increasing empathy – Manual    </a> 
                    </Grid>
                    <Grid container >
                            
                        <a rel="pagina principal" href="https://www2.aefcm.gob.mx/petc/archivos-caja/Fichero-Convivir.pdf " md={6} xs={6} >17.	Aprender a convivir – Actividades sugeridas </a> 
                    </Grid>
                    <Grid container >
                        <a rel="pagina principal" href="https://www.scout.org/sites/default/files/tutorial_files/empathy%20games.pdf " md={6} xs={6} >18.	Empathy games  </a> 
                    </Grid>
                    <Grid container >
                            
                        <a rel="pagina principal" href="http://sitios.dif.gob.mx/buentrato/wp-content/archivos/talleres/Manual_participantes2.pdf " md={6} xs={6} >19.	Desarrollo de habilidades de buen trato en la familia</a> 
                    </Grid>

                </Grid>
                </Grid>
                </Grid>

            </div>

        );
    }



export default Repository;