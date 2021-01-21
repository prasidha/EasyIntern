import React ,{ useEffect ,useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import images from './images/easyintern.png'
import { Link, useHistory } from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {db,auth} from './firebase'
import {useAuth} from './context/AuthContext'
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {userInfo} from './firebase'
import Search from './MainBody/Search'
import { CircularProgress } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,

  },
  img:{
    width:'100px'
  },
 
  menuButton: {
    marginRight: theme.spacing(1),
    borderRadius:'10px',
  },

  title: {
    flexGrow: 1,
  },
  menu:{
    marginTop:'2rem',
    
  },
  Menu1:{
    margin:'12rem'
  }
}));



export default function ButtonAppBar() {
  const history =useHistory();
  const {currentUser,userData,setUserData,logOut,setIsLoggedIn}=useAuth();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);
  const [open,setOpen] =useState(null)
  
  const onHandleLogout =() => {
    logOut(currentUser)
    history.push('/')
    setIsLoggedIn(false)
    setOpen(false)
  }
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
 
  useEffect(() => {
    
    if(currentUser && currentUser?.uid){
      console.log("uid")
      db.collection("userdata").doc(currentUser.uid).get().then((querySnapshot) => { 
       const data = querySnapshot.data()
       setUserData(data)
  });
       
    }
  setUserData(false)
   
}, [currentUser])
// console.log(currentUser,"currentUser")
// console.log(userData,"User")

if(userData === undefined){
  return <CircularProgress/>
}
  
  return (
   
    <div className={classes.root}>
      <AppBar position="static" color="color">
        <Toolbar>
           <img src={images} alt="img" className={classes.img} onClick={() => history.push("/")}/>
          <Typography variant="h6" className={classes.title}>
             
            
         </Typography>
         <Link to="/" style={{textDecoration:'none'}}> <Button color="color" variant="contained" className={classes.menuButton}>Home</Button></Link>
   { !currentUser && <Link to="/signin" style={{textDecoration:'none'}}>  <Button color="primary" variant="contained" className={classes.menuButton}>Sign in</Button></Link> }
  {!currentUser && <Button color ="primary" variant="contained" onClick={handleClick} className={classes.menuButton}>
    Register
  </Button> }
  <Menu
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={handleClose}
    className={classes.menu}
  >
    <Link to ="/studentRegister"  style={{textDecoration:'none'}}><MenuItem onClick={handleClose}>Student Register</MenuItem></Link> 
    <Link to ="/companyRegister" style={{textDecoration:'none'}}><MenuItem onClick={handleClose}>Company Register</MenuItem></Link>

  </Menu>
  { userData.isStudent === true  && <Link to="/favourite" style={{textDecoration:'none'}}> <Button color="primary" variant="contained" className={classes.menuButton}>favorite</Button></Link>}
   {userData && userData.isStudent === true  && <Link to="/studentdashboard" style={{textDecoration:'none'}}> <Button color="primary" variant="contained" className={classes.menuButton}><AccountCircleIcon/> {userData.firstName}</Button></Link>}

{ userData.isStudent === false && <Button color="primary" variant="contained"  onClick={()=>{setOpen(true)}} className={classes.menuButton}>{userData.companyName} <AccountCircleIcon/></Button>}
<Menu
open={open}
onClose={()=>{setOpen(false)}}
className={classes.Menu}
>
 <Link to="" style={{textDecoration:'none'}}> <MenuItem onClick={()=>{setOpen(false)}}>Applicants</MenuItem> </Link>
 <Link to="/postintern" style={{textDecoration:'none'}}> <MenuItem onClick={()=>{setOpen(false)}}>Post an Intern</MenuItem>  </Link>
  <MenuItem  onClick={onHandleLogout}>Logout</MenuItem>
</Menu>
  
        </Toolbar>
      </AppBar>
    </div>

    
  );
}
