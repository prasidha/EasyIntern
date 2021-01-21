import React from 'react'
import Card from '@material-ui/core/Card'
import { Grid ,Box ,Typography} from '@material-ui/core'

function Notifications() {
    return (
        <CompanyDashBoard/>
       <Grid container>
       <Grid item xs={10}>
           <Box mt={-5}>
              <Typography> prasidha Acharya </Typography>
           </Box>
       </Grid>      
       </Grid>
    )
}

export default Notifications
