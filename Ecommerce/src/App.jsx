import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import SmartBasket from './components/SmartBasket';
import BestSellers from './components/BestSeller';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import './index.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check if the user is logged in by checking localStorage for token
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={
            <>
              <SmartBasket />
              <BestSellers />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
