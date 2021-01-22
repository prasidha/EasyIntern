import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SigninPage from './login/SigninPage'
import { AuthProvider } from './context/AuthContext'
import CompanyRegister from './Register/CompanyRegister'
import StudentRegister from './Register/StudentRegister'
import Home from './Home'
import Notifications from './CompanyDashboard/Notifications'
import StudentDashboard from './StudentDashboard/StudentDashboard'

function App() {
  return (
    <AuthProvider>
<<<<<<< HEAD
    <div className="App">
     <Router>
           <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signin" component={SigninPage}/>
              <Route exact path="/company" component={CompanyRegister}/>
              <Route exact path="/student" component={StudentRegister}/>
              <Route exact path="/companydashboard" component={Notifications} />
              <Route exact path ="/studentDashboard" component={StudentDashboard}/>
           </Switch>
     </Router>
     </div>
     </AuthProvider>
  
  )
}

export default App;

=======
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signin" component={SigninPage} />
            <Route exact path="/company" component={CompanyRegister} />
            <Route exact path="/student" component={StudentRegister} />
            <Route exact path="/companydashboard" component={Notifications} />
            <Route
              exact
              path="/studentDashboard"
              component={StudentDashboard}
            />
          </Switch>
        </Router>
      </div>
    </AuthProvider>
  );
}

export default App;
>>>>>>> 361b71351ef80fe1fdb9f6f15ce2f0b51195d1e0
