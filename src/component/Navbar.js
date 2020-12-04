import React ,{useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Button, IconButton} from '@material-ui/core';
// import pink from '@material-ui/core/colors/pink';
import images from '../component/images/easyintern.png'
import {Link,useHistory} from 'react-router-dom'



const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,

  },
  img:{
    width:'100px'
  },
 
  menuButton: {
    marginRight: theme.spacing(1),
    borderRadius:'50px',
  },

  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const[cuser ,setCuser] =useState(true);
  const history =useHistory();
  // const color = pink[50];
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="color">
        <Toolbar>
           <img src={images} alt="img" className={classes.img} onClick={() => history.push("/")}/>
          <Typography variant="h6" className={classes.title}>
        
         </Typography>
         <Link to="/postintern" style={{textDecoration:'none'}}> <Button color="color" variant="contained" className={classes.menuButton}>Post</Button></Link>
        <Link to="/signin" style={{textDecoration:'none'}}>  <Button color="primary" variant="contained" className={classes.menuButton}>Sign in</Button></Link>
        <Link to="/signup" style={{textDecoration:'none'}}> <Button color="primary" variant="contained" className={classes.menuButton}>Sign up</Button></Link>
        {cuser && <IconButton>UserName</IconButton>}
        </Toolbar>
      </AppBar>
    </div>
  );
}
