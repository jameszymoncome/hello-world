// src/Otherslogin.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { fetchAddresses } from './utils/fetchAddresses';

function OthersLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [type, setType] = useState('');

  const navigate = useNavigate(); // Correct import and usage

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user') {
      onLogin(username);
      navigate('/agency-instruct'); // Navigate after successful login
    } else {
      alert('Invalid credentials');
    }
  };

  const handleAddressChange = async (e) => {
    setAddress(e.target.value);
    if (e.target.value.length > 2) {
      const results = await fetchAddresses(e.target.value);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setAddress(suggestion.display_name);
    setSuggestions([]);
  };

  const handleLoginClick = () => {
    navigate('/agency-instruct'); // Navigate to the appropriate route
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
                onChange={handleAddressChange}
                className="location-search-input"
              />
              {suggestions.length > 0 && (
                <div className="autocomplete-dropdown-container">
                  {suggestions.map((suggestion) => (
                    <div
                      key={suggestion.place_id}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="suggestion-item"
                    >
                      {suggestion.display_name}
                    </div>
                  ))}
                </div>
              )}
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
                <option value="type3">Client (Research)</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className='button_holder'>
              <button onClick={handleLoginClick}>Login</button>
            </div>
          </form>
          <h4 className='or_lbl'><Link to="/customer-options">Back</Link></h4>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OthersLogin;
