import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import {lightGreen} from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: lightGreen[400],
  },
  menuButton: {
    marginRight: theme.spacing(2),
    backgroundColor: lightGreen[400],
  },
}));
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
    backgroundColor: lightGreen[400],
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
      backgroundColor: lightGreen[400],
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
      <AppBar position="static" style={{ backgroundColor: lightGreen[400] }}>
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
        <Link to='/mhome' className="link">
        <StyledMenuItem>
          <ListItemText primary="Inicio" />
        </StyledMenuItem>
        </Link>

        <Link to='/mproject' className="link">
        <StyledMenuItem>
          <ListItemText primary="Proyecto" />
        </StyledMenuItem>
        </Link>

        <Link to='/mteam' className="link">
        <StyledMenuItem>
          <ListItemText primary="Equipo" />
        </StyledMenuItem>
        </Link>

        <Link to='/mresources' className="link">
        <StyledMenuItem>
          <ListItemText primary="Recursos" />
        </StyledMenuItem>
        </Link>

        <Link to='/mrepository' className="link">
        <StyledMenuItem>
          <ListItemText primary="Repositorio" />
        </StyledMenuItem>
        </Link>

        <Link to='/mcontact' className="link">
        <StyledMenuItem>
          <ListItemText primary="Contacto" />
        </StyledMenuItem>
        </Link>
      </StyledMenu>
      
          <Typography variant="h6" color="inherit">
            Aula Inclusiva UACh
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}