import React from "react";
import "./Section-9.css";
import Logo1 from "../../assets/images/supportLogos/logo1.webp";
import Logo2 from "../../assets/images/supportLogos/logo2.webp";
import Logo3 from "../../assets/images/supportLogos/logo3.webp";
import Logo4 from "../../assets/images/supportLogos/logo4.webp";
import Logo5 from "../../assets/images/supportLogos/logo5.webp";
import Logo6 from "../../assets/images/supportLogos/logo6.webp";
import Logo7 from "../../assets/images/supportLogos/logo7.webp";
import Logo8 from "../../assets/images/supportLogos/logo8.webp";
import Logo9 from "../../assets/images/supportLogos/logo9.webp";
import Logo10 from "../../assets/images/supportLogos/logo10.webp";

function Companies() {
  return (
    <div className="companiesMain">
      <h3>Supported By</h3>
      <p>
        We are proud to be supported by world's leading investors, founders and
        senior leadership of world's leading companies.
      </p>
      <div className="companieslogoContainer">
        <div className="logo">
          <img src={Logo1} alt="1st logo"></img>
        </div>
        <div className="logo">
          <img src={Logo2} alt="2nd logo"></img>
        </div>
        <div className="logo">
          <img src={Logo3} alt="3rd logo"></img>
        </div>
        <div className="logo">
          <img src={Logo4} alt="4th logo"></img>
        </div>
        <div className="logo">
          <img src={Logo5} alt="5th logo"></img>
        </div>
        <div className="logo">
          <img src={Logo6} alt="6th logo"></img>
        </div>
        <div className="logo">
          <img src={Logo7} alt="7th logo"></img>
        </div>
        <div className="logo">
          <img src={Logo8} alt="8th logo"></img>
        </div>
        <div className="logo">
          <img src={Logo9} alt="9th logo"></img>
        </div>
        <div className="logo">
          <img src={Logo10} alt="10th logo"></img>
        </div>
      </div>
    </div>
  );
}

export default Companies;
