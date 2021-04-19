import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { makeStyles } from '@material-ui/core/styles';
import Welcomem from './mobile/Welcomem'
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
      separator:{
        color:'white',
      },
    title:{
      color:'#00b3c5',
      fontWeight: 'bold',
  
    },
    memberName:{
      fontWeight: 'bold',
      color: 'black',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    banners:{
      color:'white',
  
    },
    text:{
      color:'black',
    }
  }));
  
  const Welcome = (props) => {
    const classes = useStyles();
        return(
            <div>
              <Welcomem/>
                            
              
            </div>
        );
    }


export default Welcome;