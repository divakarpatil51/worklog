import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import LoginComponent from './components/Login';
import ResetPassword from './components/ResetPassword';
import TopBar from './components/TopBar';
import CreateAccount from './components/CreateAccount';
import './index.css';

ReactDOM.render(
  <div>
    <Router>
      <TopBar />
      <Switch>
        <Route path="/login" component={LoginComponent}/>
        <Route path="/reset-password" component={ResetPassword}/>
        <Route path="/create-account" component={CreateAccount}/>
        <Route path={["/dashboard", "/"]} component={Dashboard}/>
      </Switch>
    </Router>
  </div>,
  document.getElementById('root')
);

