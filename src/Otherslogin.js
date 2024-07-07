// src/Otherslogin.js
import React, { useState } from 'react';
import './Login.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function OthersLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [type, setType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && address === 'pass') {
      onLogin(username);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
    <Header />
    <div className='signup_title'>
      <h1>Personal Information</h1>
    </div>
    <div>
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label>NAME:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>ADDRESS:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className='form-group'>
        <label>TYPE OF CLIENT:</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="">Select Type</option>
              <option value="type1">Agency</option>
              <option value="type2">Participant</option>
              <option value="type3">Client(Research)</option>
              {/* Add more options as needed */}
            </select>
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

export default OthersLogin;
