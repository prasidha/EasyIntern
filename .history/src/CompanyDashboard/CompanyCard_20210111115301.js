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
        <Grid container alignItems="center">
        <Grid item xs>
            <Typography variant="subtitle1">{props.title}</Typography>
            <Typography variant="subtitle1" className={classes.cName}>{props.companyName}</Typography>
        </Grid>
        <Grid item container xs>
         { props.skills.map(skill => 
            <Grid key={skill.id} item className={classes.skill}>
                   {skill}
            </Grid>
            )}
        </Grid>
        <Grid item container direction="column" alignItems="flex-end" xs>
            <Grid item >
                <Typography variant="caption">{`${props.postedOn}`}|part time|remote</Typography>
            </Grid>

            <Grid item>
                <Box mt={2} mr={7}>
                <Button variant="outlined">apply</Button>
                </Box>
            
            </Grid>
        
        </Grid>
    </Grid>
       </Box>
    )
}

export default CompanyCard
