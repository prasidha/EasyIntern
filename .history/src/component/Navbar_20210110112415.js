import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Box} from '@material-ui/core';
import { Link ,useHistory } from 'react-router-dom'
import images from '../images/easyintern.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    borderRadius:'10px',
    fontSize:'18px',
  },
  title: {
    flexGrow: 1,
  },
  img:{
        width:'100px'
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history =useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary.main">
        <Toolbar>
        <img src={images} alt="img" className={classes.img} onClick={() => history.push("/")}/>
        <Typography className={classes.title}></Typography>
        <Button variant="outlined" disableElevation className={classes.menuButton} color="secondary">Home</Button>
     <Link>   <Button variant="contained" disableElevation className={classes.menuButton} color="secondary">SignIn</Button></Link>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}