import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Box} from '@material-ui/core';
import { Link ,Router } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    borderRadius:'10px',
    fontSize:'20px',
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary.main">
        <Toolbar>
       
        <Typography className={classes.title}>easyInter</Typography>
        <Button variant="outlined" disableElevation className={classes.menuButton} color="secondary">Home</Button>
        <Button variant="contained" disableElevation className={classes.menuButton} color="secondary">SignIn</Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
