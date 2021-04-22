import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper, Typography, Box} from '@material-ui/core';
import team from './members'
import Wspace from './Wspace'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title:{
    color:'#00b3c5',
    fontWeight: 'bold',
    textAlign: 'center',

  },
  memberName:{
    fontWeight: 'bold',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    backgroundcolor: '#a4f9ef7F',
  },
}));

const Team = (props) => {
  const classes = useStyles();
  return (
    <div className='test_position_component' style={{width:'884px',marginLeft: '10.8rem',marginRight: '10.8rem'}}>
        <Grid >
          <Typography className={classes.title} align='center' variant='h3'>Equipo</Typography>
        </Grid>
        
        <Wspace/>
        
        <Grid className={classes.root} container justify='center' alignItems='center' >
          {team.map(member => (
            <Grid item justify="center"  sm={6} md={6} lg={6}>
            <Paper className={classes.paper} elevation={0}>
              <img alt={member.name} src={member.picture} justify="center" width='100px' height='100px'/>
              <Typography className={classes.memberName}>{member.name}</Typography>
              {member.studies.map(study => (
                <div>
                  <Typography>
                    <Box >{study.title}</Box>
                    <Box>{study.location}</Box>
                  </Typography>
                </div>
              ))}
            </Paper>
          </Grid>
          ))}
        </Grid>
      
    </div>
  )
}
export default Team;