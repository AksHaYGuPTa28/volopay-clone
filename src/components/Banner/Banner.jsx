import React from "react";
import "./Banner.css";
import Bannerimage from "../../assets/images/Final_1-01-01.svg";
import Typer from "./Typewriter/Typewriter";

function Banner() {
  return (
    <div className="">
      <div className="bannerMain">
        <div className="bannerLeft">
          <Typer
            heading={"The financial control center to manage"}
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
          <img src={Bannerimage} alt="Banner"></img>
        </div>
      </div>
    </div>
  );
}

export default Banner;
