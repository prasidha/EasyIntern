import React from 'react'
import { useAuth } from "../context/AuthContext"
import Notifications from './Notifications'
import { Box ,Typography } from '@material-ui/core'


function HomePage() {
    const {logOut,currentUser,setIsLoggedIn,IsLoggedIn} = useAuth()
    
     
   
    return (
        <Box margin={2}>
             <Typography>companyDashBoard</Typography>
             <Button>Back</Button>
        </Box>
    )
}

export default HomePage
