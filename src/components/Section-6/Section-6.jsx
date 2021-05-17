import React from "react";
import "./Section-6.css";

function Section6() {
  return (
    <div className="section6Main">
      <div className="section6top">
        <div className="section6topLeft">
          <img
            src="https://static.tildacdn.com/tild3663-3761-4131-a261-336139316431/v3-01.svg"
            alt="section6image"
          />
        </div>
        <div className="section6topRight">
          <h1>Total visibility. Total control.</h1>
          <p>
            <span>
              <strong>Visibility :</strong>
            </span>
            Every time a Volopay card is swiped, the transaction is visible to
            the spender, the budget owner, and the company admin—immediately. So
            you know where your company money is, at all times.
          </p>
          <p className="section6Pinktext">Learn More &#8594;</p>
          <p>
            <span>
              <strong>Control : </strong>
            </span>
            Decentralize spend control, define approval workflows, make
            strategic budgets and budget owners, approve fund requests in
            real-time.
          </p>
          <p className="section6Pinktext">Learn More &#8594;</p>
        </div>
      </div>
      <div className="section6Lower">
        <div className="section6imageSection">
          <img
            className="section6image"
            src="https://thumb.tildacdn.com/tild6134-3332-4266-a263-663231373432/-/cover/341x397/center/center/-/format/webp/Man_Typing_on_Macboo.jpg"
            alt="section6-image"
          />
        </div>
        <div className="section6lowerRight">
          <img
            className="section6Quote"
            src="https://static.tildacdn.com/tild6131-3438-4136-a366-663065323062/photo.svg"
            alt="quote"
          />
          <h1>
            Volopay has helped to ease our expense approval process and has
            provided us with better spend visibility and accountability.
          </h1>
          <p>Li Lee, Finance Manager, Lynx Analytics</p>
          <p className="section6Pinktextline">Read Case Study</p>

        </div>
      </div>
    </div>
  );
}

export default Section6;
