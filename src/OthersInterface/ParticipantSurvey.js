// src/ParticipantSurvey.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import ratebar from '../images/RateBar.png';
import './ParticipantSurvey.css';

function ParticipantSurvey() {
    const navigate = useNavigate();
    const [currentSet, setCurrentSet] = useState(0);
    const [ratings, setRatings] = useState({});

    const handleBack = () => {
        if (currentSet === 0) {
            navigate('/agency-information');
        } else {
            setCurrentSet(currentSet - 1);
        }
    };

    const handleNext = () => {
      if (currentSet < 1) {
          setCurrentSet(currentSet + 1);
      } else {
          console.log('Navigating to ClientSatisfactionSurvey with ratings:', ratings); // Debug statement
          navigate('/client-satisfaction-survey', { state: { ratings } });
      }
  };
  

    const handleRadioChange = (e) => {
        const { name, value } = e.target;
        setRatings((prevRatings) => ({
            ...prevRatings,
            [name]: value,
        }));
    };

    const performanceCriteria = [
        "1. Objectives of activities",
        "2. Usefulness/Relevance of the activity to the needs of the beneficiaries/community.",
        "3. Contribution of the Activity to the Community development",
        "4. Capability of the extension implementers to operationalize the activity.",
        "5. Timeliness of delivery of service.",
        "6. Efficient utilization of funds (if applicable)",
        "7. Overall quality of service provided"
    ];

    // Determine the criteria to display based on the currentSet
    const criteriaToDisplay = currentSet === 0 ? performanceCriteria.slice(0, 4) : performanceCriteria.slice(4);

    return (
        <div>
            <Header />
            <div className="survey-container">
                <h2 className="title">CLIENT SATISFACTION SURVEY (EXTENSION) <br />Cooperating Agency</h2>
                <div className="main-container">
                    <label>Performance Criteria</label>
                    <label>Satisfaction Level</label>
                </div>
                {criteriaToDisplay.map((criteria, index) => {
                    const criteriaIndex = index + currentSet * 4;
                    return (
                        <div key={criteriaIndex} className="first-container">
                            <div>
                                <p>{criteria}</p>
                            </div>
                            <div>
                                <img src={ratebar} alt="Ratebar" className="ratebar_survey" />
                                <div className="radio-buttons">
                                    {[1, 2, 3, 4, 5].map((num) => (
                                        <label key={num}>
                                            <input
                                                type="radio"
                                                name={`rate${criteriaIndex + 1}`}
                                                value={num}
                                                checked={ratings[`rate${criteriaIndex + 1}`] === num.toString()}
                                                onChange={handleRadioChange}
                                            />
                                            {num}
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
                <div className="button-container-st">
                    <button className="back_btn" onClick={handleBack}>Back</button>
                    <button className="next_btn" onClick={handleNext}>Next</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ParticipantSurvey;
