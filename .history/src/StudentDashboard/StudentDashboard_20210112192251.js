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
 
                     this is dashboard
      
        </div>
    )
}

export default StudentDashboard
