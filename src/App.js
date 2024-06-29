// src/App.js
import React, { useState } from 'react';
import Login from './Login';
import StartPage from './StartPage';
import logo from './/images/logo.png'
import './App.css';
import customerLogo from './/images/customer-logo.png'; // Adjust path as needed
import adminLogo from './/images/admin-logo.png'; // Adjust path as needed

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [showStartPage, setShowStartPage] = useState(true);
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  const handleLogin = (username) => {
    setIsAuthenticated(true);
    setUser(username);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const handleStart = () => {
    setShowStartPage(false);
    setShowLoginOptions(true);
  };

  const handleCustomerClick = () => {
    // Handle customer button click
    // For simplicity, let's navigate to the login page directly
    setShowLoginOptions(false);
  };

  const handleAdminClick = () => {
    // Handle admin button click
    // Add logic for admin-related actions
  };

  return (
    <div className="App">
      {showStartPage ? (
        <StartPage onStart={handleStart} />
      ) : isAuthenticated ? (
        <div>
          <h1>Welcome, {user}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : showLoginOptions ? (
        <div className="login-options-container">
          <img src={logo} alt="Logo" className="logo" />
          <h2>Camarines Norte State College
          Customer Feedback System</h2>
          <div className="button-container">
            <button onClick={handleCustomerClick}>
              <img src={customerLogo} alt="Customer Logo" />
              Customer
            </button>
            <button onClick={handleAdminClick}>
              <img src={adminLogo} alt="Admin Logo" />
              Admin
            </button>
          </div>
        </div>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
