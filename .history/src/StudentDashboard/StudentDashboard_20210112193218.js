import { Button } from '@material-ui/core'
import React from 'react'
import{Card,Box,CardHeader,Typography,CardContent} from '@material-ui/core';
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
      <div>
        {
          apply.map(a => 
            <Box>
            
            {a.appliedBy === currentUser.uid ? 
              
              "true" :'false'}

            </Box>
            )

        }
        </div>
    )
}

export default StudentDashboard
