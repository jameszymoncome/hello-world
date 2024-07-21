// src/AgencyInformation/AgencyInformation.js
import React from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './AgencyInformation.css';

function AgencyInformation(){
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
                    <h2>Agency Information</h2>
                </div>
                <div className = 'container'>
                    <label>Agency/Organization</label>
                    <br></br>
                    <input
                        type="text"
                        // value={username}
                        // onChange={(e) => setUsername(e.target.value)}
                    />
                    <br></br>
                    <label>Tell/Cell No.</label>
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

export default AgencyInformation;