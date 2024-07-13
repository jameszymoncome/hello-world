// src/StudentInterface/GuidanceOffice.js
import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './AdmissionOffice.css';
import ratebar from '../images/RateBar.png';

function GuidanceOffice() {
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
                                    <p>Ang mga serbisyong ibinibigay ng "guidance" ay malawak na naipapaabot sa lahat.</p>
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
                                    <p>Ang mga tala ng mga mag-aaral na nakalap mula sa mga panayam,   pangsikolohiyang pagsusulit ay maayos na nakahanay.</p>
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
                                    <p>May "counselors" na nakalaang magbigay ng payo,   gumabay sa mga mag-aaral batay sa mga resulta ng mga pagsusulit na kanilang   kinuha sa gayo'y makagawa sila ng mabisang desisyon para sa sarili.</p>
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
                                    <p>May mga programang nakalaan para sa mga naghahanap ng trabaho,   mga nakapagtapos na o mga nahinto sa pag-aaral.</p>
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

export default GuidanceOffice;
