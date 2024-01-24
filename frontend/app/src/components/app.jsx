import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard'; // Add this line

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/" component={Dashboard} /> {/* Add this line */}
      </Switch>
    </Router>
  );
}

export default App;
