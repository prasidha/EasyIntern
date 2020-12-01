import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Images from './images/easyintern.png';
import { useHistory } from 'react-router-dom'
import {db} from '../firebase'
import Copyright from './Copyright'



const useStyles = makeStyles((theme) => ({
   
  paper: {
    marginTop: theme.spacing(1),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Contactus() {
    const history =useHistory();
  const classes = useStyles();
//  const[fullName,setFullName]= useState();
//   const [email ,setEmail] = useState();
//   const [msg, setMsg] = useState();


  const onSubmit = () => {

      db.collection("contactform").onSnapshot(snapshot => {

      })

  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <img src ={Images} alt="img"  onClick={() => history.push("/")} className={classes.image}/>
        <Typography component="h1" variant="h5">
          Contact us
        </Typography>
        <form className={classes.form} noValidate  onSubmit={onSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="fullName"
                variant="outlined"
                required
                fullWidth
                label="Full Name"
                autoFocus
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
              />
            </Grid>
            <Grid item xs={12}>
          <TextField
          variant="outlined"
          required
          fullWidth
          id="msg"
          label="message"
          name="message"
         
          />
          
           
            </Grid>

          
           
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Send
          </Button>
          
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}