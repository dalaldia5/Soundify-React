import React from "react";
import "../styles/Header.css";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <div className="header">
      <div className="nav">
        <div className="hamburgerContainer">
          <img
            className="invert hamburger"
            src="/assets/hamburger.svg"
            alt="Menu"
            onClick={onMenuClick}
          />
          <img src="/assets/left-arrow.svg" alt="Back" className="invert" />
          <img src="/assets/right-arrow.svg" alt="Forward" className="invert" />
        </div>
      </div>
      <div className="buttons">
        <button className="signupbtn">Sign up</button>
        <button className="loginbtn">Log in</button>
      </div>
    </div>
  );
};

export default Header;
