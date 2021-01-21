import React ,{ useState , useEffect }from 'react'
import Card from '@material-ui/core/Card'
import CompanyDashBoard from './CompanyDashboard'
import CompanyCard from './CompanyCard'
import {db} from '../firebase'
import {useAuth} from '../context/AuthContext'

function Notifications() {
 const [currentUserData,setCurrentUserData] =useState([])
 const {currentUser} =useAuth()

  const fetchData = async() => {
    
  const req = await db.collection("internData").doc(currentUser.uid).orderBy("postedOn","desc").get()
  const temp = req.docs.map(job =>({ 
    ...job.data(),
    id:job.id,
    postedOn:job.data().postedOn.toString()
  
  }))
  setCurrentUserData(temp);
  console.log(currentUserData,"data")
  
  }
   
    return (
        <>
        <CompanyDashBoard/>
        {
currentUserData && currentUserData.map (data =>
  <CompanyCard />
        }
  )
          
       
        
       </>
    )
}

export default Notifications