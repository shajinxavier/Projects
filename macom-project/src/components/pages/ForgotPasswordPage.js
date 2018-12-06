import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ForgotPasswordForm from '../forms/ForgotPasswordForm';

const ForgotPasswordPage = () => (
  <div>
    <h3>Can't Sign In ? Forgot your password ?</h3>
    <h4>Enter your email address below we'll send you a new password which you can change by using the reset password link.</h4>
    <div>
        <ForgotPasswordForm />
    </div>
  </div>

);
export default ForgotPasswordPage;
