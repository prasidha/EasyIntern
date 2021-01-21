import React from 'react'
import { useAuth } from "../context/AuthContext"
import Notifications from './Notifications'
import { Box ,Typography ,Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'


function HomePage() {
    const {logOut,currentUser,setIsLoggedIn,IsLoggedIn} = useAuth()
    const history =useHistory()
     
   
    return (
        <Box bgcolor="primary.main" py={10} margin={2} display="flex" justifyContent="space-between">
             <Typography>companyDashBoard</Typography>
             <Button variant="contained" color="secondary" onClick={()=>history.push("/")}>Back</Button>
        </Box>
    )
}

export default HomePage
