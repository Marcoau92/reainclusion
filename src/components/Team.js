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
      <Typography className={classes.title} align='center' variant='h2'>Integrantes</Typography>
       <Grid className={classes.root} container justify='center' alignItems='center'>
        {team.map(member => (
          <Grid item justify="center" xs={12} sm={6}>
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
    </div>
  )
}
export default Team;