import { Button, CircularProgress } from '@material-ui/core'
import React, { useEffect, useState }from 'react'
import{Card, Box, CardHeader, Typography, CardContent, Grid} from '@material-ui/core';
import { useAuth } from '../context/AuthContext'
import { useHistory } from 'react-router-dom'
import { db } from '../firebase'

function StudentDashboard() {
  const { currentUser, userData} =useAuth()

  const history =useHistory()
 if(userData === undefined){
   return <Box display="flex" justifyContent="center"><CircularProgress/></Box>
 }
    return (
      <>
      <Box bgcolor="primary.main" py={10} color="white">
      <Grid container justify="center">
       <Grid item xs={10}>
           <Box display="flex" justifyContent="space-between">    
               <Typography variant="subtitle1">
                {userData && userData.firstName}
               </Typography>
           <Button variant="contained" color="secondary" disableElevation onClick={()=>history.push("/")}>back</Button>
           </Box>
       </Grid>
  </Grid>
</Box>
</>
    )
}

export default StudentDashboard
