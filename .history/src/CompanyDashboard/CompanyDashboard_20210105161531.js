import React from 'react'
import { useAuth } from "../context/AuthContext"
import {useHistory} from 'react-router-dom'


function HomePage() {
    const {logOut,currentUser,setIsLoggedIn,IsLoggedIn} = useAuth()
    const history =useHistory()
     
    const handleLogOut = () => {
        logOut(currentUser);
        console.log(currentUser)
        history.push('/')
         setIsLoggedIn(false)
         
         console.log(IsLoggedIn)
         
    }
    return (
        <div>
            <h1>this is Company dashBoard</h1>
            <Notifications />
            <button onClick={handleLogOut}>logout</button>
        </div>
    )
}

export default HomePage
