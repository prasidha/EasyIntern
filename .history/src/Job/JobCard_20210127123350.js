import { Box, Grid ,Typography ,Button} from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => 
({
    wrapper:{
        border:'1px solid #e8e8e8',
        cursor:"pointer",
        transition:'.3s',

        "&:hover": {
            boxShadow:'1px 5px 5px 1px rgba(0,0,0,0.1)',
            borderLeft:'5px solid skyblue'
            
        },
    },
    cName:{
         fontSize:'13.13px',
         backgroundColor:theme.palette.secondary.main,
         padding:theme.spacing(0.75),
         borderRadius:'5px',
         fontWeight:'600',
         display:'inline-block',
         color:'white'

    },
    skill:{
        backgroundColor:"darkslategrey",
        color:'white',
        padding:theme.spacing(0.75),
        margin:theme.spacing(0.80),
        borderRadius:'5px',
        fontWeight:'500',
    }
})

)
const skills =["JavaScript","React js","Node js"]

function JobCard(props) {
    const classes = useStyles()
    return (
       <Box p={2} className={classes.wrapper} mb={1} bgcolor="white">
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
                        <Typography variant="caption">posted on :{new Date(props.postedOn).toTimeString()}  </Typography>
                        {console.log(,"time")}
                        <Typography>Deadline:{props.deadline}</Typography>
                    </Grid>

                    <Grid item>
                        <Box mt={2} mr={7}>
                        <Button variant="outlined" onClick={props.open}>Detail</Button>
                        
                        </Box>
                    
                    </Grid>
                
                </Grid>
            </Grid>
       </Box>
    )
}

export default JobCard
