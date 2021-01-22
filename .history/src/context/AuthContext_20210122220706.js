import { CircularProgress } from "@material-ui/core";
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
  const [getData, setGetData] = useState([]);

  const value = {
    currentUser,
    companySignUp,
    studentSignUp,
    login,
    logOut,
    userData,
    setUserData,
    getData,
    setGetData,
    apply,
    setApply,
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
      } else {
        //    setIsLoggedIn(false)
        setCurrentUser(null);
      }
    });
  }, []);

  const fetchUserData = async (user) => {
    setLoading(true);
    const data = await db.collection("userdata").doc(user.uid).get();
    const temp = data.data();
    setUserData(temp ?? {});
    setLoading(false);
  };



  if (userData === undefined) {
    return <CircularProgress />;
  }

  //   if () {


  //   }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

