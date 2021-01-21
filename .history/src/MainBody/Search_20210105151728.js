import React ,{ useEffect ,useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import { useAuth } from '../context/AuthContext'
import PopularInternCards from './PopularInternCards'
import {db} from '../firebase'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width:"70%",
    margin:'auto',
    
},
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:'150px',
    backgroundColor:'lightblue',
    boxShadow:"2px 2px 15px 1px",
    
  },
  Search :{
    display:"flex",
    justifyContent:'center',
    alignContent:'center',
    margin:'3.5rem'
  },
  input:{
      width:'50%',
      fontSize:'20px',
      backgroundColor:'lightsky',
      borderRadius:'20px 0px 0px 20px',
      outline:'0',
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();
 const [duplicateData,setDuplicateData] =useState([]);
 const {setGetData,getData} = useAuth()

 
  const searchIntern = (e) => {
      const search = getData.filter((value) =>{
       if(getData.internPost.vacancy.toLowerCase().indexOf(e.target.value.toLowerCase()) != -1){
         return  value
       }
       setDuplicateData(search)
      })
     
  }

 
  useEffect(()=>{
  
     const datas = []
  
      db.collection("internPosts").get().then((querySnapshot) => { 
          querySnapshot.forEach((doc) => {
              let cur_id = doc.id;
              let obj ={...doc.data(),cur_id}
  
              datas.push(obj);
  
              // console.log("datas....",datas)
  
          
          });
  
          setGetData(datas)
          setDuplicateData(datas)
            //  console.log("dublicatedtaa",duplicateData)
             
         
      });
      
  
  })



  return (
      <>
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} >
        <h1 style={{margin:'3rem',textAlign:'center'}}>Find an <color style={{color:'blue'}}>Intern</color> you love</h1>
          <Paper className={classes.paper}>
            <div className={classes.Search}>
               <input type="text" placeholder=" search intern vacancy.." className={classes.input} onChange={searchIntern}/>
               <Button variant="contained" color="primary" style={{  borderRadius:'0px 20px 20px 0px' }}>search</Button>
              </div>
          
          </Paper>
        </Grid>
       
        
      </Grid>
    </div>

    
   <div style={{margin:'5rem'}}>
     <h1 style={{textAlign:'center'}}> Top <color style={{color:'Blue'}}> Interns </color> available</h1>
     {duplicateData.length === 0 && <h1 style={{textAlign:'center'}}>Loading...</h1>}
    <div style={{margin:'2rem'}}>
        <Grid container spacing={3} >
       
       { duplicateData.map((dataa) =>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={2} >
                    <PopularInternCards
                    dataa={dataa}
                    key={dataa.id}
                    />
                   
            </Grid>
            )
            }
         
          
        </Grid>
   </div>
    
   
    </div>
    </>
  );
}
