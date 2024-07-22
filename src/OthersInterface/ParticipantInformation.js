// src/ParticipantInformation/ParticipantInformation.js
import React from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './ParticipantInformation.css';

function ParticipantInformation(){
   const navigate = useNavigate();

   const handleBack = () => {
    navigate('/agency-interface');
    }

   const handleNext = () => {
    navigate('/survey');
   }
    

    return (
        <div>
            <Header />
                <div className='signup_title'>
                    <h2>Participant Information</h2>
                </div>
                <div className = 'container'>
                    <label>Extension activity title</label>
                    <br></br>
                    <input
                        type="text"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                    />
                    <br></br>
                    <label>Venue</label>
                    <br></br>
                    <input
                        type="text"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                    />
                    <br></br>
                    <label>Date</label>
                    <br></br>
                    <input
                        type="text"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="button-container-st">
                    <button className="back_btn" onClick={handleBack}>Back</button>
                    <button className="next_btn" onClick={handleNext}>Next</button>
                </div>
            <Footer />
        </div>

    );
}

export default ParticipantInformation;