import React, { useEffect ,useState } from 'react'
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import SigninPage from './login/SigninPage'
import {db} from './firebase'
import {AuthProvider} from './context/AuthContext'
import { useAuth } from "./context/AuthContext"
import {auth} from './firebase'
import StudentRegister from './Register/StudentRegister'
import CompanyRegister from './Register/CompanyRegister'
import PostIntern from './Posts.js/PostIntern'
import StudentDashboard from './StudentDashboard/StudentDashboard'
import CompanyDashboard from './CompanyDashboard/CompanyDashboard'
import FavouriteList from './StudentDashboard/FavouriteList'
import Home from './Home'

function App() {

  return (
   
    <AuthProvider>
    <div className="App">
     <Router>
           <Switch>
  
             <Route exact path="/" component={Home} />
             
          
           </Switch>
     </Router>
     </div>
     </AuthProvider>
  
  )
}

export default App
