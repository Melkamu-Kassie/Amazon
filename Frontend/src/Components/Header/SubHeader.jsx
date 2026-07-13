import React from 'react';
import './SubHeader.css';

function SubHeader() {
  return (
    <div className="amazon-subheader">
      {/* Left side: Hamburger menu and links */}
      <div className="subheader-links">
        
        {/* All Menu Button */}
        <div className="subheader-item header-all-menu">
          <svg className="menu-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
          </svg>
          <span>All</span>
        </div>

        {/* Navigation Links */}
        <a href="/deals" className="subheader-item subheader-link">Today's Deals</a>
        <a href="/prime" className="subheader-item subheader-link">Prime Video</a>
        <a href="/gift-cards" className="subheader-item subheader-link">Gift Cards</a>
        <a href="/sell" className="subheader-item subheader-link">Sell</a>
        <a href="/registry" className="subheader-item subheader-link">Registry</a>
        <a href="/customer-service" className="subheader-item subheader-link">Customer Service</a>
        
      </div>
    </div>
  );
}

export default SubHeader;