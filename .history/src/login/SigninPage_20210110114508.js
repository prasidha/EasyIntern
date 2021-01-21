import React ,{ useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Images from '../images/easyintern.png'
import { useHistory } from 'react-router-dom';
import {useAuth} from '../context/AuthContext'
import Alert from '@material-ui/lab/Alert';


const useStyles = makeStyles((theme) => ({
  papers:{
    backgroundColor:'white'
  },
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   
  },
  image: {
    marginTop: theme.spacing(1),
    width:150,
    
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SigninPage({user}) {
  
    const history =useHistory();
    const classes = useStyles();
    const[email,setEmail]=useState();
    const [password,setPassword]= useState();
    const[error,setError]=useState('')
    const[loading,setLoading]=useState(false)
    const{ login } =useAuth()
  
   async function signIn(e){
    e.preventDefault();

    try{
      setError("")
      setLoading(true)
      await login(email,password)
      history.push('/')
    }
    catch{
      setError("email or password is incorrect")
    }
    
   setLoading(false)
     
}


  return (
    <Container component="main" maxWidth="xs" className={classes.papers}>
      <CssBaseline />
      <div className={classes.paper}>
        <img src={Images} alt="img" onClick={() => history.push("/")} className={classes.image}/>
        <Typography component="h1" variant="h5">
          Sign in
          {error && <Alert severity="error">{error}</Alert>}
        </Typography>
        <form className={classes.form} noValidate onSubmit={signIn}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="off"

            autoFocus
            onChange ={e=>{setEmail(e.target.value)}}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="off"
            onChange={e => {setPassword(e.target.value)}}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
     
    </Container>
  );
}