import React from 'react';
import './Header.css'; // Make sure this file exists and is styled appropriately
import logo from './images/logo.png';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to='/customer-options'><img src={logo} alt="Logo" className="logo_cnsc" /></Link>
      </div>
      <h1>Camarines Norte State College Customer Feedback System</h1>
    </header>
  );
}

export default Header;
