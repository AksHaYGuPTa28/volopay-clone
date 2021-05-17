import React from "react";
import "./Companies.css";
import Logo1 from "../../assets/images/companyLogos/logo1.svg";
import Logo2 from "../../assets/images/companyLogos/logo2.png";
import Logo3 from "../../assets/images/companyLogos/logo3.webp";
import Logo4 from "../../assets/images/companyLogos/logo4.webp";
import Logo5 from "../../assets/images/companyLogos/logo5.webp";
import Logo6 from "../../assets/images/companyLogos/logo6.webp";
import Logo7 from "../../assets/images/companyLogos/logo7.webp";
import Logo8 from "../../assets/images/companyLogos/logo8.webp";

function Companies() {
  return (
    <div className="companiesMain">
      <div className="companieslogoContainer">
        <div className="logo1">
          <img src={Logo1} alt="1st logo"></img>
        </div>
        <div className="logo1">
          <img src={Logo2} alt="2nd logo"></img>
        </div>
        <div className="logo1">
          <img src={Logo3} alt="3rd logo"></img>
        </div>
        <div className="logo1">
          <img src={Logo4} alt="4th logo"></img>
        </div>
        <div className="logo1">
          <img src={Logo5} alt="5th logo"></img>
        </div>
        <div className="logo1">
          <img src={Logo6} alt="6th logo"></img>
        </div>
        <div className="logo1">
          <img src={Logo7} alt="7th logo"></img>
        </div>
        <div className="logo1">
          <img src={Logo8} alt="8th logo"></img>
        </div>
      </div>
      <p>
        Trusted by finance teams at startups to enterprises.
        <span> Meet our customers &#8594;</span>
      </p>
    </div>
  );
}

export default Companies;
