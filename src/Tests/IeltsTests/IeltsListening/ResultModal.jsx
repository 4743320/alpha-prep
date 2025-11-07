import React from "react";
import "../../../styles/resultmodallist.css";

// 🎯 Function to convert raw score (out of 40) → IELTS Band
const getBandFromScore = (score) => {
  if (score >= 39) return 9;
  if (score >= 37) return 8.5;
  if (score >= 35) return 8;
  if (score >= 32) return 7.5;
  if (score >= 30) return 7;
  if (score >= 26) return 6.5;
  if (score >= 23) return 6;
  if (score >= 18) return 5.5;
  if (score >= 16) return 5;
  if (score >= 13) return 4.5;
  if (score >= 11) return 4;
  return 3.5; // fallback if below 11
};

const ResultModal = ({ totalScore, partScores, onClose }) => {
  const band = getBandFromScore(totalScore);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
        <h2>🎧 IELTS Listening Result</h2>

        <p><strong>Total Correct:</strong> {totalScore} / 40</p>
        <p><strong>Estimated Band:</strong> {band}</p>

        <hr />

        <div className="part-scores" >
          {Object.entries(partScores).map(([part, score]) => (
            <p key={part}>
              <strong>{part.toUpperCase()}:</strong> {score} / 10
            </p>
          ))}
          
        </div>

        
      </div>
    </div>
  );
};

export default ResultModal;
