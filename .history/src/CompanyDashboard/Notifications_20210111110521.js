import React from 'react'
import Card from '@material-ui/core/Card'

import CompanyDashBoard from './CompanyDashboard'

const useStyles = makeStyles({
    wrapper:{
      // backgroundColor:'white',
      display:'flex',
      // boxShadow:'0px 1px 5px rgba(0,0,0,0.1)',
      // borderRadius:'5px ',
      "& > *" :{
       flex:"auto ",
       height:'45px',
       margin:'8px',
   
      },
    
    },
    input:{
        backgroundColor:'lightgrey'
    }
   })

function Notifications() {
    const classes = useStyles()
    return (
        <>
        <CompanyDashBoard/>
        
       </>
    )
}

export default Notifications
