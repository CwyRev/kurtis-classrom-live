import React from "react";
import { useState } from "react";
import Logo from "../assets/Logo1.png";

function NavBar() {
  let url = "#";
  const [navbar, setNavbar] = useState(false);

  const changeBorder = () => {
    if (window.scrollY >= 1) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBorder);
  return (
    <nav className={navbar ? "navbar-section navbar-border" : "navbar-section"}>
      <div className="navbar-container">
        <a href={url}>
          <div className="left-navbar">
            <img className="logo + {}" src={Logo} alt="Logo" />
            <h1 className="title">Kurtis Classrom</h1>
          </div>
        </a>
        <div className="right-navbar">
          <button
            id="signup-button-1"
            className="signup-button btn btn-primary"
          >
            Sign up
          </button>
          <button id="login-button" className="btn btn-outline-secondary">
            Log in
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
