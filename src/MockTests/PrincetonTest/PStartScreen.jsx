import React from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/startscreen.css'

const PStartScreen = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/pri-e-m1");
  };

  return (
    <div className="start-container">
      <h1 className="title">Princeton Official - SAT Practice Test</h1>
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

export default PStartScreen;
