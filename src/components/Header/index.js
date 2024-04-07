import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
 

import "./index.css";

const Header = () => {
  const [ismenuClicked, setMenu] = useState(false);

  const onClickMenu = () => {
    setMenu((prevState) => !prevState);
  };

  const renderNavContent = () => (
    <>
      <a href="#BecomeAcca" className="link"><p className="nav-text">Become ACCA</p></a>
      <a href="#WhyChooseUs" className="link"><p className="nav-text">Why Choose us?</p></a>
      <a href="#WhatWillULEarn" className="link"><p className="nav-text">What will you learn</p></a>
      <a href="#Placements" className="link"><p className="nav-text">Placements</p></a>
    </>
  );

  return (
    <>
      <div className="nav-bar" id = "header">
        <div className="menu-name-card">
          <button type="button" className="menu-btn" onClick={onClickMenu}>
            <GiHamburgerMenu className="menu-icon" />
          </button>
          <h1 className="website-name">IndigoLearn</h1>
        </div>
        <div className="nav-content-card">{renderNavContent()}</div>
        <div className="login-signup-card">
          <CgProfile className="profile-icon" />
          <p className="l-s-test">Login/Signup</p>
        </div>
      </div>
      {ismenuClicked && <div className="mobile-nav-content">{renderNavContent()}</div>}
    </>
  );
};

export default Header;
