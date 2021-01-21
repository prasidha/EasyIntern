import React from 'react'
import Card from '@material-ui/core/Card'
import { Grid ,Box ,Typography} from '@material-ui/core'

function Notifications() {
    return (
        <>
        <CompanyDashBoard/>
        <Box width="" mt={-10} bgcolor="white">
       <Grid container>
       <Grid item xs={10}>
           <Box>
              <Typography> prasidha Acharya </Typography>
           </Box>
       </Grid>      
       </Grid>
       </Box>
       </>
    )
}

export default Notifications
