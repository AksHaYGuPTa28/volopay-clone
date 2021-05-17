import React from "react";
import "./Footer.css";
import Logo from "../../assets/images/logo.png";

function Footer() {
  return (
    <div className="footerMain">
      <div className="footer1">
        <img src={Logo} alt="logo" />
        <p>Volopay</p>
      </div>
      <div className="footer2">
        <ul>
          <li>
            <strong>Features</strong>
          </li>
          <li>Physical Cards</li>
          <li>Virtual Cards</li>
          <li>Vendor Payouts</li>
          <li>Employee reimbursements</li>
          <li>Effortless Control</li>
          <li>Business - Visiblity</li>
          <li>Automate Accounting</li>
          <li>Earn Cashback</li>
          <li>Payment Discount</li>
          <li>Expense Policy</li>
        </ul>
      </div>
      <div className="footer3">
        <ul>
          <li>
            <strong>Product</strong>
          </li>
          <li>Expense Management</li>
          <li>Subscription Management</li>
          <li>Invoice Management</li>
          <li>Business account</li>
          <li>Business credit</li>
          <li>Corporate travel</li>
          <li>Resources</li>
          <li>Help Desk</li>
        </ul>
      </div>
      <div className="footer4">
        <ul>
          <li>
            <strong>Company</strong>
          </li>
          <li>About us</li>
          <li>Carrers</li>
          <li>Press kit</li>
          <li>Pricing</li>
          <li>FAQ</li>
          <li>Privacy Policy</li>
          <li>Terms</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
