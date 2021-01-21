import React from 'react'
import Card from '@material-ui/core/Card'
import { Grid ,Box ,Typography,makeStyles} from '@material-ui/core'
import CompanyDashBoard from './CompanyDashboard'

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
    const classes = useStyles()
    return (
        <>
        <CompanyDashBoard/>
        <Box width="80%" mt={-5} color="black" margin="auto" className={classes.wrapper}>
       <Grid container>
       <Grid item xs={10}>
          <Card>
                
          </Card>
       </Grid>      
       </Grid>
       </Box>
       </>
    )
}

export default Notifications
