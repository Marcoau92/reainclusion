import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import logo from './img/encabezado.png';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color:"transparent",
  },
  menuButton: {
    marginTop: theme.spacing(-1),
    marginRight: theme.spacing(0),
    marginLeft: 'auto',

  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-end',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
  },
  separator:{
    color:'white'
  }
}));


export default function Buttons(){

      const classes = useStyles();
      return(
        <div>
                            
              

        <div className='test_position2' style={{ backgroundColor: 'rgba(207,207,207, 0.8)', width:'170px'}} >
          <div className='navBar'>
          <img src={logo} alt="logo" />
              <ul style={{listStyleType: 'none'}}>
                <ButtonGroup className={classes.separator}
                orientation="vertical"
                color="white"
                variant="text" 
                size="small">
                  <li><Link to='/' className="link">Bienvenida</Link></li>
                  <li><Link to='/project' className="link">Proyecto</Link></li>
                  <li><Link to='/Resources' className="link">Recursos</Link></li>
                  <li><Link to='/Repository' className="link">Repositorio</Link></li>
                  <li><Link to='/News' className="link">Noticias</Link></li>

                </ButtonGroup>
                  
                  
                  
                  
              </ul>
          </div>
        </div>

          
      </div>
      );
  }



