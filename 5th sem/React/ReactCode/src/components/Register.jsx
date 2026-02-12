import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!name || !email || !password) {
      setError('Please fill out all fields.');
      return;
    }
    // In a real app, registration logic would happen here.
    // For demo: simulate success and redirect to login
    alert('Registration successful! Please log in.');
    navigate('/login');
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
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '16px' }}>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
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
          Register
        </button>
      </form>
      {error && (
        <div style={{ color: 'red', marginTop: '18px' }}>
          {error}
        </div>
      )}
      <div style={{ marginTop: '24px', textAlign: 'center' }}>
        Already registered?{' '}
        <span
          style={{ color: '#1a0dab', cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => navigate('/login')}
        >
          Login here
        </span>
      </div>
    </div>
  );
};

export default Register;
