import { Button } from '@material-ui/core'
import React , { useEffect ,useState}from 'react'
import{Card,Box,CardHeader,Typography,CardContent} from '@material-ui/core';
import {useAuth} from '../context/AuthContext'
import {useHistory} from 'react-router-dom'
import { db } from '../firebase'

function StudentDashboard() {
  const {logOut,currentUser,setIsLoggedIn,userData ,apply,setApply} =useAuth()
  const history =useHistory()
const [data,setData] = useState([])

const getApplyData = async() => {
  
  const req = await db.collection("notification").get()
  const temp = req.docs.map(doc =>({ 
    ...doc.data(),
    id:doc.id,
    
  }))
  
  setApply(temp);
 
 }
 useEffect(() => {
  getApplyData()
 }, [])
 
 useEffect(() => {
   if(currentUser && currentUser.uid){
    db.collection("userData").doc(currentUser.uid).get()
    .then(querySnapshot => 
    { 
      const d =querySnapshot.data()
     setData(d)
     })
   }
  
 }, [currentUser])

 if(data === undefined){
   return <h1>loading....</h1>
 }
    return (
      <div>
        {
          apply.map(a => 
            <Box>
            
            {
              
              a.appliedBy === currentUser.uid ? 
              
              (<Box>
                {data.firstName}
              </Box>)
              :
              
              'false'
            
            }

            </Box>
            )

        }
        </div>
    )
}

export default StudentDashboard
