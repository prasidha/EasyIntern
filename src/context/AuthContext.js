
import React, { createContext, useState, useEffect, useContext } from 'react'
import { auth } from '../firebase'

const AuthContext = createContext()

export function useAuth (){
    return  useContext(AuthContext)
}

export function AuthProvider({children}) {
    const[currentUser,setCurrentUser]=useState('')
    const [userData,setUserData] = useState()

    const value={
        currentUser,
        companySignUp,
        studentSignUp,
        login,
        logOut,
        userData,
        setUserData
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

    function logOut(){
        auth.signOut()
    }
    useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged(user =>{
           setCurrentUser(user)
           
       })
       return unsubscribe
    }, [])


    



    return (
       <AuthContext.Provider value={value}>
       {children}
       </AuthContext.Provider>
    )
}


