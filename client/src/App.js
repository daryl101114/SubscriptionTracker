import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Login from './components/Login'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GuardedRoute from './guardedRoute/guarded.route'

function App() {
  const [isLoggedIn, setIsLoggedIn,] = useState(false);

  

  return (
    <div className="App">
      <Header />
      <Router>
        <Switch>
        <Route path="/login" component={Login}/>
        {/* <GuardedRoute path='/' component={Home} {...{isLoggedIn,setIsLoggedIn}} /> */}
          
          
          {/* <Route path="/home" component={Home}/> */}
          
      </Switch>
      </Router>
    </div>
  );
}

export default App;
