import React from 'react'
import {Card, CardContent,Typography,Avatar,IconButton, Button} from "@material-ui/core"
import CardHeader from '@material-ui/core/CardHeader';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useAuth} from '../context/AuthContext'
import {Link} from 'react-router-dom'

function InternCard({internPost}) {
  const {userData}=useAuth()
 let cName =internPost.internPost.cname.charAt(0)

//  let date = internPost.timestamp.date();

    return (
        <div className='intern__card' style={{margin:'5px'}}>

         <Card  style={{boxShadow:'1px 5px 10px -1px'}}>
         <CardHeader
         avatar={
           <Avatar aria-label="recipe">
            {cName}
           </Avatar>
         }
         action={
           <IconButton aria-label="settings">
             <MoreVertIcon />
           </IconButton>
         }
         title={internPost.internPost.cname}
         subheader=""
       />
             <CardContent>
             
              <Typography>
                  kathmandu,nepal
               </Typography>
               <Typography>vacancy :{internPost.internPost.vacancy}</Typography>

            
               <Typography> skills :{internPost.internPost.description}</Typography>
              <Typography>Deadline : {internPost.internPost.deadline}</Typography>

             </CardContent>

             {userData?.isStudent === true ?( <Button color="primary" variant="contained" style={{width:'100%'}} onClick={()=>{alert("applied")}}>apply now</Button>) : userData?.isStudent===false ? ( <Link to="/signin" style={{textDecoration:'none'}} ><Button color="primary" variant="contained" style={{width:'100%'}} onClick={()=>alert("you are company you cannot apply")}>apply now </Button></Link>) : ( <Link to="/signin" style={{textDecoration:'none'}} ><Button color="primary" variant="contained" style={{width:'100%'}} >apply now </Button></Link>) }
         </Card>
            
        </div>
    )
}

export default InternCard
