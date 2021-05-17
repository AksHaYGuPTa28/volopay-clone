import React from "react";
import "./Section-4.css";

function Section4() {
  return (
    <div className="section4Main">
      <h1>Domestic and international money transfers.</h1>
      <p>
        Send money to more than 130 countries worldwide with SWIFT & non-SWIFT
        payment options. Process your vendor payouts and employee reimbursements
        easier than ever before, at the lowest possible rates!
      </p>
      <div className="section4Mid">
        <div className="section4midLeft">
          <i class="fa fa-user-o" aria-hidden="true"></i>

          <h3>Vendor Payouts</h3>
          <p>
            Manage bulk vendor payouts, buy inventory, send money to vendors
            both domestically and internationally, all from a single dashboard.
          </p>
          <p className="section4Pinktext">Learn More &#8594;</p>
        </div>
        <div className="section4midRight">
          <i class="fa fa-usd" aria-hidden="true"></i>
          <h3>Employee reimbursements</h3>
          <p>
            Seamlessly reimburse employees for expenses they personally
            incurred. Employees no longer need to wait till the end of the
            month.
          </p>
          <p className="section4Pinktext">Learn More &#8594;</p>
        </div>
      </div>
      <div className="section4Lower">
        <div className="section4lowerLeft">
          <div className="section4imageSection">
            <img
              className="section4image"
              src="https://thumb.tildacdn.com/tild6666-3864-4530-a564-333561396661/-/cover/341x399/center/center/-/format/webp/Free_Man_Using_MacBo.jpg"
              alt="section4-image"
            />
          </div>
        </div>
        <div className="section4lowerRight">
          <img
            className="section4Quote"
            src="https://static.tildacdn.com/tild6131-3438-4136-a366-663065323062/photo.svg"
            alt="quote"
          />
          <h1>
            Volopay has added a new dimension to the way we make payments to
            vendors, and the FX fees are so low.
          </h1>
          <p>Jeanie Devi, Accountant, Dathena Science</p>
          <p className="section4Pinktextline">Read Case Study</p>
        </div>
      </div>
    </div>
  );
}

export default Section4;
