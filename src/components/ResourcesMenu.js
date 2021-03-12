import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Link } from 'react-router-dom';
import { Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import est_sor from './img/estudiantes_sordos.png';
import com_lgbt from './img/comunidad_lgbt.png';
import tec_tea from './img/tecnicas_teatro.png';
import com_soc from './img/compromiso_social.png';
import dis_vis from './img/discapacidad_visual.png';
import est_tea from './img/estudiantes_tea.png';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 400,
    },
    title:{
      color:'#00b3c5',
      fontWeight: 'bold'
  
    },
    subtitle:{
        color:'#00b3c5',
        fontWeight: 'bold',
        fontSize: '20px'
    },
  }));

const Resources = (props) => {  
    const classes = useStyles();
        return(
            <div className="position_component">
                <Card className={classes.root}>
                <Typography className={classes.title} align='center' variant='h2'>Recursos</Typography>
                <Link to='/resources/1'>
                    <CardActionArea>
                    <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="400"
                        image={est_sor}
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                        Inclusión de estudiantes Sordos
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Felipe Martínez Corona
                        </Typography>
                    </CardContent>
                    </CardActionArea>
                </Link>


                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="400"
                    image={com_lgbt}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Inclusión de estudiantes de la comunidad LGBT
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Ana Venegas Millapan
                    </Typography>
                </CardContent>
                </CardActionArea>



                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="400"
                    image={tec_tea}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Técnicas teatrales en el aula de inglés
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Amalia Ortíz de Zárate
                    </Typography>
                </CardContent>
                </CardActionArea>




                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="400"
                    image={com_soc}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Enseñanza del inglés con compromiso social
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Yasna Yilorm Barrientos
                    </Typography>
                </CardContent>
                </CardActionArea>



                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="400"
                    image={dis_vis}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Inclusión de estudiantes con discapacidad visual
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Priscila Ancheo Navarrete
                    </Typography>
                </CardContent>
                </CardActionArea>





                <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="400"
                    image={est_tea}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    Inclusión de estudiantes con TEA
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Paola Castro Fuentes & Camila Ojeda Pastene
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>

            </div>
           
            

        );
    }



export default Resources;