import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src="https://github.com/MFC-VIT/GamePortal/blob/main/src/assets/logo.png" alt="Logo" className="logo" />
      </div>
      <h1 className="header-title">Mozilla Firefox Club</h1>
      <button className="login-button">Login</button>
    </header>
  );
};

export default Header;
