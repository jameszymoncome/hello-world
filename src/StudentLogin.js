// src/Login.js
import React, { useState } from 'react';
import './Login.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [department, setDepartment] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword, setConspassword] = useState('');

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
      <h1>Sign-Up</h1>
    </div>
    <div>
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>Student ID:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Department:</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
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
        <div className='form-group'>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={conpassword}
            onChange={(e) => setConspassword(e.target.value)}
          />
        </div>
      </form>
    </div>
    <div className='button_holder'><button type="submit">Sign-up</button></div>
    <h5 className='or_lbl'>OR</h5>
    <h4 className='or_lbl'>Already a cutomer? <Link to="/student-login">Login</Link></h4>
    </div>
    <Footer />
  </div>
  );
}

export default Login;
