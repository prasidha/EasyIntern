import { Button } from '@material-ui/core'
import React from 'react'
import{Card,CardHeader,Typography,CardContent}from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import {useAuth} from '../context/AuthContext'
import {useHistory} from 'react-router-dom'

function StudentDashboard() {
  const {logOut,currentUser,setIsLoggedIn,userData} =useAuth()
  const history =useHistory()

  const onHandleLogout =() => {
    logOut(currentUser)
    history.push('/')
    setIsLoggedIn(false)
  }
  if(!currentUser){
    return <h1>loading...</h1>
  }
  console.log(userData,"from dashboard")
  console.log(currentUser,"from dashboard")
    return (
        <div style={{backgroundColor:'whitesmoke'}}>

           <div style={{display:'flex',justifyContent:'space-between'}}>

                 <div>
                 <Button variant="contained" color="primary">Back</Button>
                 </div>
                 <div>
                 <Button variant="contained" color="primary" onClick={onHandleLogout}>logout</Button>
                 </div>
           </div> 

           <div style={{display:'flex',justifyContent:'space-between'}}>
                 <Card>
                 <h1 style={{color:'skyblue',textAlign:'center'}}>student profile</h1>
                 <CardHeader
                 avatar={
                   <Avatar variant="square" style={{width:'150px',height:'150px',margin:'auto 3rem'}}>
                     
                   </Avatar>
                 }
                             
/>
                    
               <CardContent style={{float:'left'}}>
               <h1>{currentUser.displayName}</h1>
               <Typography variant="body" component="h2" >
               Email:{currentUser.email}
               </Typography>
                      <br/>
               <Typography variant="body" component="h2" style={{float:'left'}}>
              Current Address:"koteshwor"
               </Typography>

               
              
               

               <br/>
               <Typography variant="body" component="h2">
               phone no:
               </Typography>

               <Typography variant="body" component="h2">
               Gender:
               </Typography>

               <Typography variant="body" component="h2">
               Age:
               </Typography>
               <Typography variant="body" component="h2">
               Other descriptions:
               </Typography>

             </CardContent>
               
         
                 </Card>

                      
          
           </div> 
        </div>
    )
}

export default StudentDashboard
