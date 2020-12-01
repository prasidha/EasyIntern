import React from 'react'
import {Card, CardContent,Typography,Avatar,IconButton} from "@material-ui/core"
import CardHeader from '@material-ui/core/CardHeader';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function InternCard(props) {
    return (
        <div className='intern__card' style={{margin:'5px'}}>

         <Card  style={{boxShadow:'1px 5px 10px -1px'}}>
         <CardHeader
         avatar={
           <Avatar aria-label="recipe">
             R
           </Avatar>
         }
         action={
           <IconButton aria-label="settings">
             <MoreVertIcon />
           </IconButton>
         }
         title="Shrimp and Chorizo Paella"
         subheader="September 14, 2016"
       />
             <CardContent>
             
              <Typography>
                  kathmandu,nepal
               </Typography>
               <Typography>{props.arr}</Typography>

            

              <Typography>deadline</Typography>

             </CardContent>

              
         </Card>
            
        </div>
    )
}

export default InternCard
