// src/components/TestLogos.jsx
import React from "react";
import IELTSLogo from "../assets/ielts.png";
import SATLogo from "../assets/sat.png";
// import TOEFLLogo from "../assets/toefl.png";
import '../styles/testlogos.css'

const TestLogos = () => {
  return (
    <div className="test-logos">
      {/* <h3>Trusted by students worldwide</h3> */}
      <div className="logo-row">
        <img src={IELTSLogo} alt="IELTS" />
        <img src={SATLogo} alt="SAT" />
        {/* <img src={TOEFLLogo} alt="TOEFL" /> */}
      </div>
    </div>
  );
};

export default TestLogos;
