import React from 'react'
import Copyright from './Copyright'
import { Box,  Grid,  IconButton,  makeStyles,Link}from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';


const useStyles = makeStyles((theme)=>({


   
    root: {
        flexGrow: 1,
        backgroundColor:'lightgrey',
        marginTop:'21%'
      
      
      },
  
gridStyles:{
textAlign:'center',
marginTop: theme.spacing(5),


},

  
gridUlStyle:{
   
    // marginTop: theme.spacing(5),
    // marginLeft: theme.spacing(-15),

    
    
    },





}))

function Footer() {

    const classes= useStyles()
    return (
        <div className={classes.root}>

        <Grid container >
                    <Grid item xs  className={classes.gridUlStyle}>
                    <ul style={{listStyleType: 'none'}}>
                    <li><Link href="" style={{textDecoration:'none'}}>About</Link></li>
                    <li><Link href="/contact" style={{textDecoration:'none'}}>Contact</Link></li>
                    </ul>
                   
                    </Grid>
        <Grid item xs={6} className={classes.gridStyles}>
          <IconButton>
          <FacebookIcon style={{color:'blue'}}/>
          </IconButton>

          <IconButton>
          <TwitterIcon style={{color:'#1DA1F2'}}/>
          </IconButton>

          <IconButton>
          <LinkedInIcon style={{color:'#2867B2'}}/>
          </IconButton>

          <IconButton>
          <InstagramIcon style={{color:'#fb3958'}}/>
          </IconButton>
        </Grid>
        <Grid item xs className={classes.gridUlStyle}>
        <ul style={{listStyleType: 'none'}}>
        <li><Link href="#" style={{textDecoration:'none'}}>Legal policy</Link></li>
        <li><Link href="#" style={{textDecoration:'none'}}>Terms & condition </Link></li>
        </ul>
        </Grid>
      </Grid>


                
      
       
   <Box mt={1}>
      <Copyright />
    </Box>
   

      </div>
     
    )
}

export default Footer
