import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-left">
          <h3>Nadácia Good Boy</h3>
        </div>
        <div className="header-right">
          <img
            src="/facebook.svg"
            alt="facebook icon"
            className="header-icon__fb"
          />
          <img src="/ig.svg" alt="ig icon" className="header-icon__ig" />
        </div>
      </div>
    </div>
  );
};

export default Header;
