import React ,{useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Images from '../images/easyintern.png';
import { useHistory } from 'react-router-dom';
import {auth ,db} from '../firebase'
import firebase from 'firebase'
import { useAuth } from "../context/AuthContext"
import Alert from '@material-ui/lab/Alert';



const useStyles = makeStyles((theme) => ({
  paper1 :{
    backgroundColor:'white',
  },
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    marginTop: theme.spacing(1),
    width:150,
    cursor:'on'
  },

  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function StudentRegister() {
    const history =useHistory();
    const classes = useStyles();
    const[fname,setFname] =useState();
    const[lname,setLname]=useState();
    const [email,setEmail]=useState();
    const [password ,setPassword]=useState();
    const [confirmPassword,setConfirmPassword]=useState();
    const[error,setError]=useState("")
    const[loading,setLoading]=useState(false)
    const {studentSignUp} =useAuth()


  async function onSubmitForm(e) {
  e.preventDefault();

  if(password !== confirmPassword){
      return setError("passwords donot match..")   
  }
 
  try{
    setError("")
    setLoading(true)
    await studentSignUp(email,password)
    history.push ('/')
    db.collection("userdata").doc(auth.currentUser.uid).set({
      student_id:auth.currentUser.uid,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      email:email,
      firstName:fname,
      lastName:lname,
      isStudent:true
  })
  }
  catch{
    setError("failed to create account")
  }
  setLoading(false)
 
        
     }

  

  return (
    <Container component="main" maxWidth="xs" className={classes.paper1}>
      <CssBaseline />
      <div className={classes.paper}>
        <img src ={Images} alt="img" className={classes.image} onClick={()=> history.push("/")}/>
        <Typography component="h1" variant="h5">
          Student Register
          {error && <Alert severity="error">{error}</Alert>}
        </Typography>
        <form className={classes.form} noValidate onSubmit ={onSubmitForm}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={e =>{setFname(e.target.value)}}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={e =>{setLname(e.target.value)}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange ={e => {setEmail(e.target.value)}}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                onChange ={e=>{setPassword(e.target.value)}}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="confirm-password"
                label="confirm-Password"
                type="password"
                autoComplete="current-password"
                onChange ={e=>{setConfirmPassword(e.target.value)}}
              />
            </Grid>
           
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary           className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
     { /*<Box mt={5}>
        <Copyright />
  </Box>*/}
    </Container>
  );
}