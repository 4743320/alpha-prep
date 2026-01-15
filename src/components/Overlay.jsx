// Overlay.jsx
import React from "react";
import "../styles/Overlay.css";

const Overlay = ({ show, children }) => {
  if (!show) return null;

  return (
    <div className="overlay">
      <div className="overlay-content">
        {children}
      </div>
    </div>
  );
};

export default Overlay;
