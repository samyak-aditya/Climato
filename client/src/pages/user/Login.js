import logo from '../../assets/logo.png';
import React, { useState } from 'react';
import axios from 'axios';
import './login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/login', {
        email: email,
        password: password
      });
      console.log('Login successful:', response.data);
      // Add your logic after successful login, such as redirecting to another page
    } catch (error) {
      console.error('Error logging in:', error);
      // Handle login error, such as displaying an error message to the user
    }
  };

  return (
    <div className="container" style={{ position: 'relative' }}>
      <img
        className="bgimage"
        src={logo}
        style={{ position: 'absolute', zIndex: '0', width: '100%', height: '81.5vh',scale:"1.45" }}
        alt="Background"
      />
      <div className="left-column"></div>
      <div className="right-column" style={{ opacity: '0.8' , scale:"1.2" }}>
        <div className="form-container">
          <h2 className="title">Sign in</h2>
          <form onSubmit={handleSubmit} className="form">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
              required
            />
            <div className="checkbox-container">
              <input type="checkbox" id="remember" className="checkbox" />
              <label htmlFor="remember" className="label">
                Remember me
              </label>
            </div>
            
            <button type="submit" className="but">
            <div className="button">
              Sign In
              </div>
            </button>
            
            <div className="link-container">
              <a href="#" className="link">
                Forgot password?
              </a>
              <a href="#" className="link">
                Don't have an account? Sign Up
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
