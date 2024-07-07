// src/Login.js
import React, { useState } from 'react';
import './Login.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function EmployeeLogin2({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'pass') {
      onLogin(username);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
    <Header />
    <div className='signup_title'>
      <h1>Login</h1>
    </div>
    <div>
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Employee ID:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
    </div>
    <div className='button_holder'><button type="submit">Login</button></div>
    <h4 className='or_lbl'><Link to="/customer-options">Back</Link></h4>
    </div>
    <Footer />
  </div>
  );
}

export default EmployeeLogin2;
