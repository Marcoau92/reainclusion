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
            <div>
                <Grid style={{ justifyContent: "center"}}>
                <Typography className={classes.title} align='center' variant='h3'>Repositorio</Typography>
                </Grid>
                <br></br>
                <Grid item container justifyContent="center"              
            direction="row">
        <Grid item container md={5} lg={5}justifyContent="center"              
            direction="row">  
                <Grid  justify="flex-start">
                <p  class="pservices text-justify">
                A continuación podrás encontrar archivos descargables con investigaciones y propuestas para potenciar la inclusión de tus estudiantes. 
Gran parte de estos documentos corresponden a tesis de pregrado de profesores egresados de la carrera Pedagogía en Comunicación en Lengua Inglesa de la UACh.
Si quieres colaborar con tu propia investigación o propuesta, no dudes en contactarnos. También puedes hacernos llegar estudios o artículos de otros autores, siempre que sean de uso libre y gratuito.

                    </p>
                </Grid>
                <Wspace2/>
                <Grid container style={{ justifyContent: "flex-start"}} >
                    <Router>
                        <Link to="/repository/Assessing Visually Impaired Students in Inclusive Classrooms (Morales & Soto, 2014).pdf" target="_blank" download>•	 Assessing Visually Impaired Students in Inclusive Classrooms (Morales & Soto, 2014)</Link>
                    </Router>
                    <Router>
                        <Link to="/repository/Break dancers in the EFL classroom...(Salinas, 2014).pdf" target="_blank" download>•	 Break dancers in the EFL classroom...(Salinas, 2014)</Link>
                    </Router>
                    <Router>
                        <Link to="/repository/Developing SENAME children's socio-Affective and Communicative Skills (Igor & Pérez, 2020).pdf" target="_blank" download>•	 Developing SENAME children's socio-Affective and Communicative Skills (Igor & Pérez, 2020)</Link>
                    </Router>
                    <Router>
                        <Link to="/repository/Drama Techniques as an effective way to teach English to visually impaired students (Castillo & Siebert, 2013).pdf" target="_blank" download>•	 Drama Techniques as an effective way to teach English to visually impaired students (Castillo & Siebert, 2013)</Link>
                    </Router>
                    <Router>
                        <Link to="/repository/Including children with Asperger Syndrome in an English class...(Navarro, 2011).pdf" target="_blank" download>•	 Including children with Asperger Syndrome in an English class...(Navarro, 2011)</Link>
                    </Router>
                    <Router>
                        <Link to="/repository/Introducing EFL through NFE in social risk context (Berkhoff & Gahona, 2014).pdf" target="_blank" download>•	 Introducing EFL through NFE in social risk context (Berkhoff & Gahona, 2014)</Link>
                    </Router>
                    <Router>
                        <Link to="/repository/Principle-based language activities to promote a peaceful coexistence...(Arias & Rivera, 2020).pdf" target="_blank" download>•	 Principle-based language activities to promote a peaceful coexistence...(Arias & Rivera, 2020)</Link>
                    </Router>
                    <Router>
                        <Link to="/repository/Safe and Inclusive Schools-Teacher's strategies to handle peer-to-peer violence (Soto, 2016).pdf" target="_blank" download>•	 Safe and Inclusive Schools-Teacher's strategies to handle peer-to-peer violence (Soto, 2016)</Link>
                    </Router>
                    <Router>
                        <Link to="/repository/Social risk students-Creating a favourable classroom environment through drama (Acosta & Cuitiño, 2013).pdf" target="_blank" download>•	 Social risk students-Creating a favourable classroom environment through drama (Acosta & Cuitiño, 2013)</Link>
                    </Router>
                    <Router>
                        <Link to="/repository/Teachers' motivation in the EFL classroom through the implementation of non-traditional methodologies (Luengo & Martínez, 2011).pdf" target="_blank" download>•	 Teachers' motivation in the EFL classroom through the implementation of non-traditional methodologies (Luengo & Martínez, 2011)</Link>
                    </Router>
                    <Router>
                        <Link to="/repository/Teaching English in the hospital classroom (Moena & Turra, 2013) .pdf" target="_blank" download>•	 Teaching English in the hospital classroom (Moena & Turra, 2013) </Link>
                    </Router>
                    <Router>
                        <Link to="/repository/Teaching strategies to support students with ASD (Castro & Ojeda, 2021).pdf" target="_blank" download>•	 Teaching strategies to support students with ASD (Castro & Ojeda, 2021)</Link>
                    </Router>
                    <Router>
                        <Link to="/repository/Theatre of the oppressed in the EFL Classroom...(Bilbao & Burgos, 2013).pdf" target="_blank" download>•	 Theatre of the oppressed in the EFL Classroom...(Bilbao & Burgos, 2013)</Link>
                    </Router>
                    <Router>
                        <Link to="/repository/Visually impaired children-An approach to the English learning process ... (Barrientos & Morales, 2011).pdf" target="_blank" download>•	 Visually impaired children-An approach to the English learning process ... (Barrientos & Morales, 2011)</Link>
                    </Router>
                </Grid>
                </Grid>
                </Grid>
                <br></br>


            </div>

        );
    }



export default Repository;