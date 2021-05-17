import React from "react";
import "./Banner.css";
import Typer from "./Typewriter/Typewriter";

function Banner() {
  return (
      <div className="bannerMain">
        <div className="bannerLeft">
          <Typer
            dataText={[
              "spending|",
              "finances|",
              "reporting|",
              "vendors|",
              "cards|",
            ]}
          />

          <p className="bannerSmalltext">
            A modern business account designed to save money with corporate
            cards, credit, money transfers, expense reimbursements, and
            automated accounting—all in one place.
          </p>
          <button className="bannerButton">Sign Up for free</button>
        </div>
        <div className="bannerRight">
          <img
            src="https://static.tildacdn.com/tild3533-3338-4161-b464-656430616438/Final_1-01-01.svg"
            alt="Banner"
          />
        </div>
        
      </div>
  );
}

export default Banner;
