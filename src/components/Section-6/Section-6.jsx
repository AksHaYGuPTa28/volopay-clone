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
        <div className="section6lowerLeft">
          <div className="section6imageSection">
            <img
              className="section6image"
              src="https://thumb.tildacdn.com/tild6564-3262-4539-a639-383539633634/-/cover/341x399/center/center/-/format/webp/credit-card-mockup.jpg"
              alt="section6-image"
            />
            <img
              className="section3Avatar"
              src="https://thumb.tildacdn.com/tild6539-6134-4434-a363-336465616233/-/cover/161x207/center/center/-/format/webp/1529909885713.jpg"
              alt="section3-avatar"
            />
          </div>
        </div>
        <div className="section6lowerRight">
          <img
            className="section6Quote"
            src="https://static.tildacdn.com/tild6131-3438-4136-a366-663065323062/photo.svg"
            alt="quote"
          />
          <h1>
            Volopay helps us reduce time, effort and cost in expense management,
            and give us generous cashback.
          </h1>
          <p>Jimmy Lee, Director of Finance, Beam Mobility</p>
        </div>
      </div>
    </div>
  );
}

export default Section6;
