import React, { useEffect ,useState } from 'react'
import {BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import {AuthProvider} from './context/AuthContext'

import Home from './Home'

function App() {

  return (
   
    <AuthProvider>
    <div className="App">
     <Router>
           <Switch>
  
             <Route exact path="/" component={Home} />
             <Route exact path="/signin" component={}/>
          
           </Switch>
     </Router>
     </div>
     </AuthProvider>
  
  )
}

export default App
