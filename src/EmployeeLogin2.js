// src/EmployeeLogin2.js
import React, { useState } from 'react';
import './Login.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function EmployeeLogin2({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login-employee', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      if (response.ok) {
        alert('Login successful');
        onLogin(username); // Call the onLogin prop to handle successful login
      } else {
        alert(data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
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
            <div className='button_holder'>
              <button type="submit">Login</button>
            </div>
          </form>
          <h4 className='or_lbl'><Link to="/customer-options">Back</Link></h4>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EmployeeLogin2;
