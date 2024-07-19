// src/StudentLogin2.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import HeaderC from './HeaderC';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { UserContext } from './UserContext';

function StudentLogin2() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext); // Use context to set user

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();
      if (response.ok) {
        alert('Login successful');
        setUser(username); // Set the username in context
        navigate('/student-instruct');
      } else {
        alert(data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <HeaderC />
      <div className='signup_title'>
        <h1>Login</h1>
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

export default StudentLogin2;
