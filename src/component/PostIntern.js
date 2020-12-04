import React ,{useState}from 'react'
import Navbar from './Navbar'
import BackgroungImage from '../component/images/intern.jpg'
import './PostIntern.css'
import {Button,Grid, Modal,TextField} from '@material-ui/core'
import InternCard from "../component/InternCard"

function PostIntern() {
   const[user,setUser] =useState(true);
   const [open ,setOpen] =useState(false)
   const [getPost, setGetPost] = useState({
    cname:'',
    vacancy:'',
    deadline:'',
    description:'',
   })
   const [posts, setPosts] = useState([]);

   const handleOpen =()=>{
     if(user){
      setOpen (true);
     }
     else{
      alert("plz register first")
     }
    
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
    
      setPosts([...posts,getPost]);
      setGetPost("");

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
    <Button onClick={handleClose} variant="contained" color="secondary" >X</Button>
       
    <form className="form_">
      <TextField  variant="outlined"
      margin="normal"
      required
      fullWidth
      label="Company Name"
      name="cname"
      autoComplete
      onChange={handleEvent}
      value={getPost.cname}
      autoFocus/>

      <TextField  variant="outlined"
      margin="normal"
      required
      fullWidth
      label="vacancy for"
      name="vacancy"
      value={getPost.vacancy}
      onChange={handleEvent}
      autoComplete="vacancy"/>

      <TextField 
      variant="outlined"
      margin="normal"
      required
      fullWidth
      type="date"
      id="deadline"
       label="deadline"
      name="deadline"
      value ={getPost.deadline}
      onChange={handleEvent}
      />
      <TextField 
      variant="outlined"
      margin="normal"
      required
      fullWidth
      type="text"
      label="description/skills"
      name="description"
      value ={getPost.description}
      onChange={handleEvent}
      />
      </form>
      <Button onClick={postIntern}>post</Button>
    </div>
      
   </Modal>
    <div className="posts">
       <img src={BackgroungImage} alt="img" className="image"/> 
       <button className="btn" onClick={handleOpen}>Post an Intern</button>   
    </div>
</div>
    <div className="post__intern">
    <div className="grid">
    <Grid container spacing={1}>
    {
        posts.map((post)=>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
                <InternCard
                post={post}
            />
        </Grid>
        )
    }     
    </Grid>
    
</div>
    </div>
    </>
  )
}

export default PostIntern
