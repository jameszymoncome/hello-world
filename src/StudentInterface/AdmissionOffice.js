// src/StudentInterface/AdmissionOffice.js
import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './AdmissionOffice.css';
import ratebar from '../images/RateBar.png';

function AdmissionOffice() {
    const [step, setStep] = useState(1);

    const handleNext = () => {
        if (step < 3) {
            setStep(step + 1);
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
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
                </div>
            </div>
            <div className="button-container-st">
                {step > 1 && <button className="back_btn" onClick={handleBack}>Back</button>}
                {step < 3 && <button className="next_btn" onClick={handleNext}>Next</button>}
                {step === 3 && <button className="proceed_btn">Proceed</button>}
            </div>
            <Footer />
        </div>
    );
}

export default AdmissionOffice;
