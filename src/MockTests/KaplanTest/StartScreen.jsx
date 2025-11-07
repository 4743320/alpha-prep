import React from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/startscreen.css'

const StartScreen = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/kap-e-m1");
  };

  return (
    <div className="start-container">
      <h1 className="title">SAT Practice Test</h1>
      <p className="description">
        Get ready to take a full SAT-style practice test.
        Once you start, you’ll move through English and Math modules,
        with a short break in between. Your scores will be shown at the end.
      </p>
      <button className="start-btn" onClick={handleStart}>
        Start Test
      </button>
    </div>
  );
};

export default StartScreen;
