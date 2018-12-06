import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import CustomerHome from './components/pages/CustomerHome';
import ForgotPasswordPage from './components/pages/ForgotPasswordPage';
import ResetPasswordPage from './components/pages/ResetPasswordPage';

const App = () => (
  <div className="ui container">
    <Route path= "/" exact component={HomePage} />
    <Route path= "/login" exact component={LoginPage} />
    <Route path= "/CustomerHome" exact component={CustomerHome} />
	  <Route path= "/forgotpasswordform" exact component={ForgotPasswordPage} />
    <Route path= "/resetpasswordform" exact component={ResetPasswordPage} />
  </div>);





export default App;
