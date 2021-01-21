import React from 'react'
import Card from '@material-ui/core/Card'
import { Grid ,Box ,Typography,makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    wrapper:{
      backgroundColor:'white',
      display:'flex',
      boxShadow:'0px 1px 5px rgba(0,0,0,0.1)',
      borderRadius:'5px ',
      "& > *" :{
       flex:"auto ",
       height:'45px',
       margin:'8px',
   
      },
    
    },
    input:{
        backgroundColor:'lightgrey'
    }
   })

function Notifications() {
    return (
        <>
        <CompanyDashBoard/>
        <Box width="80%" mt={-10} bgcolor="white">
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
