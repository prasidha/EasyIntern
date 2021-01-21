import React ,{ useState ,useEffect } from "react";
import { Box,Button,CircularProgress,Grid,ThemeProvider } from "@material-ui/core";
import theme from './theme/theme'
import Header from './component/Header'
import Search from './component/Search'
import JobCard from "./component/Job/JobCard";
import Navbar from './component/Navbar'
import JobModal from './component/Job/JobModal'
// import data from './dummyData'
import {db} from './firebase'
import CloseIcon from '@material-ui/icons/Close';
import SchoolIcon from '@material-ui/icons/School';
import BusinessIcon from '@material-ui/icons/Business';
import { Link } from 'react-router-dom'
import Pagination from '@material-ui/lab/Pagination';

export default () => {

    const [modal,setModal]= useState(false)
    const [data,setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [customSearch, setCustomSearch] = useState(false)
    const [search, setSearch] = useState('')

    const fetchData = async() => {
      setCustomSearch(false)
    setLoading(true)
    const req = await db.collection("internData").orderBy("postedOn","desc").limit(2).get()
    const temp = req.docs.map(job =>({ 
      ...job.data(),
      id:job.id,
      postedOn:job.data().postedOn.toString()

    }))
    setData(temp);
    setLoading(false);
    setSearch("")
    
   }

   const handleChange = async() => {
     
    const req =await db.collection("internData").orderBy("postedOn","desc").limit(2).get().startAfter("postedOn")
    
   }

   useEffect(() => {
    fetchData();
   }, [])

  const postIntern = async (internDetails) => {
   await db.collection("internData").add({
     ...internDetails,
     postedOn:Date.now(),
   })
   fetchData()
  }

  const searchIntern = async(search) => {
    setLoading(true)
    setCustomSearch(true)
    const req = await db
                .collection("internData")
                .orderBy("postedOn","desc")
                .where(  "title","==" ,search)
                .get()
    const temp = req.docs.map(job =>({ 
      ...job.data(),
      id:job.id,
      postedOn:job.data().postedOn.toString()

    }))
    setData(temp);
    setLoading(false);
   

  }


  return (
  <>
  <Navbar/>
  <Box width="50%" display="flex" justifyContent="space-between" margin="auto" py={5} >
 <Link to="company" style={{textDecoration:'none'}}> <Button  disableElevation variant="outlined" style={{fontSize :'20px',padding:"15px"}}>
  Register as a Company <BusinessIcon/>
 </Button>
 </Link>
 <Link to="student" style={{textDecoration:'none'}}>
 <Button disableElevation  variant="outlined" style={{fontSize :'20px',padding:"15px"}}>
 Register as a Student <SchoolIcon/>
 </Button>
 </Link>
  </Box>
  <Header openModal={()=>setModal(true)}/>
  <JobModal closeModal={()=>setModal(false)} modal={modal} postIntern={postIntern}/>
  <Grid container justify="center">
  <Grid item xs={10}>
  <Search searchIntern={searchIntern} search={search} setSearch={setSearch}/>

  {
    loading ? 
   ( <Box display="flex" justifyContent="center"><CircularProgress/></Box>) 
    :
    (
    <>
    {customSearch && <Box my={2} display="flex" justifyContent="flex-end"><Button onClick={fetchData}><CloseIcon/> custom Search</Button></Box>}
{      data.map(d =><JobCard key={d} {...d}/>)}

  <Box display="flex" justifyContent="center" mt={5}>
  <Pagination count={2} onChange={handleChange} />
  </Box>
      

     </> 
    )
  }

  </Grid>
  </Grid>
</>
    )};

