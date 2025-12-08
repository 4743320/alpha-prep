import React from "react";
import "../styles/resultmodallist.css"

// 🎯 Function to convert raw score (out of total) → IELTS Band
const getBandFromScore = (score, total) => {
  const percentage = (score / total) * 100;
  if (percentage >= 90) return 9;
  if (percentage >= 80) return 8;
  if (percentage >= 70) return 7;
  if (percentage >= 60) return 6;
  if (percentage >= 50) return 5;
  if (percentage >= 40) return 4;
  if (percentage >= 30) return 3;
  if (percentage >= 20) return 2;
  return 1;
};

const IELTSResultModal = ({ isOpen, testname, score, total, partScores, onClose }) => {
  if (!isOpen) return null;

  const band = getBandFromScore(score, total);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          Close
        </button>
{/* 🎧 */}
{/* <h2>🎧 IELTS Listening Result</h2>
<h2>📖 IELTS Reading Result</h2>
<h2>✍️ IELTS Writing Result</h2> */}
        <h2> {testname ? testname : "IELTS Test"} Result</h2>

        <p><strong>Total Correct:</strong> {score} / {total}</p>
        <p><strong>Estimated Band:</strong> {band}</p>

        {partScores && Object.keys(partScores).length > 0 && (
          <>
            <hr />
            <div className="part-scores">
              {Object.entries(partScores).map(([part, partScore]) => (
                <p key={part}>
                  <strong>{part.toUpperCase()}:</strong> {partScore} / 10
                </p>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default IELTSResultModal;
