import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!name || !email || !password) {
      setError('Please fill out all fields.');
      return;
    }
    alert('Registration successful! Please log in.');
    navigate('/login');
  };

  return (
    <div className="max-w-sm mx-auto mt-16 p-8 border border-gray-200 rounded-lg bg-white shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            value={name}
            onChange={e => setName(e.target.value)}
            autoFocus
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
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
          Register
        </button>
      </form>
      {error && (
        <div className="mt-4 text-center text-red-600 text-sm font-medium">
          {error}
        </div>
      )}
      <div className="mt-8 text-center text-gray-600">
        Already registered?{" "}
        <span
          className="text-indigo-600 hover:text-indigo-800 underline cursor-pointer"
          onClick={() => navigate('/login')}
        >
          Login here
        </span>
      </div>
    </div>
  );
};

export default Register;
