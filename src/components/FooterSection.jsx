import React from "react";
import BrandWhite from "../assets/Brand_White.png";
import Logo_2 from "../assets/Logo2.png";
import Appstore from "../assets/download-1.png";
import Playstore from "../assets/download-2.png";
import Appgallery from "../assets/download-3.png";
import Socials_1 from "../assets/socials_1.png";
import Socials_2 from "../assets/socials_2.png";
import Socials_3 from "../assets/socials_3.png";
import Socials_4 from "../assets/socials_4.png";
import Socials_5 from "../assets/socials_5.png";

function FooterSection() {
  let url = "#";
  return (
    <div className="footer-section">
      <div className="footer-flex-container">
        <div className="footer-column-1">
          <a href={url}>
            <img src={Logo_2} id="footer-logo" alt="logo-white" />
            <img src={BrandWhite} id="footer-brand-name" alt="brand-white" />
          </a>
          <span id="get-app">Get the app:</span>
          <div className="app-links-container">
            <a href={url}>
              <img src={Appstore} alt="Appstore-link" />
            </a>
            <a href={url}>
              <img src={Playstore} alt="Playstore-link" />
            </a>
            <a href={url}>
              <img src={Appgallery} alt="Appgallery-link" />
            </a>
          </div>
          <span id="follow">Follow us:</span>
          <div className="follow-us-container">
            <a href={url}>
              <img src={Socials_1} alt="socials-1" />
            </a>
            <a href={url}>
              <img src={Socials_2} alt="socials-2" />
            </a>
            <a href={url}>
              <img src={Socials_3} alt="socials-3" />
            </a>
            <a href={url}>
              <img src={Socials_4} alt="socials-4" />
            </a>
            <a href={url}>
              <img src={Socials_5} alt="socials-5" />
            </a>
          </div>
        </div>
        <div className="footer-column-2">
          <h5>About</h5>
          <ul>
            <li>
              <a href={url}>Company</a>
            </li>

            <li>
              <a href={url}>Leadership</a>
            </li>

            <li>
              <a href={url}>Jobs - HIRING!</a>
            </li>

            <li>
              <a href={url}>Pricing</a>
            </li>

            <li>
              <a href={url}>Press</a>
            </li>

            <li>
              <a href={url}>Investors</a>
            </li>
          </ul>
        </div>
        <div className="footer-column-3">
          <h5>Solutions</h5>
          <ul>
            <li>
              <a href={url}>At School</a>
            </li>

            <li>
              <a href={url}>At Work</a>
            </li>

            <li>
              <a href={url}>At Home</a>
            </li>
          </ul>
        </div>
        <div className="footer-column-4">
          <h5>Resources</h5>
          <ul>
            <li>
              <a href={url}>Study with Kurtis</a>
            </li>

            <li>
              <a href={url}>Blog</a>
            </li>

            <li>
              <a href={url}>Kurtis Certified</a>
            </li>

            <li>
              <a href={url}>Help Center</a>
            </li>

            <li>
              <a href={url}>Library</a>
            </li>

            <li>
              <a href={url}>Shop</a>
            </li>

            <li>
              <a href={url}>Safety center</a>
            </li>
          </ul>
        </div>
        <div className="footer-column-5">
          <h5>Terms and conditions</h5>
          <ul>
            <li>
              <a href={url}>Terms and Conditions</a>
            </li>

            <li>
              <a href={url}>Privacy Policy</a>
            </li>
            <li>
              <a href={url}>US Privacy Laws</a>
            </li>
            <li>
              <a href={url}>Children's Privary Policy</a>
            </li>
            <li>
              <a href={url}>Inclusion and Accessibility policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright-div">
        <p id="copyright">Copyright @ 2020, Kurtis All rights reserved.</p>
      </div>
    </div>
  );
}

export default FooterSection;
