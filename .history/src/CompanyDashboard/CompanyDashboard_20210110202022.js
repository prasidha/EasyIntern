import React from 'react'
import { useAuth } from "../context/AuthContext"
import Notifications from './Notifications'
import { Box ,Typography ,Button } from '@material-ui/core'
import { useHistory } from ''


function HomePage() {
    const {logOut,currentUser,setIsLoggedIn,IsLoggedIn} = useAuth()
    
     
   
    return (
        <Box margin={2} display="flex" justifyContent="space-between">
             <Typography>companyDashBoard</Typography>
             <Button>Back</Button>
        </Box>
    )
}

export default HomePage
