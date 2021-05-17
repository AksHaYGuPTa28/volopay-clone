import React from "react";
import "./Section-3.css";

function Section3() {
  return (
    <div className="section3Main">
      <h1>Corporate cards—Issue,control & save.</h1>
      <p>
        Issue physical & virtual cards to employees. Control, track and set
        spending rules for each card issued, while earning significant cashback!
      </p>
      <div className="section3Mid">
        <div className="section3midLeft">
          <i class="fa fa-credit-card" aria-hidden="true"></i>

          <h3>Physical Cards</h3>
          <p>
            Equip your teams with secure physical VISA cards with built-in
            controls that will enable them to make payments at any store.
          </p>
          <p className="section3Pinktext">Learn More &#8594;</p>
        </div>
        <div className="section3midRight">
          <i class="fa fa-cloud" aria-hidden="true"></i>
          <h3>Virtual Cards</h3>
          <p>
            Generate instant virtual cards to pay for and manage your SaaS
            subscriptions, vendor payments and online spending.
          </p>
          <p className="section3Pinktext">Learn More &#8594;</p>
        </div>
      </div>
      <div className="section3Lower">
        <div className="section3lowerLeft">
          <div className="section3imageSection">
            <img
              className="section3image"
              src="https://thumb.tildacdn.com/tild3063-6132-4835-a638-363538373932/-/cover/341x399/center/center/-/format/webp/vcvcv.jpg"
              alt="section3-image"
            />
            <img
              className="section3Avatar"
              src="https://thumb.tildacdn.com/tild3035-3362-4165-b334-663962306562/-/cover/161x207/center/center/-/format/webp/1591284701912.jpeg"
              alt="section3-avatar"
            />
          </div>
        </div>
        <div className="section3lowerRight">
          <img
            className="section3Quote"
            src="https://static.tildacdn.com/tild6131-3438-4136-a366-663065323062/photo.svg"
            alt="quote"
          />
          <h1>
            We use virtual cards to manage all our marketing and SaaS spends. We
            now have better visibility and control, while earning 2% cashback.
          </h1>
          <p>Mitul Doshi, President Finance & ops - Invideo</p>
          <p className="section3Pinktextline">Read Case Study</p>
        </div>
      </div>
    </div>
  );
}

export default Section3;
