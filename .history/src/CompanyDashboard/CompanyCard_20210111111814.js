import React from 'react'
import { Grid ,Box ,Typography,makeStyles,CardHeader,Avatar,Card} from '@material-ui/core'


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

function CompanyCard(props) {
    const classes = useStyles()
    return (
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
          title={props.ti}
          subheader="September 14, 2016"
        />
          </Card>
       </Grid>      
       </Grid>
       </Box>
    )
}

export default CompanyCard
