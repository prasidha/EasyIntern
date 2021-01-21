import React from 'react'
import { useAuth } from "../context/AuthContext"
import Notifications from './Notifications'
import { Box ,Typography ,Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'


function HomePage() {
    const {logOut,currentUser,setIsLoggedIn,IsLoggedIn} = useAuth()
    const history =useHistory()
     
   
    return (
        <Box margin={2} display="flex" justifyContent="space-between">
             <Typography>companyDashBoard</Typography>
             <Button variant="contained" color""onClick={()=>history.push("/")}>Back</Button>
        </Box>
    )
}

export default HomePage
