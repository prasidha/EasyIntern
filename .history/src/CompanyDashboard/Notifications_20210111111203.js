import React ,{ useState , useEffect }from 'react'
import Card from '@material-ui/core/Card'
import CompanyDashBoard from './CompanyDashboard'
import CompanyCard from './CompanyCard'
import {db} from '../firebase'

function Notifications() {
 const [currentUserData,setCurrentUserData] =useState([])

  const fetchData = async() => {
    
    setLoading(true)
  const req = await db.collection("internData").orderBy("postedOn","desc").limit(2).get()
  const temp = req.docs.map(job =>({ 
    ...job.data(),
    id:job.id,
    postedOn:job.data().postedOn.toString()
  
  }))
  setData(temp);
  
  
  }
   
    return (
        <>
        <CompanyDashBoard/>
        {

          <CompanyCard/>
        }
       
        
       </>
    )
}

export default Notifications
