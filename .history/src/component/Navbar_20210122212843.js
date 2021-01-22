<<<<<<< HEAD
// import React ,{ useState , useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import {Box, CircularProgress} from '@material-ui/core';
// import { Link ,useHistory } from 'react-router-dom'
// import images from '../images/easyintern.png'
// import {useAuth} from '../context/AuthContext'
// import {db} from '../firebase'

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//     borderRadius:'10px',
//     fontSize:'18px',
//   },
//   title: {
//     flexGrow: 1,
//   },
//   img:{
//         width:'100px'
//   },
// }));


// export default function ButtonAppBar() {
//   const classes = useStyles();
//   const history =useHistory();
//   const[loading,setLoading] =useState(true)
//   const {
        //   currentUser,
        //   userData,
        //   setUserData,
        //   logOut,
        //   getData
        // } = useAuth();

//   const handleLogout = () => {
//     logOut(currentUser)
//     history.push('/')
//   }

//   const fetchUserData = async() => {
//     setLoading(true)
//     const data = await db.collection("userdata").doc(currentUser.uid).get()
//     const temp = data.data();
//     console.log("temp",temp)
//     setUserData(temp)
//     setLoading(false)
//   }

//   useEffect(() => {
//     if(currentUser && currentUser.uid){
//       fetchUserData()
//     }
//     else{
//       setUserData(false)
//     }
//   }, [currentUser])

//   if(userData === undefined){
//     return <CircularProgress/>
//   }
//   if(getData.length === 0){
//     return <CircularProgress/>
//   }
//   console.log("getDatataaaaaaaaaaaaaaa....",getData)

// console.log("userdata",currentUser)
//   return (
//     <div className={classes.root}>
//       <AppBar position="static" color="secondary.main">
//         <Toolbar>
//         <img src={images} alt="img" className={classes.img} onClick={() => history.push("/")}/>
//         <Typography className={classes.title}></Typography>
        
//      <Link to="/" style={{textDecoration:'none'}}><Button variant="outlined" disableElevation className={classes.menuButton} color="secondary">Home</Button></Link>
//      { userData.isStudent === true &&(<Link to ="/studentDashboard" style={{textDecoration:'none'}}> <Button variant="outlined" disableElevation className={classes.menuButton} color="secondary">{userData.firstName}</Button></Link> )}
    
//       {getData && userData.isStudent === false && <Link to="/companyDashboard" style={{textDecoration:'none'}}><Button variant="outlined" disableElevation className={classes.menuButton} color="secondary">company</Button></Link>}
    
//      <Link to={!currentUser  && "/signin"} style={{textDecoration:'none'}}><Button variant="contained" disableElevation className={classes.menuButton} color="secondary" onClick={handleLogout}>{currentUser ? "Sign out" : "Sign in"}</Button></Link>
          
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

  
=======
>>>>>>> 361b71351ef80fe1fdb9f6f15ce2f0b51195d1e0
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { Box, CircularProgress } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import images from "../images/easyintern.png";
import { useAuth } from "../context/AuthContext";
import { db } from "../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    borderRadius: "10px",
    fontSize: "18px",
  },
  title: {
    flexGrow: 1,
  },
  img: {
    width: "100px",
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const {
    currentUser,
    userData,
    setUserData,
    logOut,
<<<<<<< HEAD
=======
    setIsLoggedIn,
>>>>>>> 361b71351ef80fe1fdb9f6f15ce2f0b51195d1e0
  } = useAuth();

  const handleLogout = () => {
    logOut(currentUser);
    history.push("/");
  };

<<<<<<< HEAD
  const fetchUserData = async () => {
    setLoading(true);
    const data = await db.collection("userdata").doc(currentUser.uid).get();
    const temp = data.data();
    console.log("temp", temp);
    setUserData(temp);
    setLoading(false);
  };

  useEffect(() => {
    if (currentUser && currentUser.uid) {
      fetchUserData();
    } else {
      setUserData(false);
    }
  }, [currentUser]);

  useEffect(() => {
   
  }, [])

  if (userData === undefined) {
    return <CircularProgress />;
  }

  // const fetchUserData = async () => {
  //   setLoading(true);
  //   const data = await db.collection("userdata").doc(currentUser.uid).get();
  //   const temp = data.data();
  //   console.log("temp", temp);
  //   setUserData(temp);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   if (currentUser && currentUser.uid) {
  //     fetchUserData();
  //   } else {
  //     setUserData(false);
  //   }
  // }, [currentUser]);

  // if (userData === undefined) {
  //   return <CircularProgress />;
  // }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary.main">
        <Toolbar>
          <img
            src={images}
            alt="img"
            className={classes.img}
            onClick={() => history.push("/")}
          />
          <Typography className={classes.title}></Typography>

          <Link to="/" style={{ textDecoration: "none" }}>
            <Button
              variant="outlined"
              disableElevation
              className={classes.menuButton}
              color="secondary"
            >
              Home
            </Button>
          </Link>
          {userData.isStudent === true && (
            <Link to="/studentDashboard" style={{ textDecoration: "none" }}>
              {" "}
              <Button
                variant="outlined"
                disableElevation
                className={classes.menuButton}
                color="secondary"
              >
                {userData.firstName}
              </Button>
            </Link>
          )}

          {userData.isStudent === false && (
            <Link to="/companyDashboard" style={{ textDecoration: "none" }}>

            {" "}
=======
>>>>>>> 361b71351ef80fe1fdb9f6f15ce2f0b51195d1e0
              <Button
                variant="outlined"
                disableElevation
                className={classes.menuButton}
                color="secondary"
              >
<<<<<<< HEAD
                company
=======
                {userData.companyName}
>>>>>>> 361b71351ef80fe1fdb9f6f15ce2f0b51195d1e0
              </Button>
            </Link>
          )}

          <Link
            to={!currentUser && "/signin"}
            style={{ textDecoration: "none" }}
          >
            <Button
              variant="contained"
              disableElevation
              className={classes.menuButton}
              color="secondary"
              onClick={handleLogout}
            >
              {currentUser ? "Sign out" : "Sign in"}
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
