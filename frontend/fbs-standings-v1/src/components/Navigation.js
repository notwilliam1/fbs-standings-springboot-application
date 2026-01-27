import React from 'react';
import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
            FBS Standings
        </div>
        <ul className="nav-links nav-right">
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
