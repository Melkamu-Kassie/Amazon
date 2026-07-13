import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="amazon-header">
      {/* 1. Amazon Logo */}
      <div className="header-nav-item header-logo-container">
        <a href="/">
          <img
            className="header-logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="Amazon Logo"
          />
        </a>
      </div>

      {/* 2. Deliver To Section */}
      <div className="header-nav-item header-delivery">
        <div className="delivery-icon">
          {/* Map Pin Icon (SVG) */}
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
        </div>
        <div className="delivery-text">
          <span className="delivery-line1">Deliver to</span>
          <span className="delivery-line2">Ethiopia</span>
        </div>
      </div>

      {/* 3. Search Bar with "All" Dropdown */}
      <div className="header-search">
        <select className="search-select">
          <option>All</option>
          <option>Deals</option>
          <option>Electronics</option>
          <option>Books</option>
        </select>
        <input
          className="search-input"
          type="text"
          placeholder="Search Products, Brands and More"
        />
        <button className="search-button" type="submit">
          {/* Search Magnifying Glass Icon (SVG) */}
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </button>
      </div>

      {/* 4. Navigation Right Links */}
      <div className="header-nav-right">
        {/* Language Selector */}
        <div className="header-nav-item header-language">
          {/* US Flag Image */}
          <img
            className="flag-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
            alt="US Flag"
          />
          <span className="language-text">EN</span>
          <span className="arrow-down"></span>
        </div>

        {/* Account & Lists */}
        <a href="/login" className="header-nav-item header-link">
          <div className="option-text">
            <span className="option-line1">Hello, sign in</span>
            <span className="option-line2">
              Account & Lists <span className="arrow-down"></span>
            </span>
          </div>
        </a>

        {/* Returns & Orders */}
        <a href="/orders" className="header-nav-item header-link">
          <div className="option-text">
            <span className="option-line1">Returns</span>
            <span className="option-line2">& Orders</span>
          </div>
        </a>

        {/* Cart */}
        <a href="/cart" className="header-nav-item header-link header-cart">
          <div className="cart-icon-container">
            <span className="cart-count">0</span>
            {/* Cart Icon (SVG) */}
            <svg
              viewBox="0 0 24 24"
              width="38"
              height="38"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </div>
          <span className="cart-text">Cart</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
