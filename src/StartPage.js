// src/StartPage.js
import React from 'react';
import './StartPage.css';
import logo from './/images/logo.png'

function StartPage({ onStart }) {
  return (
    <div className="start-page-container">
      <img src={logo} alt="Logo" className="logo" />
      <h1>TANGINAMO JYP</h1>
      <button onClick={onStart}>Start</button>
    </div>
  );
}

export default StartPage;
