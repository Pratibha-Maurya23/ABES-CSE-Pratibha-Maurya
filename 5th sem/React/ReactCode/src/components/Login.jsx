import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Dummy check for demo purposes
    if (!email || !password) {
      setError('Please fill out both fields.');
      return;
    }

    // Dummy authentication. Replace this with real auth logic.
    if (email === "user@example.com" && password === "password123") {
      alert("Login successful!");
      // Redirect to home page
      navigate('/');
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '40px auto',
      padding: '24px',
      border: '1px solid #ccc',
      borderRadius: '8px',
      background: '#fafafa',
      boxShadow: '0 2px 8px #f0f0f0'
    }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '16px' }}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                display: 'block',
                width: '100%',
                padding: '8px',
                marginTop: '4px',
                boxSizing: 'border-box'
              }}
              required
            />
          </label>
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              style={{
                display: 'block',
                width: '100%',
                padding: '8px',
                marginTop: '4px',
                boxSizing: 'border-box'
              }}
              required
            />
          </label>
        </div>
        <button
          type="submit"
          style={{
            padding: '10px 20px',
            background: '#222',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Login
        </button>
      </form>
      {error && (
        <div style={{ color: 'red', marginTop: '18px' }}>
          {error}
        </div>
      )}
      <div style={{ marginTop: '24px', textAlign: 'center' }}>
        Not registered?{' '}
        <Link to="/register">Create an account</Link>
      </div>
    </div>
  );
};

export default Login;
