import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import logo from './images/logo.png';
import customerLogo from './images/customer-logo.png';
import adminLogo from './images/admin-logo.png';
import './CustomerOptionPage.css'

function CustomerOptionPage() {
  const navigate = useNavigate();

  const handleCustomerClick = () => {
    navigate('/student-signup'); // Navigate to the appropriate route
  };

  const handleAdminClick = () => {
    navigate('/employee-signup'); // Navigate to the appropriate route
  };

  const handleOthersClick = () => {
    navigate('/others-login'); // Navigate to the appropriate route
  };

  return (
    <div className="CustomerOptionPage">
      <Header />
      <div className="content">
        <img src={logo} alt="Logo" className="logo" />
        <h1>CUSTOMERS</h1>
        <div className="button-container">
          <button onClick={handleCustomerClick}>
            <img src={customerLogo} alt="Customer Logo" />
            Student
          </button>
          <button onClick={handleAdminClick}>
            <img src={adminLogo} alt="Admin Logo" />
            Employee
          </button>
          <button onClick={handleOthersClick}>
            <img src={adminLogo} alt="Admin Logo" />
            Others
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CustomerOptionPage;
