// src/StudentInterface/SelectOffice.js
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './SelectOffice.css'

function SelectOffice() {
    const navigate = useNavigate();

    const [selectedOffice, setSelectedOffice] = useState('');

    const handleSelectionChange = (e) => {
        setSelectedOffice(e.target.value);
    };

    const handleSubmit = () => {
        if (selectedOffice) {
            alert(`Selected Office: ${selectedOffice}`);
            if (selectedOffice === "Admission Office"){
                navigate('/admission-office');
            }
            else if (selectedOffice === "Guidance Office"){
                navigate('/guidance-office')
            }
        } else {
            alert('Please select an office');
        }
    };

    return (
        <div>
          <Header />
          <div>
            <div className="instruction-container">
                <h1>Select Office</h1>
                <div className="instruction">
                    {[
                        "Admission Office",
                        "Registar Office",
                        "Guidance Office",
                        "Health Service Office",
                        "Library",
                        "Canteen (Food Service)",
                        "Student Publication",
                        "Scholarship Programs",
                        "Student Organization",
                        "Sport and Cultural Services"
                    ].map(office => (
                        <div key={office} className="office-option">
                            <label>
                                <input
                                    type="radio"
                                    name="office"
                                    value={office}
                                    checked={selectedOffice === office}
                                    onChange={handleSelectionChange}
                                />
                                {office}
                            </label>
                        </div>
                    ))}
                </div>
                <br />
                <div className='button-container-st'>
                  <button className='next_btn' onClick={handleSubmit}>Next</button>
                </div>
            </div>
          </div>
          <Footer />
        </div>
    );
}

export default SelectOffice;
