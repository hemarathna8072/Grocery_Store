import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleLogout = () => {
    localStorage.removeItem('authToken'); // Remove the token
    setIsLoggedIn(false); // Set logged-out state
  };

  return (
    <nav className="navbar">
      <div className="logo">bigbasket</div>
      <input type="text" placeholder="Search for Products..." className="search-bar" />
      <div className="nav-buttons">
        {!isLoggedIn ? (
          <>
            <Link to="/login">
              <button className="login-btn">Login / Sign Up</button>
            </Link>
          </>
        ) : (
          <>
            <button className="user-icon" onClick={handleLogout}>
              👤 (Logout)
            </button>
          </>
        )}
        <button className="cart-icon">🛒</button>
      </div>
    </nav>
  );
};

export default Navbar;
