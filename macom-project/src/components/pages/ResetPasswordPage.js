import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ResetPasswordForm from '../forms/ResetPasswordForm';

const ResetPasswordPage = () => (
  <div>
    <h3>Reset Password</h3>
    <h4>To reset your password enter your UserID, Old Password, New Password and Confirm Password.</h4>
    <div>
        <ResetPasswordForm />
    </div>
  </div>

);
export default ResetPasswordPage;
