import React from "react";
import "./App.css";
import { Navbar } from "./components/navbarMain/navbar/index";
import Banner from "./components/Banner/Banner";
import Companies from "./components/Companies/Companies";
import Section2 from "./components/Section-2/Section-2";
import Section3 from "./components/Section-3/Section-3";
import Section4 from "./components/Section-4/Section-4";
import Section5 from "./components/Section-5/Section-5";
import Section6 from "./components/Section-6/Section-6";
import Section7 from "./components/Section-7/Section-7";
import Section8 from "./components/Section-8/Section-8";
import Section9 from "./components/Section-9/Section-9";
import Section10 from "./components/Section-10/Section-10";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <div className="chatIcon">
        <i class="fa fa-comments"></i>
      </div> */}
      <Navbar />
      <Banner />
      <Companies />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section6 />
      <Section5 />
      <Section7 />
      <Section8 />
      <Section9 />
     <Section10 />
        <Footer />
    </div>
  );
}

export default App;
