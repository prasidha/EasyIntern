import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';

import 
{ 
  Dialog ,
  DialogTitle ,
  DialogContent,
  DialogActions,
  Grid, 
  FilledInput, 
  Select, 
  MenuItem ,
  makeStyles,
  Box,
  Typography,
  IconButton,
  Button,
  CircularProgress,
} 
from '@material-ui/core'

const useStyles =makeStyles( theme => ({
    skill:{
        backgroundColor:"darkslategrey",
        color:'white',
        padding:theme.spacing(0.75),
        margin:theme.spacing(0.80),
        borderRadius:'5px',
        fontWeight:'500',
        "&:hover":{
            color:'white',
            backgroundColor:theme.palette.primary.main,
            transition:'.3s',
            cursor:'pointer'
        },
       } ,
       included:{
        color:'white',
        backgroundColor:theme.palette.primary.main,
        cursor:'pointer'
    },
}))
function JobModal(props) {
    const skills=["JavaScript","Node","Python","MongoDB","Vue","firebase","html" ,"css"];
    const classes = useStyles();
    const [loading,setLoading] =useState(false)
    const[error,setError] =useState('')
    const [input,setInput] = useState('')
        
    const initialState={
        title:'',
        category:'Web design',
        deadline:'',
        companyName:'',
        link:'',
        url:'',
        description:'',
        skills:[],
    }
   const [internDetails, setInternDetails] = useState(initialState)

   const handleChange = (event) => {
       event.persist()
      setInternDetails(prev => ({
          ...prev,
          [event.target.name]:event.target.value,
      }))
      
   }

   const addRemove = (skill) => {
        internDetails.skills.includes(skill) ?
        //remove
        setInternDetails((prev)=> ({
            ...prev,
            skills:prev.skills.filter(s => s!== skill )
        }))
        :
        //add
        setInternDetails((prev)=>({
            ...prev,
            skills:prev.skills.concat(skill)
        }))

   }
   const handleSubmit = async() => {
    for (const feild in internDetails){
        if(!internDetails[feild])return setError("fields should not be empty")
    }
    if(!internDetails.skills.length) return setError("skills is required")

       setLoading(true);
      await props.postIntern(internDetails);
       setLoading(false);
       props.closeModal()

   }

   const onCloseModal =()=> {
        setError("")
        setInternDetails(initialState)
        setLoading(false)
        props.closeModal()
        
   }
    return (
       <Dialog open={props.modal}fullWidth>
      
            <DialogTitle>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography>post intern</Typography>
                {error && <h4 style={{color:'red'}}>{error}</h4>}
                <IconButton onClick={onCloseModal}><CloseIcon/></IconButton>
                </Box>
            </DialogTitle>

            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FilledInput 
                        name="title"
                        value={internDetails.title}
                        onChange={handleChange}
                        disableUnderline 
                        placeholder="intern Title *" 
                        fullWidth/>
                    </Grid>

                    <Grid item xs={6}>
                        <Select 
                        name="category"
                        onChange={handleChange}
                        value={internDetails.category} 
                        fullWidth variant="filled" 
                        disableUnderline>
                            
                            <MenuItem value="Web design">Web design</MenuItem>
                            <MenuItem value="Android">Android</MenuItem>
                            <MenuItem value="sth">sth</MenuItem>
                            <MenuItem value="sth1">sth1</MenuItem>
                        </Select>
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput 
                        name="deadline"
                        onChange={handleChange}
                        value={internDetails.deadline}
                        disableUnderline 
                        placeholder="Deadline *" 
                        type="Date" 
                        fullWidth/>        
                    </Grid>

                    <Grid item xs={6}>
                        <FilledInput
                        name="companyName"
                        onChange={handleChange}
                        value={internDetails.companyName} 
                        disableUnderline 
                        placeholder="Company Name *" 
                        fullWidth/>
                    </Grid>

                    <Grid item xs={12}>
                    <FilledInput 
                        name="link"
                        onChange={handleChange}
                        value={internDetails.link}
                        disableUnderline 
                        placeholder="Intern Apply Link *" 
                        fullWidth
                        />
                   </Grid>

                    <Grid item xs={12}>
                        <FilledInput
                            name="url"
                            onChange={handleChange}
                            value={internDetails.url} 
                            disableUnderline  
                            placeholder="company url *" 
                            fullWidth/>
                    </Grid>

                    <Grid item xs={12}>
                    <FilledInput
                        name="description"
                        onChange={handleChange}
                        value={internDetails.description}
                        disableUnderline
                        placeholder="Company Description*"
                        fullWidth
                        multiline
                        rows={4}
                    />
                    </Grid>

                    <Box>
                      <Typography>
                      Skills*
                      </Typography>
                     
                      <Box display="flex">{skills.map(skill =>
                        <Box onClick={()=>addRemove(skill)} key={skill} className={`${classes.skill} ${internDetails.skills.includes(skill) && classes.included}`}> {skill}</Box>
                        )}

                        </Box>

                        <Button variant="outlined" >+</Button>
                        <Dialog>
                            <input value={input} name="inpu"/>
                        </Dialog>
                        
                    </Box>
                   
                        <Box 
                            width="100%" 
                            display="flex"
                            color="red" 
                            justifyContent="space-between" 
                            alignItems="center" 
                            mb={2}>
                        <Typography>required feilds *</Typography>
                        <Button variant="contained" color='secondary' disableUnderline onClick={handleSubmit} disabled={loading}>
                       { loading ? <CircularProgress/> : "post" }
                        </Button>
                        </Box>
                    
                </Grid>
            </DialogContent>
       
       </Dialog>
    )
}

export default JobModal
