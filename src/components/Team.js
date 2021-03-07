import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Paper, Typography, Box} from '@material-ui/core';
import team from './members'

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

const Team = (props) => {
  const classes = useStyles();
  return (
    <div >
      <Grid item container xs={6} sm={6} md={6} lg={6} >

      </Grid>
      <Grid item container xs={6} sm={6} md={6} lg={6}>
        <Typography className={classes.title} align='center' variant='h2'>Integrantes</Typography>
        <Grid className={classes.root} item container justify='center' alignItems='center' xs={10} sm={10} md={10} lg={10}>
          {team.map(member => (
            <Grid item justify="center" xs={12} sm={6} md={6} lg={6}>
            <Paper className={classes.paper} elevation={0}>
              <img alt={member.name} src={member.picture} justify="center" width='150px' height='150px'/>
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
      </Grid>
      
    </div>
  )
}
export default Team;