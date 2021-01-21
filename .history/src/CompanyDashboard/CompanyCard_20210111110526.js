import React from 'react'
import { Grid ,Box ,Typography,makeStyles,CardHeader,Avatar} from '@material-ui/core'

function CompanyCard() {
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
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
          </Card>
       </Grid>      
       </Grid>
       </Box>
    )
}

export default CompanyCard
