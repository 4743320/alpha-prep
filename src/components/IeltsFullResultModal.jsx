import React from "react";
import "../styles/IeltsFullResultModal.css"; // CSS for the modal

// rafce → React Arrow Function Component Export
const ResultModal = ({ isOpen, onClose, result }) => {
  /**
   * If modal is NOT open
   * → return null so React renders nothing
   * (important: avoids unnecessary DOM elements)
   */
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>IELTS Test Result</h2>

        {/* Listening section */}
        <div className="modal-section">
          <p>
            <strong>Listening Score:</strong> {result.listeningScore}/40
          </p>
          <p>
            <strong>Listening Band:</strong> {result.listeningBand}
          </p>
        </div>

        {/* Reading section */}
        <div className="modal-section">
          <p>
            <strong>Reading Score:</strong> {result.readingScore}/40
          </p>
          <p>
            <strong>Reading Band:</strong> {result.readingBand}
          </p>
        </div>

        {/* Overall */}
        <div className="modal-section">
          <p>
            <strong>Overall Band:</strong> {result.overallBand}
          </p>
        </div>

        {/* Close button */}
        <button className="modal-btn" onClick={onClose}>
          Close(View Details in Profile)
        </button>
      </div>
    </div>
  );
};

export default ResultModal;
