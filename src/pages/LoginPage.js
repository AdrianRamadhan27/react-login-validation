import React from 'react';
import LoginForm from '../components/LoginForm';

function LoginPage() {
  return (
    <div className="bg-gray-800">
        <h1 className="font-bold text-2xl m-auto py-5 text-white">Login</h1>
        <LoginForm />
    </div>
  );
}

export default LoginPage;
