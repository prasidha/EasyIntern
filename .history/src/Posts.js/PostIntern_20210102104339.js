import React ,{useEffect, useState}from 'react'
import Navbar from '../Navbar'
import BackgroungImage from '../images/intern.jpg'
import './PostIntern.css'
import {Button ,Grid ,Modal ,TextField ,MenuItem} from '@material-ui/core'
import InternCard from "./InternCard"
import {db} from '../firebase'
import firebase from 'firebase'
import {useAuth} from '../context/AuthContext'

function PostIntern() {

   const {userData,currentUser}=useAuth();
   const [open ,setOpen] =useState(false)
   const [getPost, setGetPost] = useState({
    companyName:'',
    companyAddress:'',
    companyDescription:'',
    companyWebsite:'',
    internTitle:'',
    internDeadline:'',
    internDescription:'',
    requiredSkills:'',
    category:'web design',
   })
   const [posts, setPosts] = useState([]);
   const[loading,setLoading]=useState(true)
  

   const handleOpen =()=>{
      setOpen(true);  
}

  const handleClose=()=>{
      setOpen(false);
}

  const handleEvent = (e) =>{
    const { name ,value} = e.target;

    setGetPost((preValue) =>{

      return{
        ...preValue,
        [name]  : value,
      }
    })
  }

  const postIntern = () =>{
    
      db.collection("internPosts").doc(currentUser.uid).set({
            id:userData.company_id,
            internPost:getPost,
            timestamp:Date.now()
            
      })
      handleClose()
      // setPosts([...posts,getPost]);
      setGetPost("");
     

  }

  useEffect(()=>
      {
        db.collection("internPosts").onSnapshot(snapshot => 
          {
               setPosts(snapshot.docs.map(doc => ({id:doc.id,internPost:doc.data()})))
         })
      }
  )

  
  if(userData === undefined && posts.id === undefined){
           return <h1>.....</h1>
  }
 
  
    
  return (
    <>
    <Navbar/>
   <div className="modal">
   <Modal
   open={open}
   close={handleClose}
   >
    <div className="modal__open">
    <Button onClick={handleClose} variant="contained" color="secondary" style={{float:'right'}}>X</Button>
       
    <form className="form_">
    <Grid container spacing={1}>

    <Grid item xs={12} sm={6}>
      <TextField  
      variant="outlined"
      margin="normal"
      required
      fullWidth
      label="Company Name"
      name="companyName"
      autoComplete
      placeholder={userData?.companyName}
      onChange={handleEvent}
      value={getPost.companyName}
      InputLabelProps={{
        shrink: true,
      }}
      autoFocus/>
      </Grid>
      
      <Grid item xs={12} sm={6}>
      <TextField  
      variant="outlined"
      margin="normal"
      required
      fullWidth
      label="Company Address"
      name="companyAddress"
      autoComplete
      placeholder={userData?.companyAddress}
      onChange={handleEvent}
      value={getPost.companyAddress}
      InputLabelProps={{
        shrink: true,
      }}
      />
      </Grid>

      <Grid item xs={12} >
      <TextField
      variant="outlined"
      margin="normal"
      required
      fullWidth
      label="Company Description"
      type="text"
      defaultValue="2017-05-24T10:30"
      onChange={handleEvent}
      name="companyDescription"
      value={getPost.companyDescription}
      InputLabelProps={{
        shrink: true,
      }}
    />
    </Grid>

    <Grid item xs={12} >
      <TextField  
      variant="outlined"
      margin="normal"
      required
      fullWidth
      label="Company Website"
      name="companyWebsite"
      autoComplete
      onChange={handleEvent}
      value={getPost.companyWebsite}
      InputLabelProps={{
        shrink: true,
      }}
      />
      </Grid>

    <Grid item xs={12} sm={6}>
    <TextField
    variant="outlined"
    margin="normal"
    fullWidth
    required
    label="Intern Title"
    type="text"
    onChange={handleEvent}
    name="internTitle"
    value={getPost.internTitle}
    InputLabelProps={{
      shrink: true,
    }}
  />
</Grid>

<Grid item xs={12} sm={6}>
<TextField
variant="outlined"
margin="normal"
fullWidth
required
label="Deadline"
type="date"
defaultValue="2077-10-10"
onChange={handleEvent}
value={getPost.internDeadline}
name="internDeadline"
InputLabelProps={{
  shrink: true,
}}
/>
</Grid>

<Grid item xs={12} >
        <TextField
        variant="outlined"
        margin="normal"
        required
        fullWidth
        label="Intern Description"
        type="text"
        onChange={handleEvent}
        name="internDescription"
        value={getPost.internDescription}
        InputLabelProps={{
          shrink: true,
        }}
      />
  </Grid>  
    
   <Grid item xs={12}>
      <TextField 
      variant="outlined"
      margin="normal"
      required
      fullWidth
      type="text"
      label=" Required Skills"
      name="requiredSkills"
      value ={getPost.requiredSkills}
      onChange={handleEvent}
      InputLabelProps={{
        shrink: true,
      }}
      />
      </Grid>

      <Grid item xs={12}>
      <TextField 
      variant="outlined"
      margin="normal"
      required
      fullWidth
      type="text"
      label="Category"
      select
      name="category"
      value ={getPost.category}
      onChange={handleEvent}
      InputLabelProps={{
        shrink: true,
      }}
      >
      <MenuItem></MenuItem>
      <MenuItem value={"web design"}>web design</MenuItem>
      <MenuItem value={"Android"}>Android</MenuItem>
      <MenuItem value={"sth"}>sth</MenuItem>
      <MenuItem value={"srhw"}>srhw</MenuItem>
      </TextField>
      </Grid>

      </Grid>
      </form>
      <Button variant="contained" color='primary' onClick={postIntern} fullWidth >post</Button>
     
    </div>
      
   </Modal>
    <div className="posts">
       <img src={BackgroungImage} alt="img" className="image"/> 
      <button onClick={handleOpen} className="btn">post an intern </button>
    </div>
</div>
   
  
      <div className="post__intern">
    {posts === '' ? "No posts yet" :posts.length===0 ? <h1> loading....</h1> : 
    <div className="grid">
    <Grid container spacing={1}>
      { 
       
      posts.map((post,id)=> 
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <InternCard
                post={post}
                key={id}
                
            />
           
        </Grid>
        )
    }     
    </Grid>
    
</div>
  }
    </div>
    </>
  )
}

export default PostIntern