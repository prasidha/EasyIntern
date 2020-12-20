import React, { useEffect } from 'react'
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import HomePage from './component/HomePage'
import SigninPage from './component/SigninPage'
import PostIntern from './component/PostIntern'
import StudentRegister from './component/StudentRegister'
import CompanyRegister from './component/CompanyRegister'
import {db} from './firebase'
import {AuthProvider} from './context/AuthContext'
import Test from './component/Test'
import CompanyDashboard from './component/CompanyDashboard'
import { useAuth } from "./context/AuthContext"


function App() {

//  const {currentUser} =useAuth()
 
//   useEffect(() => {
//     const userData=[]
//    db.collection("userdata").get().then((querySnapshot) => { 
//        querySnapshot.forEach((doc) => {
//          const data =doc.data()
//          userData.push(data)   
//    }); 
     
//    console.log("userdata",userData)    
//  });

// }, [])

//  console.log("id",currentUser.uid)
  return (
   
    <AuthProvider>
    <div className="App">
     <Router>
           <Switch>
                <Route 
                      exact path="/" 
                                   component={HomePage}
                                   
                  />

                <Route
                       exact path ="/signin" component={SigninPage}/>

                       
              <Route
                exact path ="/postintern" component={PostIntern}/>

                <Route
                exact path ="/signup" component={StudentRegister}/>

                <Route
                exact path ="/comp" component={CompanyRegister}/>

                <Route
                exact path ="/users" component={Test}/>

                <Route
                exact path ="/companydashboard" component={CompanyDashboard}/>
                     
           </Switch>
     </Router>
     </div>
     </AuthProvider>
  
  )
}

export default App
