// import React ,{ useState , useEffect }from 'react'
// // import Card from '@material-ui/core/Card'
// import CompanyDashBoard from './CompanyDashboard'
// import CompanyCard from './CompanyCard'
// import {db} from '../firebase'
// import {useAuth} from '../context/AuthContext'
// import { CircularProgress } from '@material-ui/core'

// function Notifications() {
//  const[postedData,setPostedData] = useState([])
//  const { userData, getData ,currentUser ,setGetData } =useAuth()
//  console.log(getData,"getData...")

//  const fetchData = async() => {
    
//   const req = await db.collection("internData").orderBy("postedOn","desc").get()
//   const temp = req.docs.map(job =>({ 
//     ...job.data(),
//     id:job.id,
//     postedOn:job.data().postedOn.toString()

//   }))
//   setPostedData(temp);
 
//  }
//  useEffect(() =>{fetchData()},[userData,postedData])


// // if(postedData.length === 0){
// //     return <h1>loading...</h1>
// // }
//     return (
//         <>
//         <CompanyDashBoard/>  
//         {
//         postedData.map (data =>
//         <CompanyCard key={data} {...data}/>)
//                 }
//         </>
//   )
               
      
    
import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CompanyDashBoard from "./CompanyDashboard";
import CompanyCard from "./CompanyCard";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";

function Notifications() {
  const { userData, getData } = useAuth();
  console.log(getData, "getData...");

  useEffect(() => {}, [userData, getData]);
if(get)
  return (
    <>
      <CompanyDashBoard />
      {getData.length !== 0
        ? getData.map((data) => <CompanyCard key={data} {...data} />)
        : null}
    </>
  );

}

export default Notifications ;
