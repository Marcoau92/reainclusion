import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import logo from './img/encabezado_no_fondo.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#00b3c5',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: '#00b3c5',
  },
  menuImage: {
    marginLeft: 'auto',

  },
}));
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    backgroundColor: '#00b3c5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: '#00b3c5',
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

  

export default function AppBarr(){
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: '#00b3c5' }}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to='/home' className="link">
        <StyledMenuItem>
          <ListItemText primary="Bienvenida" />
        </StyledMenuItem>
        </Link>

        <Link to='/project' className="link">
        <StyledMenuItem>
          <ListItemText primary="Proyecto" />
        </StyledMenuItem>
        </Link>

        <Link to='/team' className="link">
        <StyledMenuItem>
          <ListItemText primary="Equipo" />
        </StyledMenuItem>
        </Link>

        <Link to='/menu' className="link">
        <StyledMenuItem>
          <ListItemText primary="Recursos" />
        </StyledMenuItem>
        </Link>

        <Link to='/repository' className="link">
        <StyledMenuItem>
          <ListItemText primary="Repositorio" />
        </StyledMenuItem>
        </Link>

        <Link to='/contact' className="link">
        <StyledMenuItem>
          <ListItemText primary="Contacto" />
        </StyledMenuItem>
        </Link>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLScZA8KRTe6efVXffr6lDR0ls5JE8aW7E67DLPlaYojNGFo43Q/viewform?usp=sf_link" className="link">
        <StyledMenuItem>
          <ListItemText primary="Encuesta" />
        </StyledMenuItem>
        </a>

        <Link to='/News' className="link">
        <StyledMenuItem>
          <ListItemText primary="Noticias" />
        </StyledMenuItem>
        </Link>
      </StyledMenu>
      
          <Typography variant="h6" color="inherit">
            Aula Inclusiva
          </Typography>
          <Typography className={classes.menuImage} variant="h6" color="inherit">
            UACh
          </Typography>
          <img src={logo} className={classes.menuImage} width='80px' md={12} lg={12}/>

        </Toolbar>
      </AppBar>
    </div>
  );
}