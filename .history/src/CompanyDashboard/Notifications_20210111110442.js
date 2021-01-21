import React from 'react'
import Card from '@material-ui/core/Card'
import { Grid ,Box ,Typography,makeStyles,CardHeader,Avatar} from '@material-ui/core'
import CompanyDashBoard from './CompanyDashboard'

const useStyles = makeStyles({
    wrapper:{
      // backgroundColor:'white',
      display:'flex',
      // boxShadow:'0px 1px 5px rgba(0,0,0,0.1)',
      // borderRadius:'5px ',
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
        <Box  color="black" ml={15} mt={-5} className={classes.wrapper}>
       <Grid container>
       <Grid item xs={10}>
          <Card>
          <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
          </Card>
       </Grid>      
       </Grid>
       </Box>
       </>
    )
}

export default Notifications
