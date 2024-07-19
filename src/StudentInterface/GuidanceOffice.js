// src/StudentInterface/GuidanceOffice.js
import React, { useState, useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './AdmissionOffice.css';
import ratebar from '../images/RateBar.png';
import { UserContext } from '../UserContext';

function GuidanceOffice() {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [suggestion, setSuggestion] = useState('');
    const [ratings, setRatings] = useState({
        rate1: 0,
        rate2: 0,
        rate3: 0,
        rate4: 0,
        rate5: 0,
    });

    const handleNext = () => {
        if (step < 4) {
            setStep(step + 1);
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        } else {
            navigate('/select-office');
        }
    };

    const handleReview = () => {
        setStep(5);
    };

    const handleAnother = () => {
        navigate('/guidance-office');
    };

    const handleProceed = async () => {
        if (step === 4) {
          try {
            const payload = {
              username: user,
              ratings,
              suggestion,
              office: 'Guidance Office' // Replace with actual office value
            };
      
            console.log('Sending request with:', payload); // Log payload
      
            const response = await fetch('http://localhost:5000/api/submit-feedback', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload),
            });
      
            if (response.ok) {
              setStep(5);
            } else {
              console.error('Failed to submit feedback:', response.status, response.statusText);
              const errorData = await response.json();
              console.error('Error data:', errorData);
              alert('Failed to submit feedback. Please try again.');
            }
          } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please check the console for details.');
          }
        } else if (step === 5) {
          navigate('/customer-options');
        }
      };

    const handleSuggestionChange = (e) => {
        setSuggestion(e.target.value);
    };

    const handleRatingChange = (e, rateName) => {
        setRatings({
            ...ratings,
            [rateName]: parseInt(e.target.value),
        });
    };

    return (
        <div>
            <Header />
            <div>
                <div className="instruction-container">
                    <h1>Guidance Office</h1>
                    {step === 1 && (
                        <ol>
                            <li>
                                <div className="instruction">
                                    <p>Ang mga serbisyong ibinibigay ng "guidance" ay malawak na naipapaabot sa lahat.</p>
                                    <img src={ratebar} alt="Ratebar" className="ratebar" />
                                    <div className="radio-buttons">
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <label key={num}>
                                                <input
                                                    type="radio"
                                                    name="rate1"
                                                    value={num}
                                                    checked={ratings.rate1 === num}
                                                    onChange={(e) => handleRatingChange(e, 'rate1')}
                                                />
                                                {num}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <br />
                                <div className="instruction">
                                    <p>Ang mga serbisyong ibinibigay ng "guidance" ay malawak na naipapaabot sa lahat.</p>
                                    <img src={ratebar} alt="Ratebar" className="ratebar" />
                                    <div className="radio-buttons">
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <label key={num}>
                                                <input
                                                    type="radio"
                                                    name="rate2"
                                                    value={num}
                                                    checked={ratings.rate2 === num}
                                                    onChange={(e) => handleRatingChange(e, 'rate2')}
                                                />
                                                {num}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        </ol>
                    )}
                    {step === 2 && (
                        <ol start={3}>
                            <li>
                                <br />
                                <div className="instruction">
                                    <p>Ang mga tala ng mga mag-aaral na nakalap mula sa mga panayam,   pangsikolohiyang pagsusulit ay maayos na nakahanay.</p>
                                    <img src={ratebar} alt="Ratebar" className="ratebar" />
                                    <div className="radio-buttons">
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <label key={num}>
                                                <input
                                                    type="radio"
                                                    name="rate3"
                                                    value={num}
                                                    checked={ratings.rate3 === num}
                                                    onChange={(e) => handleRatingChange(e, 'rate3')}
                                                />
                                                {num}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <br />
                                <div className="instruction">
                                    <p>May "counselors" na nakalaang magbigay ng payo,   gumabay sa mga mag-aaral batay sa mga resulta ng mga pagsusulit na kanilang   kinuha sa gayo'y makagawa sila ng mabisang desisyon para sa sarili.</p>
                                    <img src={ratebar} alt="Ratebar" className="ratebar" />
                                    <div className="radio-buttons">
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <label key={num}>
                                                <input
                                                    type="radio"
                                                    name="rate4"
                                                    value={num}
                                                    checked={ratings.rate4 === num}
                                                    onChange={(e) => handleRatingChange(e, 'rate4')}
                                                />
                                                {num}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        </ol>
                    )}
                    {step === 3 && (
                        <ol start={5}>
                            <li>
                                <br />
                                <div className="instruction">
                                    <p>May mga programang nakalaan para sa mga naghahanap ng trabaho,   mga nakapagtapos na o mga nahinto sa pag-aaral.</p>
                                    <img src={ratebar} alt="Ratebar" className="ratebar" />
                                    <div className="radio-buttons">
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <label key={num}>
                                                <input
                                                    type="radio"
                                                    name="rate5"
                                                    value={num}
                                                    checked={ratings.rate5 === num}
                                                    onChange={(e) => handleRatingChange(e, 'rate5')}
                                                />
                                                {num}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        </ol>
                    )}
                    {step === 4 && (
                        <div>
                            <h3>Complaints, Comments, Suggestions</h3>
                            <div className="suggestion-input">
                                <textarea
                                    value={suggestion}
                                    onChange={handleSuggestionChange}
                                    placeholder="Enter your suggestion here..."
                                />
                            </div>
                        </div>
                    )}
                    {step === 5 && (
                        <div className='fifth-container'>
                            <div className='another-container'>
                                <h2>Thank you for your Feedback!!!</h2>
                                <br />
                                <button className="link-button" onClick={handleAnother}>Fill in the form again</button>
                                <br />
                                <button className="link-button" onClick={handleReview}>Review Response</button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="navigation-buttons">
                {step !== 5 && (
                    <button onClick={handleBack}>
                        {step === 1 ? 'Back to Office Selection' : 'Back'}
                    </button>
                    )}
                    {step < 4 ? (
                    <button onClick={handleNext}>Next</button>
                    ) : (
                    <button onClick={handleProceed}>
                        {step === 4 ? 'Submit Feedback' : step === 5 ? 'Home' : 'Proceed'}
                    </button>
                    )}


                </div>
            </div>
            <Footer />
        </div>
    );
}

export default GuidanceOffice;
