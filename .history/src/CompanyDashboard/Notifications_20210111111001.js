import React from 'react'
import Card from '@material-ui/core/Card'
import CompanyDashBoard from './CompanyDashboard'
import CompanyCard from './CompanyCard'

const fetchData = async() => {
  setCustomSearch(false)
  setLoading(true)
const req = await db.collection("internData").orderBy("postedOn","desc").limit(2).get()
const temp = req.docs.map(job =>({ 
  ...job.data(),
  id:job.id,
  postedOn:job.data().postedOn.toString()

}))
setData(temp);


}
function Notifications() {
   
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
