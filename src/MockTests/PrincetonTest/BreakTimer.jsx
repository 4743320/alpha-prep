import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/breaktimer.css'
const BreakTimer = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(10 * 60);

  useEffect(() => {
    if (timeLeft <= 0) {
      navigate("/pri-m-m1");
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, navigate]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };
// 🌴 Take a Breather
  return (
    <div className="break-screen">
      <div className="break-box">
        <h1 className="break-title">Break PRINCETON MOCK TEST </h1>
        <p className="break-message">
          Your next module will begin in <span className="break-timer">{formatTime(timeLeft)}</span>
        </p>
        <button className="break-button" onClick={() => navigate("/pri-m-m1")}>
          End Break & Continue →
        </button>
      </div>
    </div>
  );
};

export default BreakTimer;
