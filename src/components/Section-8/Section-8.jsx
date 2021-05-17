import React from "react";
import "./Section-8.css";

function Section8() {
  return (
    <div className="section8Main">
      <h1>Business with confidence</h1>
      <p>
        Our operational partners are regulated by Monetary Authority of
        Singapore and holds Major Payment Institution (MPI) licenses under PSA
        Act 2019
      </p>
      <div className="section8Mid">
        <div className="section8midLeft">
          <i class="fa fa-check-circle" aria-hidden="true"></i>

          <h3>Your funds are safe with Volopay</h3>
          <p>
            Your funds are kept in a trust account with DBS, Singapore. These
            client funds are never used by Volopay for our own operations, and
            are always kept segregated to ensure your money is always secure and
            available when you need it.
          </p>
        </div>
        <div className="section8midRight">
          <i class="fa fa-briefcase" aria-hidden="true"></i>
          <h3>Security and Privacy</h3>
          <p>
            We use bank-grade security encryption and access protocols. Customer
            privacy is one of our core values and your data is highly secured
            with us.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section8;
