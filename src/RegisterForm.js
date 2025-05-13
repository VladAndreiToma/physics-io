import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserLoginContext from './AppContexts';

const RegisterForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const newUser = {
      username,
      email,
      password
    };

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      });

      const result = await response.json();

      if (response.ok) {
        navigate('/login'); // Redirect to login page on successful registration
      } else {
        setError(result.error || 'Registration failed');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="label-register">Username</label>
            <input
              type="text"
              id="username"
              className="input-username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="label-register">Email</label>
            <input
              type="text"
              id="email"
              className="input-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label-register">Password</label>
            <input
              type="password"
              id="password"
              className="input-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="button-register">Register</button>
          {error && <div className="error">{error}</div>}
        </form>
        <div className="register-link">
          <p>Already have an account? <Link to="/login" style={{ fontWeight: 'bold' , color: 'whitesmoke' , textDecoration: 'none' }}>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
