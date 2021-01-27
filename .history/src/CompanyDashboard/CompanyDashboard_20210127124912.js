import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Box, Typography, Button, Grid, CircularProgress } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import CompanyCard from "./CompanyCard";

function CompanyDashboard() {
  const { currentUser, userData, getInternData } = useAuth();
  console.log("currentUserUUUUUUUUUUU", currentUser);
  console.log("user dataDDDDDDDDD", userData);
  const history =useHistory()
  console.log(userData,"udataaaaa")

     useEffect(() => {}, [currentUser]);

    //  if(getInternData.length === 0){
    //     return <Box display="flex" justifyContent="center"><CircularProgress/></Box>
    //     }
   
    return (
        <>
        <Box bgcolor="primary.main" py={10} color="white">
            <Grid container justify="center">
             <Grid item xs={10}>
                 <Box display="flex" justifyContent="space-between">    
                     <Typography variant="subtitle1">
                      {userData && userData.companyName}
                     </Typography>
                 <Button variant="contained" color="secondary" disableElevation onClick={()=>history.push("/")}>back</Button>
                 </Box>
             </Grid>
        </Grid>
      
    </Box>

    {getInternData.length !== 0 ?
        <Box display="flex" justifyContent="center"><CircularProgress/></Box>
        : getInternData.map((data) => <CompanyCard key={data} {...data} />)
         }
    </>
  );
}

export default CompanyDashboard ;
