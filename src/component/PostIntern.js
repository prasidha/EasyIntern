import React ,{useState}from 'react'
import Navbar from './Navbar'
import BackgroungImage from '../component/images/intern.jpg'
import './PostIntern.css'
import {Button,Grid,} from '@material-ui/core'
import InternCard from "../component/InternCard"

function PostIntern() {
   const posts =["hello","this","is","posts","hey","hey","hahah"]
    
  return (
    <>
    <Navbar/>
    <div className="posts">
       <img src={BackgroungImage} alt="img" className="image"/> 
       <button className="btn" onClick={()=>{alert("you clicked post button")}}>Post an Intern</button>    
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
