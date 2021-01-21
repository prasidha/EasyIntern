import React ,{useEffect} from 'react'
import { useAuth } from "../context/AuthContext"
import Notifications from './Notifications'
import { Box ,Typography ,Button ,Grid} from '@material-ui/core'
import { useHistory } from 'react-router-dom'


function HomePage() {
    const {currentUser,userData} = useAuth()
    const history =useHistory()
     console.log(userData)
   
    
    return (
        <Box bgcolor="primary.main" py={10} color="white">
            <Grid container justify="center">
             <Grid item xs={10}>
                 <Box display="flex" justifyContent="space-between">    
                     <Typography variant="caption">
                      {userData && userData.companyName}
                     </Typography>
                 <Button variant="contained" color="secondary" disableElevation onClick={()=>history.push("/")}>back</Button>
                 </Box>    
             </Grid>
        </Grid>
        </Box>
    )
}

export default HomePage
