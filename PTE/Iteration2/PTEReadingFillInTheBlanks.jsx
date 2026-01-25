// PTEFillInTheBlanks.jsx
import { useState } from "react";
import "../Iteration/FillInTheBlanks.css";

export default function PTEFillInTheBlanks({ textParts, blanks, onBack }) {
  const [answers, setAnswers] = useState(Array(blanks.length).fill(""));

  const handleSelect = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <div className="pte-page">
      <div className="pte-container">
        {/* Header */}
        <div className="pte-header">
          {onBack && (
            <span className="pte-back" onClick={onBack}>
              ← Go back
            </span>
          )}
          <span className="pte-progress">
            Fill in the blanks • {blanks.length} blanks
          </span>
        </div>

        {/* Title */}
        <h1 className="pte-title">Fill in the blanks</h1>
        <p className="pte-subtitle">
          Below is a text with blanks. Click on each blank and select the correct answer.
        </p>

        {/* Text with dropdown blanks */}
        <div className="pte-card pte-transcript">
          {textParts.map((part, i) => (
            <span key={i} className="pte-text-part">
              {part}
              {i < blanks.length && (
                <select
                  className="pte-blank"
                  value={answers[i]}
                  onChange={(e) => handleSelect(i, e.target.value)}
                >
                  <option value="" disabled>
                    Choose
                  </option>
                  {blanks[i].map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              )}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="pte-footer">
          <button className="pte-next" disabled={answers.includes("")}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
