import { Button } from '@material-ui/core'
import React from 'react'
import{Card,CardHeader,Typography,CardContent}from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import {useAuth} from '../context/AuthContext'
import {useHistory} from 'react-router-dom'

function StudentDashboard() {
  const {logOut,currentUser,setIsLoggedIn,userData} =useAuth()
  const history =useHistory()

 

    return (
        <div style={{backgroundColor:'whitesmoke'}}>

           <div style={{display:'flex',justifyContent:'space-between'}}>

                 <div>
                 <Button variant="contained" color="primary" onClick={()=> history.push('/')}>Back</Button>
                 </div>
                 <div>
              
                 </div>
           </div> 

      
        </div>
    )
}

export default StudentDashboard
