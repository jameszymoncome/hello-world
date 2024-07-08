// src/agencyInstruc.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';


function AgencyInstruct(){
    return (
        <div>
          <Header />
          <div className='survey_title'>
        <h1>CLIENT SATISFACTION SURVEY (EXTENSION)</h1>
        <h2>Cooperating Agency</h2>
      </div>
      <div>
        <div classname="instruction-container">
            <div classname="instruction">
                <text>In line with our commitment to understand your requirements and seek to satisfy your needs consistently, we would like to know the level of your satisfaction on the services we have provided.  Your response will be a vital input in the review and continual improvement of our services and of our Quality Management System. We sincerely appreciate your cooperation. Thank You!
                 </text>
            </div>
        </div>
      </div>
    <Footer />
        </div>
      );
}

export default AgencyInstruct;
