import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import ratebar from '../images/RateBar.png';
import './Survey.css';

function Survey() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/agency-information');
  };

  const handleNext = () => {
    navigate('/client-satisfaction-survey');
  };

  return (
    <div>
      <Header />
      <div>
        <h2 className="title">CLIENT SATISFACTION SURVEY (EXTENSION) <br />Cooperating Agency</h2>
        <div className='survey-container'>
          <div className="main-container">
            <label>Performance Criteria</label>
            <label>Satisfaction Level</label>
          </div>
          <div className="first-container">
            <div>
               <p>1. Objectives of activities</p>
            </div>
            <div>
               <img src={ratebar} alt="Ratebar" className="ratebar_survey" />
               <div className="radio-buttons">
                 {[1, 2, 3, 4, 5].map((num) => (
                <label key={num}>
                    <input type="radio" name="rate2" value={num} />
                    {num}
                </label>
            ))}
              </div>
            </div>
          </div>
          <br></br>
          <div className="first-container">
            <div>
            <p>2. Usefulness/Relevance of the activity to the needs of the beneficiaries/community.</p>
            </div>
            <div>
               <img src={ratebar} alt="Ratebar" className="ratebar_survey" />
               <div className="radio-buttons">
                 {[1, 2, 3, 4, 5].map((num) => (
                <label key={num}>
                    <input type="radio" name="rate3" value={num} />
                    {num}
                </label>
            ))}
              </div>
            </div>
          </div>
          <br></br>
          <div className="first-container">
            <div>
            <p>3. Contribution of the Activity to the Community development</p>
            </div>
            <div>
               <img src={ratebar} alt="Ratebar" className="ratebar_survey" />
               <div className="radio-buttons">
                 {[1, 2, 3, 4, 5].map((num) => (
                <label key={num}>
                    <input type="radio" name="rate3" value={num} />
                    {num}
                </label>
            ))}
              </div>
            </div>
          </div>
          <br></br>
          <div className="first-container">
            <div>
            <p>4. Capability of the extenxion implementers to opertionalize the activity.</p>
            </div>
            <div>
               <img src={ratebar} alt="Ratebar" className="ratebar_survey" />
               <div className="radio-buttons">
                 {[1, 2, 3, 4, 5].map((num) => (
                <label key={num}>
                    <input type="radio" name="rate3" value={num} />
                    {num}
                </label>
            ))}
              </div>
            </div>
          </div>
          <br></br>
          <div className="first-container">
            <div>
            <p>5. Timeliness of delivery of service.</p>
            </div>
            <div>
               <img src={ratebar} alt="Ratebar" className="ratebar_survey" />
               <div className="radio-buttons">
                 {[1, 2, 3, 4, 5].map((num) => (
                <label key={num}>
                    <input type="radio" name="rate3" value={num} />
                    {num}
                </label>
            ))}
              </div>
            </div>
          </div>
          <br></br>
          <div className="first-container">
            <div>
            <p>6. Efficient utalization of funds (if applicable)</p>
            </div>
            <div>
               <img src={ratebar} alt="Ratebar" className="ratebar_survey" />
               <div className="radio-buttons">
                 {[1, 2, 3, 4, 5].map((num) => (
                <label key={num}>
                    <input type="radio" name="rate3" value={num} />
                    {num}
                </label>
            ))}
              </div>
            </div>
          </div>
          <br></br>
          <div className="first-container">
            <div>
            <p>7. Overall quality of service provided</p>
            </div>
            <div>
               <img src={ratebar} alt="Ratebar" className="ratebar_survey" />
               <div className="radio-buttons">
                 {[1, 2, 3, 4, 5].map((num) => (
                <label key={num}>
                    <input type="radio" name="rate3" value={num} />
                    {num}
                </label>
            ))}
              </div>
            </div>
          </div>
        </div>
        <div className="button-container-st">
          <button className="back_btn" onClick={handleBack}>Back</button>
          <button className="next_btn" onClick={handleNext}>Next</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Survey;