import React, { useEffect ,useState } from 'react'
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import SigninPage from './login/SigninPage'
import {AuthProvider} from './context/AuthContext'
import CompanyRegister from './'
import Home from './Home'

function App() {

  return (
   
    <AuthProvider>
    <div className="App">
     <Router>
           <Switch>
  
             <Route exact path="/" component={Home} />
             <Route exact path="/signin" component={SigninPage}/>
             <Route exact path="/company" component={CompanyRegister}/>
          
           </Switch>
     </Router>
     </div>
     </AuthProvider>
  
  )
}

export default App
