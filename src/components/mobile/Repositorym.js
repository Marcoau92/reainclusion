import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Wspace2 from '../Wspace2';


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
            <div  justify="center">
                <br></br>
                <Grid md={6} lg={6} style={{ justifyContent: "center"}}>
                <Typography className={classes.title} align='center' variant='h3'>Repositorio</Typography>
                </Grid>
                <br></br>
                <Grid md={6} lg={6} justify="flex-start">
                <p  class="pservices text-justify" style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>
                A continuación podrás encontrar archivos descargables con investigaciones y propuestas para potenciar la inclusión de tus estudiantes. 
Gran parte de estos documentos corresponden a tesis de pregrado de profesores egresados de la carrera Pedagogía en Comunicación en Lengua Inglesa de la UACh.
También encontrarás material audiovisual de sensibilización creado por estudiantes de la facultad de Filosofía y Humanidades de la UACh. 
Si quieres colaborar con tu propia investigación o propuesta, no dudes en contactarnos. También puedes hacernos llegar estudios o artículos de otros autores, siempre que sean de uso libre y gratuito.

                    </p>
                </Grid>
                <Wspace2/>
                <Grid container style={{ justifyContent: "flex-start"}} md={6} lg={6} >
                    <Router>
                        <Link to="/repository/Assessing Visually Impaired Students in Inclusive Classrooms (Morales & Soto, 2014).pdf" target="_blank" download style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>•	 Assessing Visually Impaired Students in Inclusive Classrooms (Morales & Soto, 2014)</Link>
                    </Router>
                    <Router>
                        <Link to="/repository/Break dancers in the EFL classroom...(Salinas, 2014).pdf" target="_blank" download style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>•	 Break dancers in the EFL classroom...(Salinas, 2014)</Link>
                    </Router>
                    <Router>
                        <Link to="/repository/Developing SENAME children's socio-Affective and Communicative Skills (Igor & Pérez, 2020).pdf" target="_blank" download style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>•	 Developing SENAME children's socio-Affective and Communicative Skills (Igor & Pérez, 2020)</Link>
                    </Router>
                    <Router>
                        <Link to="/repository/Drama Techniques as an effective way to teach English to visually impaired students (Castillo & Siebert, 2013).pdf" target="_blank" download style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>•	 Drama Techniques as an effective way to teach English to visually impaired students (Castillo & Siebert, 2013)</Link>
                    </Router>
                    <Router>
                        <Link to="/repository/Including children with Asperger Syndrome in an English class...(Navarro, 2011).pdf" target="_blank" download style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>•	 Including children with Asperger Syndrome in an English class...(Navarro, 2011)</Link>
                    </Router>
                    <Router>
                        <Link to="/repository/Introducing EFL through NFE in social risk context (Berkhoff & Gahona, 2014).pdf" target="_blank" download style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>•	 Introducing EFL through NFE in social risk context (Berkhoff & Gahona, 2014)</Link>
                    </Router>
                    <Router>
                        <Link to="/repository/Principle-based language activities to promote a peaceful coexistence...(Arias & Rivera, 2020).pdf" target="_blank" download style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>•	 Principle-based language activities to promote a peaceful coexistence...(Arias & Rivera, 2020)</Link>
                    </Router>
                    <Router>
                        <Link to="/repository/Safe and Inclusive Schools-Teacher's strategies to handle peer-to-peer violence (Soto, 2016).pdf" target="_blank" download style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>•	 Safe and Inclusive Schools-Teacher's strategies to handle peer-to-peer violence (Soto, 2016)</Link>
                    </Router>
                    <Router>
                        <Link to="/repository/Social risk students-Creating a favourable classroom environment through drama (Acosta & Cuitiño, 2013).pdf" target="_blank" download style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>•	 Social risk students-Creating a favourable classroom environment through drama (Acosta & Cuitiño, 2013)</Link>
                    </Router>
                    <Router>
                        <Link to="/repository/Teachers' motivation in the EFL classroom through the implementation of non-traditional methodologies (Luengo & Martínez, 2011).pdf" target="_blank" download style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>•	 Teachers' motivation in the EFL classroom through the implementation of non-traditional methodologies (Luengo & Martínez, 2011)</Link>
                    </Router>
                    <Router>
                        <Link to="/repository/Teaching English in the hospital classroom (Moena & Turra, 2013) .pdf" target="_blank" download style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>•	 Teaching English in the hospital classroom (Moena & Turra, 2013) </Link>
                    </Router>
                    <Router>
                        <Link to="/repository/Teaching strategies to support students with ASD (Castro & Ojeda, 2021).pdf" target="_blank" download style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>•	 Teaching strategies to support students with ASD (Castro & Ojeda, 2021)</Link>
                    </Router>
                    <Router>
                        <Link to="/repository/Theatre of the oppressed in the EFL Classroom...(Bilbao & Burgos, 2013).pdf" target="_blank" download style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>•	 Theatre of the oppressed in the EFL Classroom...(Bilbao & Burgos, 2013)</Link>
                    </Router>
                    <Router>
                        <Link to="/repository/Visually impaired children-An approach to the English learning process ... (Barrientos & Morales, 2011).pdf" target="_blank" download style={{marginLeft: '0.8rem',marginRight: '0.8rem'}}>•	 Visually impaired children-An approach to the English learning process ... (Barrientos & Morales, 2011)</Link>
                    </Router>
                </Grid>

            </div>

        );
    }



export default Repository;