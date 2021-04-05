import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { makeStyles } from '@material-ui/core/styles';
import { Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title:{
      color:'#00b3c5',
      fontWeight: 'bold',
  
    },
    memberName:{
      color:'#00b3c5',
      fontWeight: 'bold',
      fontSize: '20px',
      textAlign: 'center',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const Project = (props) => {
    const classes = useStyles();
        return(
            <Grid item container>
              
              <Grid item container >

                <Grid xs={12} sm={12} md={12} lg={12}>
                  <Typography className={classes.title} align='center' variant='h2'>Proyecto</Typography>
                </Grid>
                <Typography className={classes.memberName} align='center' position="center" variant='h1'>¿Cómo nació esta página web?</Typography>

                <p>
                    Esta plataforma nace al alero del proyecto Recursos Educativos Abiertos (REA): Una oportunidad de innovación y democratización del conocimiento sobre prácticas inclusivas en el aula de inglés y se creó a partir de la necesidad de contar con un espacio de acceso libre y gratuito donde profesores de inglés en formación y en ejercicio puedan compartir experiencias que les ayudan a hacer de sus aulas espacios más inclusivos y respetuosos de la diversidad. Esta iniciativa está siendo financiado por la Vicerrectoría de Investigación, Desarrollo y Creación Artística (VIDCA) de la Universidad Austral de Chile (UACh), a través de fondos otorgados a los Proyectos de Instalación VIDCA 2020.
                </p>
                <Typography className={classes.memberName} align='center' variant='h1'>¿Qué ideas sustentan la creación de esta plataforma?</Typography>
                <p>
                
Chile mantiene un compromiso con la inclusión educativa, representado en normativas como la Ley de Inclusión (MINEDUC, 2015) y acuerdos como la Agenda 2030 de Desarrollo Sostenible de las Naciones Unidas (2015), donde la inclusión educativa es una de las metas. Asimismo, el Ministerio de Educación releva la enseñanza del inglés como lengua extranjera con iniciativas gestionadas por el Programa Inglés Abre Puertas [PIAP] (MINEDUC, s.f.). Además, el acceso universal a la educación y el conocimiento son considerados esenciales en el desarrollo de las sociedades, siendo clave utilizar las Tecnologías de la Información y la Comunicación [TIC] al servicio de la educación (UNESCO, 2016), por ejemplo, a través de Recursos Educativos Abiertos [REA] (UNESCO, 2012). 
                </p>
                <Typography className={classes.memberName} align='center' variant='h1'>¿Qué son los REA?</Typography>
                <p>
Los Recursos Educativos Abiertos, o REA, son definidos por UNESCO (2015) como recursos de diversos tipos (textos, material audiovisual, etc.) que hayan sido diseñados con la finalidad de educar y que se encuentren a libre disposición de educadores o estudiantes que quieran acceder a ellos. Estos recursos se comparten a través de una plataforma digital bajo una licencia de uso gratuito y libre. Este es el caso de la licencia Creative Commons (s.f.), la cual se ha utilizado para los REA disponibles en esta página web.
                </p>
                <Typography className={classes.memberName} align='center' variant='h1'>¿Cuál es el principal objetivo de este proyecto y cómo se pretende lograr?</Typography>
                <p>
Este proyecto propone como objetivo general democratizar el conocimiento sobre prácticas que promueven la inclusión en el aula de inglés, a través REA publicados en esta plataforma digital abierta y gratuita, nutrida con aportes de estudiantes y académicos/as de la Universidad Austral de Chile y dirigidos a docentes de inglés en formación y en ejercicio.
Para cumplir este objetivo, nos hemos comprometido con una metodología de educación abierta, la cual utiliza las TIC para dar acceso a diversos REA, promoviendo el aprendizaje colaborativo, la difusión del conocimiento y la innovación en educación. De esta manera, este proyecto invita a una transformación en las prácticas pedagógicas en pos de una educación más inclusiva y otorga un espacio de libre y fácil acceso al conocimiento generado en la UACh.


                </p>


                <Typography className={classes.memberName} align='center' variant='h1'>Referencias</Typography>
                <p>
                MINEDUC. (s.f.). Programa Inglés Abre Puertas (PIAP). 
MINEDUC. (2015). Ley 20.845.
Open Knowledge Foundation. (s.f.). Open Definition. Recuperado desde http://opendefinition.org/guide/ 
UN. (2015). Transforming our world: The 2030 agenda for sustainable development. 
UNESCO. (2012). Declaración de París de 2012 sobre los REA. París.
UNESCO. (2015). Guía básica de recursos educativos abiertos (REA). París.
UNESCO. (2016). Tecnologías digitales al servicio de la calidad educativa: Una propuesta de cambio centrada en el aprendizaje para todos. Santiago.
        

                </p>
              </Grid>

        </Grid>
        );        

}

export default Project;