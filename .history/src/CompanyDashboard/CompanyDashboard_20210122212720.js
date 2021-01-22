import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Box, Typography, Button, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function CompanyDashboard() {
  const { currentUser, userData } = useAuth();
  console.log("currentUserUUUUUUUUUUU", currentUser);
  console.log("user dataDDDDDDDDD", userData);

<<<<<<< HEAD
function HomePage() {
    const { currentUser, userData } = useAuth()
    
     console.log(userData,"userData")
     console.log("currentUserUUUUUUUUUUU", currentUser);

     const history =useHistory()
     console.log(userData,"udataaaaa")

     useEffect(() => {}, [currentUser]);
   
    return (
        <Box bgcolor="primary.main" py={10} color="white">
            <Grid container justify="center">
             <Grid item xs={10}>
                 <Box display="flex" justifyContent="space-between">    
                     <Typography variant="subtitle1">
                      companyName
                     </Typography>
                 <Button variant="contained" color="secondary" disableElevation onClick={()=>history.push("/")}>back</Button>
                 </Box>
             </Grid>
=======
  const history = useHistory();
  console.log(userData);

  useEffect(() => {}, [currentUser]);
  return (
    <Box bgcolor="primary.main" py={10} color="white">
      <Grid container justify="center">
        <Grid item xs={10}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="subtitle1">companyName</Typography>
            <Button
              variant="contained"
              color="secondary"
              disableElevation
              onClick={() => history.push("/")}
            >
              back
            </Button>
          </Box>
>>>>>>> 361b71351ef80fe1fdb9f6f15ce2f0b51195d1e0
        </Grid>
      </Grid>
    </Box>
  );
}

export default CompanyDashboard;
