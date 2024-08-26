// src/components/Auth.js
import React, { useState } from 'react';
import ForgotPassword from './Forgot';
import SignIn from './SingIn';
import SignUp from './SingUp';



const Auth = () => {
  const [currentForm, setCurrentForm] = useState('signIn');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="auth-container">
      {currentForm === 'signUp' && <SignUp toggleForm={() => toggleForm('signIn')} />}
      {currentForm === 'signIn' && (
        <SignIn toggleForm={() => toggleForm('signUp')} onForgotPassword={() => toggleForm('forgotPassword')} />
      )}
      {currentForm === 'forgotPassword' && (
        <ForgotPassword toggleForm={() => toggleForm('signIn')} />
      )}
    </div>
  );
};

export default Auth;
