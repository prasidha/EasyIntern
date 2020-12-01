import React from 'react'
import {Card, CardContent,
Typography,CardHeader,Avatar,IconButton} 
from "@material-ui/core"
import MoreVertIcon from '@material-ui/icons/MoreVert'

function PopularInternCards(props) {
    return (
        <div className='intern__card' style={{margin:'2rem'}}>

         <Card  style={{  boxShadow:'1px 5px 10px -1px'}}>
            <CardHeader
            avatar={
                <Avatar aria-label="recipe" style={{height:'4rem',width:'4rem',backgroundColor:'lightblue'}}>
                  C
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Company Name"
              subheader="Deadline : September 14, 2020"
              
             
             

            />
          <CardContent>
              <Typography style={{margin:'-2rem 0 0 5rem'}} variant="h5">{props.arr}</Typography>
          </CardContent>
               
             
              
         </Card>
            
        </div>
    )
}

export default PopularInternCards
