import React from "react";
import "./Section-5.css";

function Section5() {
  return (
    <div className="section5Main">
      <div className="section5top">
        <div className="section5topLeft">
          <h1>Earn cashback. Cut costs.</h1>
          <p>
            <span>
              <strong>Upto 2% cashback.</strong>
            </span>
            No exceptions. No useless "points". Get upto 2% cashback on all FX
            transactions including online hosting, subscription & international
            travel expenses.
          </p>
          <p className="section5Pinktext">Learn More &#8594;</p>
          <p>
            <span>
              <strong>Early payment discounts.</strong>
            </span>
            Optimize working capital by offering to pay early and earn cashback
            rewards from suppliers.
          </p>
          <p className="section5Pinktext">Learn More &#8594;</p>
        </div>
        <div className="section5topRight">
          <img
            src="https://static.tildacdn.com/tild6236-6636-4566-b461-336437343835/Untitled-23-01.svg"
            alt="section5image"
          />
        </div>
      </div>
      <div className="section5Lower">
        <div className="section5lowerLeft">
          <div className="section5imageSection">
            <img
              className="section5image"
              src="https://thumb.tildacdn.com/tild6564-3262-4539-a639-383539633634/-/cover/341x399/center/center/-/format/webp/credit-card-mockup.jpg"
              alt="section5-image"
            />
            <img
              className="section5Avatar"
              src="https://thumb.tildacdn.com/tild6539-6134-4434-a363-336465616233/-/cover/161x207/center/center/-/format/webp/1529909885713.jpg"
              alt="section5-avatar"
            />
          </div>
        </div>
        <div className="section5lowerRight">
          <img
            className="section5Quote"
            src="https://static.tildacdn.com/tild6131-3438-4136-a366-663065323062/photo.svg"
            alt="quote"
          />
          <h1>
            Volopay helps us reduce time, effort and cost in expense management,
            and give us generous cashback.
          </h1>
          <p>Jimmy Lee, Director of Finance, Beam Mobility</p>
          <p className="section5Pinktextline">Read Case Study</p>
        </div>
      </div>
    </div>
  );
}

export default Section5;
