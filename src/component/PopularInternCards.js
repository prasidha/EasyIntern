import React from 'react'
import {Card, CardContent,
Typography,CardHeader,Avatar,IconButton} 
from "@material-ui/core"
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Images from './images/program.jpg'
import CardMedia from '@material-ui/core/CardMedia';

function PopularInternCards({dataa}) {
        
  let c = dataa.internPost.cname.charAt(0)
    return (
        <div className='intern__card' style={{margin:'2rem',height:'500px'}}>

         <Card  style={{  boxShadow:'1px 5px 10px -1px'}}>
            <CardHeader
            avatar={
                <Avatar aria-label="recipe" style={{height:'4rem',width:'4rem',backgroundColor:'lightblue'}}>
                 {c}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={dataa.internPost.cname}
              subheader={`deadline : ${dataa.internPost.deadline} `}

            />
            <CardMedia
            style={{height:"30px",padding:'20.25%'}}
            image={Images}
            title="Paella dish"
          />

          <CardContent>
              <Typography  style={{margin:'-2rem 0 0 1rem'}} variant="h5">{dataa.internPost.vacancy}</Typography>
             
          </CardContent>
               
             
            
         </Card>
            
        </div>
    )
}

export default PopularInternCards
