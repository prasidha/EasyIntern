import React from 'react'
import {useAuth} from "../context/AuthContext"
import {useHistory} from 'react-router-dom'

function CompanyDashboard() {
    const{logOut} = useAuth()
    const history =useHistory()

    const onHandleLogoutt =() => {

        logOut()
        history.push("/")

    }


    return (
        <div>
            <h1>hi this is company dashboard.....</h1>
            <button style={{width:"100px",height:"100px"}} onClick={onHandleLogoutt}>logout</button>
        </div>
    )
}

export default CompanyDashboard
