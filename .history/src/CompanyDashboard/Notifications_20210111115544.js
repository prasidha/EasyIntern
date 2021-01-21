import React ,{ useState , useEffect }from 'react'
import Card from '@material-ui/core/Card'
import CompanyDashBoard from './CompanyDashboard'
import CompanyCard from './CompanyCard'
import {db} from '../firebase'
import {useAuth} from '../context/AuthContext'

function Notifications() {
 
 const {currentUser, getData} =useAuth()
 console.log(getData,"getData...")
    return (
        <>
        <CompanyDashBoard/>
        {
getData.length == && getData.map (data =>
  <CompanyCard key={data} {...data}/>)
        }
  )
          
       
        
       </>
    )
}

export default Notifications
