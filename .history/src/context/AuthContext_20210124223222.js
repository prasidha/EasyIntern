import { Box, CircularProgress } from "@material-ui/core";
import React, { createContext, useState, useEffect, useContext } from "react";
import { auth, db } from "../firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState();
  const [apply, setApply] = useState([]);
  const [getInternData, setGetInternData] = useState([]);

  const value = {
    currentUser,
    companySignUp,
    studentSignUp,
    login,
    logOut,
    userData,
    setUserData,
    getInternData,
    setGetInternData,
    apply,
    setApply,
    fetchInternPost,
    fetchUserData
    
  };

  function studentSignUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function companySignUp(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logOut(currentUser) {
    if (currentUser) {
      auth.signOut();
    }
  }

 

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log(user, "user");
      if (user) {
        console.log("userr there is ");
        // setIsLoggedIn(true)
        setCurrentUser(user);
        fetchUserData(user);
        fetchInternPost()
        
        
      } else {
        //    setIsLoggedIn(false)
        setCurrentUser(null);
      }
    });
  }, []);

  async function fetchInternPost () {
    const req = await db
    .collection("internData")
    .orderBy("postedOn", "desc")
    .limit(5)
    .get();
  const temp = req.docs.map((job) => ({
    ...job.data(),
    id: job.id,
    postedOn: job.data().postedOn.toString(),
  }));
  setGetInternData(temp);
  }

  async function 

 async function fetchUserData(user) {
    setLoading(true);
    const data = await db.collection("userdata").doc(user.uid).get();
    const temp = data.data();
    setUserData(temp ?? {});
    setLoading(false);
  };


 if(getInternData.length===0){
    return <Box><CircularProgress/></Box>
 }
 
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

