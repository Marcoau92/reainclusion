import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Wspace2 from './Wspace2';
import book1 from './img/book1.png';
import book2 from './img/book2.png';
import book3 from './img/book3.png';
import book4 from './img/book4.png';
import book5 from './img/book5.png';
import book6 from './img/book6.png';
import book7 from './img/book7.png';
import book8 from './img/book8.png';
import book9 from './img/book9.png';
import book10 from './img/book10.png';
import book11 from './img/book11.png';
import book12 from './img/book12.png';
import book13 from './img/book13.png';
import book14 from './img/book14.png';
import book15 from './img/book15.png';
import book16 from './img/book16.png';
import book17 from './img/book17.png';
import book18 from './img/book18.png';
import book19 from './img/book19.png';
import book20 from './img/book20.png';
import book21 from './img/book21.png';

import Wspace from './Wspace';


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
                <Grid container justifyContent='flex-start'  md={6} lg={6}>
                <Link to='/Menu'>Atrás</Link>
                </Grid>
                <br></br>
                <Grid style={{ justifyContent: "center"}}>
                <Typography className={classes.title} align='center' variant='h4'>Lecturas Sugeridas </Typography>
                </Grid>
                <br></br>
                <Wspace2/>
                <Grid item container justifyContent="center"              
            direction="row">
        <Grid item container md={6} lg={6}justifyContent="center"              
            direction="row">
                <Grid container style={{ justifyContent: "center"}} >
                    
                <p>
                    Aquí te presentamos algunas lecturas recomendables de diferentes fuentes que pueden resultar de tu interés 
                </p>
                <Wspace/>
                <a rel="license" href="https://unesdoc.unesco.org/ark:/48223/pf0000098427 ">
                  <img src={book1}  alt="encabezado" xs={6} sm={6} md={6} lg={6} width='90%' />
                </a>
                <Wspace/>
                <a rel="license" href="https://webarchive.nationalarchives.gov.uk/20101007182820/http:/sen.ttrb.ac.uk/attachments/21739b8e-5245-4709-b433-c14b08365634.pdf  ">
                  <img src={book2}  alt="encabezado" xs={6} sm={6} md={6} lg={6} width='90%'/>
                </a>
                <Wspace/>
                <a rel="license" href="https://sdgs.un.org/sites/default/files/publications/21252030%20Agenda%20for%20Sustainable%20Development%20web.pdf ">
                  <img src={book3}  alt="encabezado" xs={6} sm={6} md={6} lg={6} width='90%'/>
                </a>
                <Wspace/>
                <a rel="license" href="https://www.unicef.cl/archivos_documento/200/Libro%20seminario%20internacional%20discapacidad.pdf ">
                  <img src={book4}  alt="encabezado" xs={6} sm={6} md={6} lg={6} width='90%'/>
                </a>
                <Wspace/>
                <a rel="license" href="https://bibliotecadigital.mineduc.cl/bitstream/handle/20.500.12365/16993/INFORMEFINALMESATECNICAEDESPECIAL.pdf?sequence=1&isAllowed=y ">
                  <img src={book5}  alt="encabezado" xs={6} sm={6} md={6} lg={6} width='90%'/>
                </a>
                <Wspace/>
                <a rel="license" href="https://bibliotecadigital.mineduc.cl/bitstream/handle/20.500.12365/14363/Interculturalidad_escuela.pdf?sequence=1&isAllowed=y ">
                  <img src={book6}  alt="encabezado" xs={6} sm={6} md={6} lg={6} width='90%'/>
                </a>
                <Wspace/>
                <a rel="license" href="https://unesdoc.unesco.org/ark:/48223/pf0000374246 ">
                  <img src={book7}  alt="encabezado" xs={6} sm={6} md={6} lg={6} width='90%'/>
                </a>
                <Wspace/>
                <a rel="license" href="https://unesdoc.unesco.org/ark:/48223/pf0000248254  ">
                  <img src={book8}  alt="encabezado" xs={6} sm={6} md={6} lg={6} width='90%'/>
                </a>
                <Wspace/>
                <a rel="license" href="https://unesdoc.unesco.org/ark:/48223/pf0000217073 ">
                  <img src={book9}  alt="encabezado" xs={6} sm={6} md={6} lg={6} width='90%'/>
                </a>
                <Wspace/>
                <a rel="license" href="https://unesdoc.unesco.org/ark:/48223/pf0000192480 ">
                  <img src={book10}  alt="encabezado" xs={6} sm={6} md={6} lg={6} width='90%'/>
                </a>
                <Wspace/>
                <a rel="license" href="https://unesdoc.unesco.org/ark:/48223/pf0000177649 ">
                  <img src={book11}  alt="encabezado" xs={6} sm={6} md={6} lg={6} width='90%'/>
                </a>
                <Wspace/>
                <a rel="license" href="https://unesdoc.unesco.org/ark:/48223/pf0000140224">
                  <img src={book12}  alt="encabezado" xs={6} sm={6} md={6} lg={6} width='90%'/>
                </a>
                <Wspace/>
                <a rel="license" href="http://repositorio.unab.cl/xmlui/bitstream/handle/ria/5785/a119379_Venegas_K_Do_pre_service_teachers_of_2016_Tesis..pdf?sequence=1&isAllowed=y ">
                  <img src={book13}  alt="encabezado" xs={6} sm={6} md={6} lg={6} width='90%'/>
                </a>
                <Wspace/>
                <a rel="license" href="https://www.nfer.ac.uk/publications/FUTL05/FUTL05.pdf ">
                  <img src={book14}  alt="encabezado" xs={6} sm={6} md={6} lg={6} width='90%'/>
                </a>
                <Wspace/>
                <a rel="license" href="https://files.eric.ed.gov/fulltext/EJ1278103.pdf  ">
                  <img src={book15}  alt="encabezado" xs={6} sm={6} md={6} lg={6} width='90%'/>
                </a>
                <Wspace/>
                <a rel="license" href="https://core.ac.uk/download/pdf/141686023.pdf ">
                  <img src={book16}  alt="encabezado" xs={6} sm={6} md={6} lg={6} width='90%'/>
                </a>
                <Wspace/>
                <a rel="license" href="http://www.eduqa.net/eduqa2017/images/ponencias/eje4/4_02_LAPLAGNE_CRISTINA_-_TAC_para_la_inclusion_mediante_el_idioma_ingles_en_la_UNSJ.pdf ">
                  <img src={book17}  alt="encabezado" xs={6} sm={6} md={6} lg={6} width='90%'/>
                </a>
                <Wspace/>
                <a rel="license" href="https://www.researchgate.net/publication/331262519_El_ingles_como_un_camino_posible_para_la_inclusion">
                  <img src={book18}  alt="encabezado" xs={6} sm={6} md={6} lg={6} width='90%'/>
                </a>
                <Wspace/>
                <a rel="license" href="https://www.britishcouncil.org/sites/default/files/g264_schools_core_skills_tl_brochure3_final_web.pdf ">
                  <img src={book19}  alt="encabezado" xs={6} sm={6} md={6} lg={6} width='90%'/>
                </a>
                <Wspace/>
                <a rel="license" href="http://bibliodiversa.todomejora.org/wp-content/uploads/2017/02/047_BRITISH_COUNCIL_INDIE_inclusion_and_diversity.pdf ">
                  <img src={book20}  alt="encabezado" xs={6} sm={6} md={6} lg={6} width='90%'/>
                </a>
                <Wspace/>
                <a rel="license" href="https://inklusiver-englischunterricht.de/2019/08/inclusive-english-teaching-practices-and-english-as-a-lingua/ ">
                  <img src={book21}  alt="encabezado" xs={6} sm={6} md={6} lg={6} width='90%'/>
                </a>
                </Grid>
                <Wspace/>
                <Grid  style={{ justifyContent: "center"}}>
                <Typography className={classes.title} align='center' variant='h4'>Referencias de interés </Typography>
                
                <Wspace2/>
                <p>
                Las siguientes referencias corresponden a documentos que no se encuentran con acceso libre y gratuito por el momento. Puede acceder a ellos a través de bibliotecas o comprando los ejemplares.  
                </p>
                <Wspace2/>

                <Grid container  >
                Ainscow, M. (2020). <h2>Promoting inclusion and equity in education: Lessons from international experiences. Nordic Journal of Studies in Educational Policy</h2>, 6(1), 7-16, DOI: 10.1080/20020317.2020.1729587     
                </Grid>
                <br></br>
                <Grid container >
                Ainscow, M., & Sandill, A. (2010). <h2>Developing inclusive education systems: The role of organisational cultures and leadership.</h2> International Journal of Inclusive Education, 14(4), 401-416. doi:10.1080/13603110802504903    
                </Grid>
                <br></br>
                <Grid container >
                Ainscow, M., Booth, T., & Dyson A. (2006). <h2>Improving schools, developing inclusion.</h2> London: Routledge.    
                </Grid>
                <br></br>
                <Grid container >
                Ainscow, M., Dyson, A., Goldrick, S., & West, W. (2012). <h2>Making schools effective for all: Rethinking the task. School Leadership & Management</h2>, 32(3), 197-213. doi: 10.1080/13632434.2012.669648    
                </Grid>
                <br></br>
                <Grid container >
                Amadio, M. (2009). <h2>La educación inclusiva en América Latina y el Caribe: Un análisis exploratorio de los Informes Nacionales presentados a la Conferencia Internacional de Educación de 2008.</h2> Santiago: UNESCO-OIE.    
                </Grid>
                <br></br>
                <Grid container >
                Amar, M. (2007). <h2>Equidad, calidad y derecho a la educación en Chile: Hacia un nuevo rol del Estado.</h2> Santiago: Biblioteca del Congreso Nacional de Chile.    
                </Grid>
                <br></br>
                <Grid container >
                Caireta, M. (2013). <h2>Peace and coexistence education in school settings: A teacher training perspective.</h2> Evens Foundation   
                </Grid>
                <br></br>
                <Grid container >
                Carson, T., & Johnston, I. (2000).<h2> The difficulty with difference in teacher education: Toward a pedagogy of compassion.</h2> Alberta Journal of Educational Research, 46(1), 75-83.   
                </Grid>
                <br></br>
                <Grid container >
                Díaz, T., & Druker, S. (2007). <h2>La democratizacion del espacio escolar: Una construcción en y para la diversidad.</h2> Estudios Pedagógicos, 33(1), 63-77.  
                </Grid>
                <br></br>
                <Grid container >
                Evans, J., & Lunt, I. (2002). <h2>Inclusive education: Are there limits? European Journal of Special Needs Education</h2>, 17(1), 1-14. doi:10.1080/08856250110098980    
                </Grid>
                <br></br>
                <Grid container >
                Fendler, L., & Muzaffar, I. (2008). <h2>The history of the bell curve: Sorting and the idea of normal.</h2> Educational Theory, 58(1), 63-82. doi:10.1111/j.1741- 5446.2007.0276.x    
                </Grid>
                <br></br>
                <Grid container >
                Florian, L. (2014). <h2>Reimaging secial education: Why new approaches are needed.</h2> In L. Florian (Ed.), The SAGE handbook of special education (2nd ed.) (pp. 9-23). London: Sage Publications.    
                </Grid>
                <br></br>
                <Grid container >
                Florian, L., & Linklater, H. (2010). <h2>Preparing teachers for inclusive education: Using inclusive pedagogy to enhance teaching and learning for all. Cambridge Journal of Education</h2>, 40(4), 369-386. doi: 10.1080/0305764X.2010.526588    
                </Grid>
                <br></br>
                <Grid container >
                Florian, L., & Spratt, J. (2013). <h2>Enacting inclusion: A framework for interrogating inclusive practice.</h2> European Journal of Special Needs Education, 28(2), 119-135. doi:10.1080/08856257.2013.778111   
                </Grid>
                <br></br>
                <Grid container >
                García-Huidobro, J. E. (2007). <h2>Desigualdad educativa y segmentación del sistema escolar: Consideraciones a partir del caso Chileno [Educational inequality and school system segmentation: Reflections upon the Chilean case].</h2> Revista Pensamiento Educativo, 40(1), 65-85.  
                </Grid>
                <br></br>
                <Grid container>
                Godoy M. P., Meza, M. L., & Salazar, A. (2004). <h2>Antecedentes históricos, presente y futuro de la educación especial en Chile [Historical records, present and future of special education in Chile].</h2> Ministerio de Educación, División de Educación General.    
                </Grid>
                <br></br>
                <Grid container >
                Infante, M. (2010). <h2>Desafíos a la formación docente: Inclusión educativa [Challenges to teacher education: Educational inclusion].</h2> Estudios Pedagógicos 36(1), 287-297.   
                </Grid>
                <br></br>
                <Grid container >
                Levin, B. (2003). <h2>Approaches to equity in policy for lifelong learning.</h2> OECD.   
                </Grid>
                <br></br>
                <Grid container >
                López, V., Julio, C., Pérez, M. V., Morales, M., & Rojas, C. (2014). <h2>Barreras culturales para la inclusión: Políticas y prácticas de integración en Chile.</h2> Revista de Educación, 363, 256-281. doi: 10-4438/1988-592X-RE-2012-363-180    
                </Grid>
                <br></br>
                <Grid container >
                Organisation for Economic Co-operation and Development. (2015). <h2>Chile: Policy priorities for stronger and more equitable growth (Better politics series).</h2> OECD.    
                </Grid>
                <br></br>
                <Grid container >
                Ortega Ruiz, P., & Minguez Vallejos, R. (1999) <h2>The role of compassion in moral education.</h2> Journal of Moral Education, 28(1), 5-17. doi: 10.1080/030572499103278   
                </Grid>
                <br></br>
                <Grid container >
                Pantic, N., & Florian, L. (2015). <h2>Developing teachers as agents of inclusion and social justice.</h2> Education Inquiry, 6(3), 333-351. doi: 10.3402/edui.v6.27311    
                </Grid>
                <br></br>
                <Grid container >
                Plan. (2008). <h2>Learn without fear: The global campaign to end violence in schools.</h2> Woking: Plan.    
                </Grid>
                <br></br>
                <Grid container >
                Slee, R. (2001). <h2>Inclusion in practice: Does practice make perfect?</h2>, Educational Review, 53(2), 113-123.    
                </Grid>
                <br></br>
                <Grid container >
                Smith, D. D., & Tyler, N. C. (2011). <h2>Effective inclusive education: Equipping education professionals with necessary skills and knowledge. Prospects: Quarterly Review of Comparative Education</h2>, 41(3), 323-339. doi:10.1007/s11125-011-9207-5   
                </Grid>
                <br></br>
                <Grid container >
                Swann, M., Peacock, A., Hart, S., & Drummond, M. J. (2012). <h2>Creating learning without limits: Maidenhead</h2>, Berkshire, England : McGraw-Hill/Open University Press. 
                </Grid>
                <br></br>
                </Grid>
                </Grid>
                </Grid>
                <br></br>

            </div>

        );
    }



export default Repository;