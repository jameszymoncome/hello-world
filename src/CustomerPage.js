// src/CustomerPage.js
import React from 'react';
import { Link } from 'react-router-dom';

function CustomerPage() {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>Are you a Customer or an Admin?</p>
      <div>
        <Link to="/login">
          <button>Customer</button>
        </Link>
        <Link to="/admin">
          <button>Admin</button>
        </Link>
      </div>
    </div>
  );
}

export default CustomerPage;
