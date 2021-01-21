import React from 'react'
import { useAuth } from "../context/AuthContext"
import Notifications from './Notifications'


function HomePage() {
    const {logOut,currentUser,setIsLoggedIn,IsLoggedIn} = useAuth()
    
     
   
    return (
        <div>
            <h1>this is Company dashBoard</h1>
            <Notifications />
            <button onClick={handleLogOut}>logout</button>
        </div>
    )
}

export default HomePage
