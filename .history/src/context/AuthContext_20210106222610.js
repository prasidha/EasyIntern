
import React, { createContext, useState, useEffect, useContext } from 'react'
import { auth } from '../firebase'

const AuthContext = createContext()

export function useAuth (){
    return  useContext(AuthContext)
}

export function AuthProvider({children}) {
    const[currentUser,setCurrentUser]=useState('')
    const [userData,setUserData] = useState()
    const[isLoggedIn,setIsLoggedIn]=useState(false)
    const [getData,setGetData]=useState([]);
   

    const value={
        currentUser,
        companySignUp,
        studentSignUp,
        login,
        logOut,
        userData,
        setUserData,
        getData,
        setGetData,
        setIsLoggedIn,

    }

    function studentSignUp(email,password){
        return auth.createUserWithEmailAndPassword(email,password)    
    }
   
    function companySignUp(email,password){
        return auth.createUserWithEmailAndPassword(email,password)
    }
    
    function login(email,password){
         return auth.signInWithEmailAndPassword(email,password)
    }

 // function logOut(currentUser){
        // if(currentUser){
        //     auth.signOut()
            // setIsLoggedIn(false)
            // setCurrentUser(null)
        }
        
    }
    useEffect(() => {
    auth.onAuthStateChanged(user =>{
           if(user){

            // setIsLoggedIn(true)
            setCurrentUser(user) 
           }
           else{
            //    setIsLoggedIn(false)
               setCurrentUser(null)
               
           }
        
       })
      
    }, [])

    return (
       <AuthContext.Provider value={value}>
       {children}
       </AuthContext.Provider>
    )
}


