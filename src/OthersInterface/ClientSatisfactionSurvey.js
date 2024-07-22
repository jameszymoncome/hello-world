import React, { useState, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './ClientSatisfactionSurvey.css';
import { UserContext } from '../UserContext';

function ClientSatisfactionSurvey() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { ratings } = state;
  const { user } = useContext(UserContext);
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [feedback, setFeedback] = useState('');

  console.log('Received ratings:', ratings); // Debug statement

  const handleBack = () => {
    navigate('/survey');
  };

  const handleNext = () => {
    setOverlayVisible(true);
  };

  const handleSubmit = async () => {
    const feedbackData = {
      ratings,
      suggestion: feedback,
      office: 'Agency',
      username: user,
    };

    try {
      const response = await fetch('http://localhost:5000/api/submit-feedback-others', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Feedback submission response:', data); // Debug statement
        navigate('/customer-options');
      } else {
        console.error('Feedback submission error:', data.error); // Debug statement
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
    }
  };

  return (
    <div>
      <Header />
      <div>
        <h2 className="title">CLIENT SATISFACTION SURVEY (EXTENSION) <br />Cooperating Agency</h2>
        <p className='sub-text'>Please Indicate below your other concern or suggestion on how we further improve our services.</p>
        <div className='feedback-container'>
          <textarea
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Enter your feedback here..."
            rows="5"
            style={{ width: '100%' }}
          />
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
              <button style={{ backgroundColor: '#a80000', color: 'white' }} className="overlay-button" onClick={handleSubmit}>SUBMIT</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ClientSatisfactionSurvey;

