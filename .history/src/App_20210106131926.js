import React, { useEffect ,useState } from 'react'
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import SigninPage from './login/SigninPage'
import {db} from './firebase'
import {AuthProvider} from './context/AuthContext'
import { useAuth } from "./context/AuthContext"
import {auth} from './firebase'
import Navbar from './Navbar'
import Search from './MainBody/Search'
import StudentRegister from './Register/StudentRegister'
import CompanyRegister from './Register/CompanyRegister'
import PostIntern from './Posts.js/PostIntern'
import StudentDashboard from './StudentDashboard/StudentDashboard'
import CompanyDashboard from './CompanyDashboard/CompanyDashboard'
import FavouriteList from './StudentDashboard/FavouriteList'

function App() {

  return (
   
    <AuthProvider>
    <div className="App">
     <Router>
           <Switch>
           <Route exact path ="/"  render ={(props) =>(
             <Navbar {...props}
             <Route exact path ="/signin" component={SigninPage} />
             
            <Route exact path="/studentRegister" component={StudentRegister}/>
            <Route exact path="/companyRegister" component={CompanyRegister}/>
            <Route exact path="/postintern" component={PostIntern}/>
            <Route exact path="/studentdashboard" component={StudentDashboard}/>
            <Route exact path="/companydashboard" component={CompanyDashboard}/>
            <Route exact path="/favourite" component={FavouriteList} />
            
            />       
           </Switch>
     </Router>
     </div>
     </AuthProvider>
  
  )
}

export default App
