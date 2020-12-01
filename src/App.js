import React from 'react'
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import HomePage from './component/HomePage'
import SigninPage from './component/SigninPage'
import PostIntern from './component/PostIntern'
import StudentRegister from './component/StudentRegister'


function App() {
  return (
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
                      
           </Switch>
     </Router>
      
    </div>
  )
}

export default App
