// src/App.js
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './Login';
import StartPage from './StartPage';
import CustomerOptionPage from './CustomerOptionPage'; // Import the new page
import logo from './images/logo.png';
import './App.css';
import customerLogo from './images/customer-logo.png'; // Adjust path as needed
import adminLogo from './images/admin-logo.png'; // Adjust path as needed
import StudentLogin from './StudentLogin';
import StudentLogin2 from './StudentLogin2';
import EmployeeLogin from './EmployeeLogin';
import EmployeeLogin2 from './EmployeeLogin2';
import OthersLogin from './Otherslogin';
import StudentInstruct from './StudentInterface/StudentInstruct';
import SelectOffice from './StudentInterface/SelectOffice';
import AdmissionOffice from './StudentInterface/AdmissionOffice';
import GuidanceOffice from './StudentInterface/GuidanceOffice';
import { UserProvider } from './UserContext';
import AgencyInterface from './OthersInterface/AgencyInterface';
import AgencyInformation from './OthersInterface/AgencyInformation';
import Survey from './OthersInterface/Survey';
import ClientSatisfactionSurvey from './OthersInterface/ClientSatisfactionSurvey';

function App() {
  const [showStartPage, setShowStartPage] = useState(true);
  const [showLoginOptions, setShowLoginOptions] = useState(false);

  const handleStart = () => {
    setShowStartPage(false);
    setShowLoginOptions(true);
  };

  return (
    <div className="App">
      {showStartPage ? (
        <StartPage onStart={handleStart} />
      ) : showLoginOptions ? (
        <LoginOptions />
      ) : (
        <Login />
      )}
    </div>
  );
}

function LoginOptions() {
  const navigate = useNavigate();

  const handleCustomerClick = () => {
    navigate('/customer-options');
  };

  const handleAdminClick = () => {
    navigate('/admin-options'); // Assuming you have an admin options page
  };

  return (
    <div className="login-options-container">
      <img src={logo} alt="Logo" className="logo" />
      <h2>Camarines Norte State College Customer Feedback System</h2>
      <br></br>
      <div className="button-container">
        <button onClick={handleCustomerClick}>
          <img src={customerLogo} alt="Customer Logo" />
          Customer
        </button>
        <button onClick={handleAdminClick}>
          <img src={adminLogo} alt="Admin Logo" />
          Admin
        </button>
      </div>
    </div>
  );
}

function AppWithRouter() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/customer-options" element={<CustomerOptionPage />} />
          <Route path="/student-signup" element={<StudentLogin />} />
          <Route path="/employee-signup" element={<EmployeeLogin />} />
          <Route path="/others-signup" element={<CustomerOptionPage />} />
          <Route path="/student-login" element={<StudentLogin2 />} />
          <Route path="/employee-login" element={<EmployeeLogin2 />} />
          <Route path="/others-login" element={<OthersLogin />} />
          <Route path="/student-instruct" element={<StudentInstruct />} />
          <Route path="/select-office" element={<SelectOffice />} />
          <Route path="/admission-office" element={<AdmissionOffice />} />
          <Route path="/guidance-office" element={<GuidanceOffice />} />
          <Route path="/start-page" element={<StartPage />} />
          <Route path="/agency-interface" element={<AgencyInterface />} />
          <Route path="/agency-information" element={<AgencyInformation />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/client-satisfaction-survey" element={<ClientSatisfactionSurvey />} />
          {/* Add other routes here as needed */}
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default AppWithRouter;
