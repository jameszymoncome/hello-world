// src/StudentInterface/StudentInstruct.js
import React, { useContext } from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './StudentInstruct.css'
import { UserContext } from '../UserContext';

function StudentInstruct(){
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const handleNextBtn = () => {
    navigate('/select-office');
  };

    return (
        <div>
          {/* <Header />
          <div>
            <div className="instruction-container">
                <h2>Instruction:</h2>
                <h1>Welcome, {user}!</h1>
                <div className="instruction">
                    <p>In line with our commitment to understand your requirements and seek to satisfy your needs consistently, we would like to know the level of your satisfaction on the services we have provided.  Your response will be a vital input in the review and continual improvement of our services and of our Quality Management System. We sincerely appreciate your cooperation. Thank You!
                    </p>
                </div>
                <br></br>
                <div className='rating'>
                        <h5>5 &rarr; Very Satisfied</h5>
                        <br></br>
                        <h5>4 &rarr; Satisfied</h5>
                        <br></br>
                        <h5>3 &rarr; Natural</h5>
                        <br></br>
                        <h5>2 &rarr; Dissatisfied</h5>
                        <br></br>
                        <h5>1 &rarr; Very Dissatisfied</h5>
                </div>
                <div className='button-container-st'>
                  <button className='next_btn' onClick={handleNextBtn}>Next</button>
                </div>
            </div>
          </div>
          <Footer /> */}
          <Header />
          <div>
            <h2 className="title">Instruction</h2>
            <div className = 'intruction-container'>
              <div className="instruction">
                      <p>In line with our commitment to understand your requirements and seek to satisfy your needs consistently, we would like to know the level of your satisfaction on the services we have provided.  Your response will be a vital input in the review and continual improvement of our services and of our Quality Management System. We sincerely appreciate your cooperation. Thank You!
                      </p>
              </div>
            </div>
            <div>
                <div className = 'rating-container'>
                  <h4>Rating Scheme</h4>
                  <div className='rating'>   
                          <h5><span class = 'number'>5</span><img src="\darkgreen.png" alt ='darkgreen' className="color"/><span class = 'text'>Outstanding</span></h5>
                          <br></br>
                          <h5><span class = 'number'>4</span><img src="\green.png" alt ='green' className="color"/><span class = 'text'>Exceed Expectation</span></h5>
                          <br></br>
                          <h5><span class = 'number'>3</span><img src="\yellow.png" alt ='yellow' className="color"/><span class = 'text'>Meets Expectation</span></h5>
                          <br></br>
                          <h5><span class = 'number'>2</span><img src="\orange.png" alt ='orange' className="color"/><span class = 'text'>Failed to Meet Expectation</span></h5>
                          <br></br>
                          <h5><span class = 'number'>1</span><img src="\red.png" alt ='red' className="color"/><span class = 'text'>Needs Improvement</span></h5>
                  </div>
                </div>
                <div className='button-container-st'>
                  <button className='next_btn' onClick={handleNextBtn}>Next</button>
                </div>
            </div>
          </div>
          <Footer />
        </div>
    );
}

export default StudentInstruct;
