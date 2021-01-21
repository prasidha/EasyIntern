import React from 'react'
import { useAuth } from "../context/AuthContext"
import Notifications from './Notifications'


function HomePage() {
    const {logOut,currentUser,setIsLoggedIn,IsLoggedIn} = useAuth()
    
     
   
    return (
        <Box>
             <Typography>company</Typography>
        </Box>
    )
}

export default HomePage
