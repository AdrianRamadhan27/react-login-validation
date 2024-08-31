import React from 'react';
import LoginForm from '../components/LoginForm';

function LoginPage() {
  return (
    <div className="min-h-screen pt-32">
        <h1 className="font-bold text-2xl m-auto py-5 text-white">Login</h1>
        <LoginForm />
    </div>
  );
}

export default LoginPage;
