import { Box, Button, CircularProgress, MenuItem, Select } from '@material-ui/core'
import React ,{ useState }from 'react'
import {makeStyles ,Input} from '@material-ui/core'


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

function Search(props) {
    const classes = useStyles()
    const[loading,setLoading] =useState(false)
    


    const onSearch = async() => {
        if(!props.search == ""){
            setLoading(true)
            await props.searchIntern(props.search)
            setLoading(false)
        }
        else{
            alert("search feild is empty")
        }
       
    }

    return (
        <Box className={classes.wrapper} mt={-5} mb={4} p={2}>
           <Input
               name="search" 
               value={props.search} 
               onChange={(e)=>props.setSearch(e.target.value)} 
               color="secondary" 
               disableUnderline 
               placeholder="  search here..." 
               className={classes.input} />
            <Button variant="contained" disabled={loading} color="secondary" disableElevation onClick={onSearch}>
          {  loading ? <CircularProgress/>:
            "  Search"}
            </Button>
        </Box>
    )
}

export default Search
