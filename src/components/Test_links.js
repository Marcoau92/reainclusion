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
            <div >
                

                <Grid style={{ justifyContent: "center"}}>
                <Typography className={classes.title} align='center' variant='h4'>Enlaces de interés </Typography>
                </Grid>
                <br></br>
                <Grid item container justifyContent="center"              
            direction="row">
        <Grid item container md={5} lg={5}justifyContent="center"              
            direction="row">
                <Grid container justifyContent='flex-start' >
                <Link to='/Menu'>Atrás</Link>
                </Grid>
                <Wspace2/>
                <Grid container style={{ justifyContent: "flex-start"}}  >
                    <Grid container >
                        •	Inclusión – Ministerio de Educación, Chile   
                        <a rel="pagina principal" href="https://escolar.mineduc.cl/inclusion/" md={6} xs={6} >https://escolar.mineduc.cl/inclusion/</a> 
                    </Grid>
                    <Grid container >
                        •	Apoyo a la inclusión – Ministerio de Educación, Chile    
                        <a rel="pagina principal" href="https://escolar.mineduc.cl/inclusion-convivencia-e-interculturalidad/inclusion/" md={6} xs={6} >https://escolar.mineduc.cl/inclusion-convivencia-e-interculturalidad/inclusion/</a> 
                    </Grid>
                    <Grid container >
                        •	Biblioteca digital MINEDUC    
                        <a rel="pagina principal" href="https://bibliotecadigital.mineduc.cl/handle/20.500.12365/27 " md={6} xs={6} >https://bibliotecadigital.mineduc.cl/handle/20.500.12365/27 </a> 
                    </Grid>
                    <Grid container >
                        •	European Agency for Special Needs and Inclusive Education   
                        <a rel="pagina principal" href="https://www.inclusive-education-in-action.org/resources " md={6} xs={6} >https://www.inclusive-education-in-action.org/resources </a> 
                    </Grid>
                    <Grid container >
                        •	Equity in Education - UNESCO    
                        <a rel="pagina principal" href="http://uis.unesco.org/en/topic/equity-education" md={6} xs={6} >http://uis.unesco.org/en/topic/equity-education</a> 
                    </Grid>
                    <Grid container >
                        •	Inclusive practices in English Language Teaching    
                        <a rel="pagina principal" href="https://elt.oup.com/feature/global/expert/inclusive?cc=cl&selLanguage=en " md={6} xs={6} >https://elt.oup.com/feature/global/expert/inclusive?cc=cl&selLanguage=en </a> 
                    </Grid>
                    <Grid container >
                        •	Specific Learning difficulties and the learning of additional languages   
                        <a rel="pagina principal" href="http://wp.lancs.ac.uk/learning-languages-with-splds/resources-for-teachers/ " md={6} xs={6} >http://wp.lancs.ac.uk/learning-languages-with-splds/resources-for-teachers/ </a> 
                    </Grid>
                    <Grid container >
                        •	ELT Well: Specific learning difficulties and language learning    
                        <a rel="pagina principal" href="http://eltwell.com/resources/further-information/ " md={6} xs={6} >http://eltwell.com/resources/further-information/ </a> 
                    </Grid>
                    <Grid container >
                        •	Languages without limits    
                        <a rel="pagina principal" href="https://www.languageswithoutlimits.co.uk/ " md={6} xs={6} >https://www.languageswithoutlimits.co.uk/ </a> 
                    </Grid>
                    <Grid container >
                        •	Using inclusive practices – British Council, Teaching English    
                        <a rel="pagina principal" href="https://www.teachingenglish.org.uk/professional-development/teachers/inclusive-practices " md={6} xs={6} >https://www.teachingenglish.org.uk/professional-development/teachers/inclusive-practices </a> 
                    </Grid>

                </Grid>
                </Grid>
                </Grid>
                <br></br>

            </div>

        );
    }



export default Repository;