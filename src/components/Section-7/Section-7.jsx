import React from "react";
import "./Section-7.css";

function Section7() {
  return (
    <div className="section7Main">
      <h1>Financial stack for business</h1>
      <p>
        No more switching between multiple bank accounts and tools to run your
        smart business. We have combined great software with every service you
        are using a bank for, to produce a state-of-the-art financial platform.
      </p>
      <div className="section7cardContainer">
        <div className="section7Card">
          <i class="fa fa-home" aria-hidden="true"></i>
          <h3>Expense Management</h3>
          <p>
            Request and approve funds on the go. Now file expense reports in a
            few clicks.
          </p>
        </div>
        <div className="section7Card">
          <i class="fa fa-refresh" aria-hidden="true"></i>
          <h3>Subscription Management</h3>
          <p>
            Manage recurring SaaS subscriptions with virtual cards & smart
            software.
          </p>
        </div>
        <div className="section7Card">
          <i class="fa fa-list" aria-hidden="true"></i>
          <h3>Invoice Management</h3>
          <p>
            Request and approve funds on the go. Now file expense reports in a
            few clicks.
          </p>
        </div>
      </div>
      <div className="section7cardContainer">
        <div className="section7Card">
          <i class="fa fa-user-o" aria-hidden="true"></i>
          <h3>Business Accounts</h3>
          <p>
            Collect and hold money in 11+ different currencies. Convert FX at
            low & transparent fees.
          </p>
        </div>
        <div className="section7Card">
          <i class="fa fa-usd" aria-hidden="true"></i>
          <h3>Business Credit</h3>
          <p>
            Get easy and flexible funding upto 100k credit without any personal
            guarantees.
          </p>
        </div>
        <div className="section7Card">
          <i class="fa fa-suitcase" aria-hidden="true"></i>
          <h3>Corporate Travel</h3>
          <p>Book, manage and report on business travel with cost savings.</p>
        </div>
      </div>
    </div>
  );
}

export default Section7;
