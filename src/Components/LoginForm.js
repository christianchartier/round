import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 text-left bg-white shadow-lg rounded-md" style={{ marginTop: '-100px' }}>
        <h2 className="text-2xl font-bold">Login to your ward</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="block mt-2" htmlFor="email">Email</label>
            <input type="email" placeholder="Email" 
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md"
              id="email" name="email" required />
          </div>
          <div className="mt-4">
            <label className="block" htmlFor="password">Password</label>
            <input type="password" placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md"
              id="password" name="password" required />
          </div>
          <div className="flex items-baseline justify-between">
            <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-md hover:bg-blue-900">Login</button>
            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
          </div>
        </form>
      </div>
      <a href="#" style={{ color: '#1c3344' }} className="text-sm hover:underline mt-4">Sign up</a>
      <img src="no_background_logo.png" alt="Company Logo" className="absolute w-48 bottom-10 inset-x-0 mx-auto" />
    </div>
  );
};

export default LoginForm;