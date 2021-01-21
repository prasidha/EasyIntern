import React from 'react'
import {Card, CardContent,Typography,Avatar,IconButton, Button} from "@material-ui/core"
import CardHeader from '@material-ui/core/CardHeader';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useAuth} from '../context/AuthContext'
import {Link} from 'react-router-dom'

function InternCard({post}) {
  const {userData,currentUser}=useAuth()
//  let cName =internPost.internPost.cname.charAt(0)

//  let date = internPost.timestamp.date();
// if(post === undefined){
//   return <h1>loading...</h1>
// }

console.log(post.id,"post")

if(currentUser?.uid !== post.id){
        return false;
}
    return (
       
      <div className='intern__card' style={{margin:'5px'}}>
         <Card  style={{boxShadow:'1px 5px 10px -1px'}}>
         <CardHeader
      
         action={
           <IconButton aria-label="settings">
             <MoreVertIcon />
           </IconButton>
         }
         title={post.internPost.internPost.companyName}
         subheader={post.timestamp}
       />
             <CardContent>
             
              <Typography>
                  kathmandu,nepal
               </Typography>
               <Typography>vacancy :{post.internPost.internPost.internTitle}</Typography>

            
               <Typography> skills :{post.internPost.internPost.requiredSkills}</Typography>
              <Typography>Deadline : {post.internPost.internPost.internDeadline}</Typography>

             </CardContent>

            
         </Card>
            
        </div>
    )
        
}

export default InternCard
