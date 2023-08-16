import React from "react";
import Logo_2 from "../assets/Logo2.png";
import BrandWhite from "../assets/Brand_White.png";
import Arrow from "../assets/arrow_1.png";

function ClassCodeSection() {
  let url = "#";
  return (
    <div className="class-code-section">
      <div className="class-code-container">
        <img className="class-logo" src={Logo_2} alt="logo-white" />
        <img className="class-brand-name" src={BrandWhite} alt="brand-white" />
        <div className="input-class-code">
          <input placeholder="Write the code here"></input>
          <a href={url}>
            <img src={Arrow} alt="arrow" />
          </a>
        </div>
        <p>Or try with 1234</p>
      </div>
    </div>
  );
}

export default ClassCodeSection;
