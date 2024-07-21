import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './ClientSatisfactionSurvey.css';

function ClientSatisfactionSurvey() {
  const navigate = useNavigate();
  const [overlayVisible, setOverlayVisible] = useState(false);

  const handleBack = () => {
    navigate('/survey');
  };

  const handleNext = () => {
    // Show the overlay
    setOverlayVisible(true);
    
  };

  return (
    <div>
      <Header />
      <div>
        <h2 className="title">CLIENT SATISFACTION SURVEY (EXTENSION) <br />Cooperating Agency</h2>
        <p className='sub-text'>Please Indicate below your other concern or suggestion on how we further improve our services.</p>
        <div className='feedback-container'>
          <p>We are impressed with the quality of graduates from CNSC. Their strong technical skills and clear understanding of industry trends make them highly sought-after by our employer partners. However, offering career readiness workshops specifically tailored to our clients' needs would further prepare them for the unique challenges of our industry.</p>
        </div>
        <div className="button-container-st">
          <button className="back_btn" onClick={handleBack}>Back</button>
          <button className="next_btn" onClick={handleNext}>Finish</button>
        </div>
      </div>
      <Footer />
      {overlayVisible && (
        <div className='overlay'>
          <div className="overlay-content">
            <img src='/logo.png' alt="Overlay" className="overlay-image" />
            <p>THANK YOU FOR YOUR FEEDBACK.</p>
            <div className="button-overlay">
              <button className="overlay-button" onClick={() => navigate('/survey')}>EDIT</button>
              <button style={{ backgroundColor: '#a80000', color: 'white' }} className="overlay-button" onClick={() => navigate('/customer-options')}>SUBMIT</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClientSatisfactionSurvey;
