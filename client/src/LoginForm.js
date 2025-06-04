import React, { useContext, useState , useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UserLoginContext from './AppContexts';
import { Link } from 'react-router-dom';

const LoginForm = () => {

  //destructuring the context
  const{ isUserLoggedIn,login } = useContext( UserLoginContext );

  //create the naviagtion object
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // redirecting if user is logged in
  useEffect(() => {
    if (isUserLoggedIn) {
      navigate("/user");  // Already logged in? Go to dashboard.
    }
  }, [isUserLoggedIn, navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();    
    if (!email || !password) {
      setError('Both fields are required.');
      return;
    }
  
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      const data = await response.json();
      console.log("LOGIN RESPONSE:", data);
  
      if (!response.ok) {
        // status !== 200
        setError(data.error || data.message || 'Login failed');
        return;
      }
  
      // SUCCESS
      login(data.username, data.id, data.createdAt );
      setEmail('');
      setPassword('');
      navigate('/user');
  
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };
  
  

  return (
    <div className='login-page'>

      <div className='login-left-side'> 
      </div>
      <div className='login-right-side'>
          <div className="login-container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className='label-login' htmlFor="email">E-mail</label>
                <input type="text" className='input-email' name="email" value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label className='label-login' htmlFor="password">Password</label>
                <input type="password" className='input-password' name="password" value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="error">{error}</p>}
              <button className='button-login' type="submit">Login</button>
              <div className="register-link">
                <p>Don't have an account? <Link to="/registration" style={{ color: 'whitesmoke' , fontWeight: 'bold' }}>Register here</Link></p>
              </div>
            </form>
          </div>
      </div>

    </div>
  );
};

export default LoginForm;
