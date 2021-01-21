import { Button } from '@material-ui/core'
import React from 'react'
import{Card,CardHeader,Typography,CardContent}from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import {useAuth} from '../context/AuthContext'
import {useHistory} from 'react-router-dom'
import { db } from '../firebase'

function StudentDashboard() {
  const {logOut,currentUser,setIsLoggedIn,userData ,apply,setApply} =useAuth()
  const history =useHistory()


const getApplyData = async() => {
  
  const req = await db.collection("notification").get()
  const temp = req.docs.map(doc =>({ 
    ...doc.data(),
    id:doc.id,
    
  }))
  
  setApply(temp);
 

 }
 getApplyData()

    return (
        {
          apply

        }
    )
}

export default StudentDashboard
