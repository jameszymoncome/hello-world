// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Login';
import StartPage from './StartPage';
import CustomerOptionPage from './CustomerOptionPage'; // Import the new page
import logo from './images/logo.png';
import './App.css';
import customerLogo from './images/customer-logo.png'; // Adjust path as needed
import adminLogo from './images/admin-logo.png'; // Adjust path as needed
import StudentLogin from './StudentLogin';
import StudentLogin2 from './StudentLogin2';
import EmployeeLogin from './EmployeeLogin';
import EmployeeLogin2 from './EmployeeLogin2';
import OthersLogin from './Otherslogin';
import AgencyInstuct from './AgencyInstruct';
import StudentInstruct from './StudentInterface/StudentInstruct';
import SelectOffice from './StudentInterface/SelectOffice';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [showStartPage, setShowStartPage] = useState(true);
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  const navigate = useNavigate(); // Define the navigate hook here

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
    navigate('/customer-options');
  };

  const handleAdminClick = () => {
    navigate('/admin-options'); // Assuming you have an admin options page
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
          <h2>Camarines Norte State College Customer Feedback System</h2>
          <br></br>
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

function AppWithRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/customer-options" element={<CustomerOptionPage />} />
        <Route path="/student-signup" element={<StudentLogin />} />
        <Route path="/employee-signup" element={<EmployeeLogin />} />
        <Route path="/others-signup" element={<CustomerOptionPage />} />
        <Route path="/student-login" element={<StudentLogin2 />} />
        <Route path="/employee-login" element={<EmployeeLogin2 />} />
        <Route path="/others-login" element={<OthersLogin />} />
        <Route path="/agency-instruct" element={<AgencyInstuct />} />
        <Route path="/student-instruct" element={<StudentInstruct />} />
        <Route path="/select-office" element={<SelectOffice />} />
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  );
}

export default AppWithRouter;
