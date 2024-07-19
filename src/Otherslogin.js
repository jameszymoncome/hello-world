import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import HeaderC from './HeaderC';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import { fetchAddresses } from './utils/fetchAddresses';

function OthersLogin({ onLogin }) {
  const [username, setUsername] = useState('');
  const [address, setAddress] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [type, setType] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/login-others', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, address, type })
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        onLogin(username); // Call the onLogin prop to handle successful login
        navigate('/agency-instruct'); // Navigate after successful login
      } else {
        alert(data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
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

  return (
    <div>
      <HeaderC />
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
                <option value="Agency">Agency</option>
                <option value="Participant">Participant</option>
                <option value="Client">Client (Research)</option>
                {/* Add more options as needed */}
              </select>
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

export default OthersLogin;
