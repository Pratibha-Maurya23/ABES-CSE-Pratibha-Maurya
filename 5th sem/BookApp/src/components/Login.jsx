import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill out both fields.');
      return;
    }

    if (email === "user@example.com" && password === "password123") {
      alert("Login successful!");
      navigate('/');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-16 p-8 border border-gray-200 rounded-lg bg-white shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoFocus
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500 pr-10"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-2 px-1 text-sm text-gray-500"
              tabIndex={-1}
              onClick={() => setShowPassword((v) => !v)}
            >
              {showPassword ? '🙈' : '👁️'}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded font-semibold transition-colors duration-150"
        >
          Login
        </button>
      </form>
      {error && (
        <div className="mt-4 text-center text-red-600 text-sm font-medium">
          {error}
        </div>
      )}
      <div className="mt-8 text-center text-gray-600">
        Not registered?{" "}
        <Link className="text-indigo-600 hover:text-indigo-800 underline" to="/register">
          Create an account
        </Link>
      </div>
    </div>
  );
};

export default Login;
