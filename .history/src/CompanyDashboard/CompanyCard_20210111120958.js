import React from 'react'
import { 
    Grid ,
    Box ,
    Button,
    Typography,
    makeStyles,
    CardHeader,
    Avatar,
    Card

    } from '@material-ui/core'


    const useStyles = makeStyles((theme) => 
    ({
        wrapper:{
            border:'1px solid #e8e8e8',
            cursor:"pointer",
            transition:'.3s',
    
            "&:hover": {
                boxShadow:'1px 5px 5px 1px rgba(0,0,0,0.1)',
                borderLeft:'4px solid skyblue'
                
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

function CompanyCard(props) {
    const classes = useStyles()
    if(props.postedBy)
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
