import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './AdmissionOffice.css';
import ratebar from '../images/RateBar.png';

function AdmissionOffice() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [suggestion, setSuggestion] = useState('');

    const handleNext = () => {
        if (step < 3) {
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

    const handleProceed = () => {
        if (step === 3) {
            setStep(4);
        } else if (step === 4) {
            setStep(5);
        }
    };

    const handleSuggestionChange = (e) => {
        setSuggestion(e.target.value);
    };

    return (
        <div>
            <Header />
            <div>
                <div className="instruction-container">
                    <h1>Admission Office</h1>
                    {step === 1 && (
                        <ol>
                            <li>
                                <div className="instruction">
                                    <p>Ang mga patakaran at iba't ibang kursong mapag-aaralan sa Kolehiyo ay malawak na naipababatid sa pamamagitan ng "brochures", "pamphlets" at mga lathala at anunsiyong nakapaskil sa "bulletin board".</p>
                                    <img src={ratebar} alt="Ratebar" className="ratebar" />
                                    <div className="radio-buttons">
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <label key={num}>
                                                <input type="radio" name="rate1" value={num} />
                                                {num}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <br />
                                <div className="instruction">
                                    <p>Ang mga panuntunan, patakaran, tuntunin at gabay patungkol sa "admission" ay malinaw at ipinatutupad nang may sistema.</p>
                                    <img src={ratebar} alt="Ratebar" className="ratebar" />
                                    <div className="radio-buttons">
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <label key={num}>
                                                <input type="radio" name="rate2" value={num} />
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
                                    <p>Ang mga kawani ng tanggapan ay madaling lapitan, nagpapaliwanag nang maayos, matulungin at may kaaya-ayang pag-uugali.</p>
                                    <img src={ratebar} alt="Ratebar" className="ratebar" />
                                    <div className="radio-buttons">
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <label key={num}>
                                                <input type="radio" name="rate3" value={num} />
                                                {num}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </li>
                            <li>
                                <br />
                                <div className="instruction">
                                    <p>Ang pagpapaskil ng mga nakapasa sa CNSC AT (CNSC Admission Test) ay naaayon sa talatakdaan.</p>
                                    <img src={ratebar} alt="Ratebar" className="ratebar" />
                                    <div className="radio-buttons">
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <label key={num}>
                                                <input type="radio" name="rate4" value={num} />
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
                                    <p>Ang resulta ng CNSC AT ay maaaring malaman kung kinakailangan.</p>
                                    <img src={ratebar} alt="Ratebar" className="ratebar" />
                                    <div className="radio-buttons">
                                        {[1, 2, 3, 4, 5].map((num) => (
                                            <label key={num}>
                                                <input type="radio" name="rate5" value={num} />
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
                                <button className="link-button" onClick={() => setStep(1)}>Review Response</button>
                                <br />
                                <button className="link-button" onClick={() => setStep(1)}>Create another Feedback</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="button-container-st">
                <button className="back_btn" onClick={handleBack}>Back</button>
                {step < 3 && <button className="next_btn" onClick={handleNext}>Next</button>}
                {step > 2 && step < 5 && <button className="proceed_btn" onClick={handleProceed}>Proceed</button>}
            </div>
            <Footer />
        </div>
    );
}

export default AdmissionOffice;
