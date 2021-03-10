import React,{useRef,useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import {AppContext} from './Application/provider';
import {lightGreen,white} from '@material-ui/core/colors';

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

  

export default function AppBarr() {
  const classes = useStyles();
  const [state,setState] = useState(AppContext);
  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: lightGreen[400] }}>
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
            <Button color= "inherit" onClick = { (e) => {setState({whichComponentToShow:"Project"})}} >Bienvenida</Button>
            <Button color= "inherit" onClick = { (e) => {setState({state:"Project"})}} >Proyecto</Button>
            <Button color= "inherit" onClick = { (e) => {setState({state:"Project"})}} >Integrantes</Button>
            <Button color= "inherit" onClick = { (e) => {setState({state:"Project"})}} >Recursos</Button>
            <Button color= "inherit" onClick = { (e) => {setState({state:"Project"})}} >Repositorio</Button>
            <Button color= "inherit" onClick = { (e) => {setState({state:"Project"})}} >Contacto</Button>
          </IconButton>
          <Typography variant="h6" color="inherit">
            REAINCLUSION
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}