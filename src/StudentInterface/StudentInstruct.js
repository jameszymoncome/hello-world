// src/StudentInterface/StudentInstruct.js
import React from 'react';
import {useNavigate} from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import './StudentInstruct.css'

function StudentInstruct(){
  const navigate = useNavigate();

  const handleNextBtn = () => {
    navigate('/select-office');
  };

    return (
        <div>
          <Header />
          <div>
            <div className="instruction-container">
                <h2>Instruction:</h2>
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
          <Footer />
        </div>
    );
}

export default StudentInstruct;
