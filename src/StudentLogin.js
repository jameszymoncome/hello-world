// src/StudentLogin.js
import React, { useState } from 'react';
import './Login.css';
import HeaderC from './HeaderC';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function StudentLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [department, setDepartment] = useState('');
  const [password, setPassword] = useState('');
  const [conpassword, setConspassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== conpassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/register-student', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, department, password })
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        // Optionally call onLogin or navigate to another page
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred');
    }
  };

  return (
    <div>
      <HeaderC />
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
            <div className='button_holder'>
              <button type="submit">Sign-up</button>
            </div>
          </form>
          <h5 className='or_lbl'>OR</h5>
          <h4 className='or_lbl'>Already a customer? <Link to="/student-login">Login</Link></h4>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StudentLogin;
