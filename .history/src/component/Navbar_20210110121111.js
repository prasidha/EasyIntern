import React ,{ useState , useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {Box} from '@material-ui/core';
import { Link ,useHistory } from 'react-router-dom'
import images from '../images/easyintern.png'
import {useAuth} from '../context/AuthContext'
import {db} from '../firebase'

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
  const[loading,setLoading] =useState(true)
  const {currentUser,userData,setUserData,logOut,setIsLoggedIn}=useAuth();

  const fetchUserData = async() => {
    setLoading(true)
    const data = await db.collection("userdata").doc(currentUser.uid).get()
    const temp = data.data();
    console.log("temp",temp)
    setLoading(false)
  }

  useEffect(() => {
    if(currentUser && currentUser.uid){
      fetchUserData()
    }
  }, [currentUser])

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary.main">
        <Toolbar>
        <img src={images} alt="img" className={classes.img} onClick={() => history.push("/")}/>
        <Typography className={classes.title}></Typography>
     <Link to="/" style={{textDecoration:'none'}}><Button variant="outlined" disableElevation className={classes.menuButton} color="secondary">Home</Button></Link>
     <Link to={!currentUser  && "/sign_in"} style={{textDecoration:'none'}}><Button variant="contained" disableElevation className={classes.menuButton} color="secondary">{currentUser ? "Sign out" : "sign in"}</Button></Link>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
