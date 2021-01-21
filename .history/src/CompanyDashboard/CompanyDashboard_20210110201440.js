import React from 'react'
import { useAuth } from "../context/AuthContext"
import Notifications from './Notifications'
import {Box ,}


function HomePage() {
    const {logOut,currentUser,setIsLoggedIn,IsLoggedIn} = useAuth()
    
     
   
    return (
        <Box>
             <Typography>companyDashBoard</Typography>
        </Box>
    )
}

export default HomePage
