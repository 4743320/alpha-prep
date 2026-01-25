// components/PTEReadingMCQMultiple.jsx
import { useState } from "react";
import "./PTEReadingMCQ.css";

export default function PTEReadingMCQMultiple({ questionData, onBack }) {
  const [answers, setAnswers] = useState([]); // multiple answers

  if (!questionData) return null; // safety check

  const { passage, question, options } = questionData;

  const toggleAnswer = (key) => {
    setAnswers((prev) =>
      prev.includes(key)
        ? prev.filter((a) => a !== key) // uncheck
        : [...prev, key] // check
    );
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
            Reading • 1 of 1 question
          </span>
        </div>

        {/* Title */}
        <h1 className="pte-title">Multiple choice, multiple answers</h1>
        <p className="pte-subtitle">
          Read the passage and select all correct answers.
        </p>

        {/* Passage */}
        <div className="pte-card">
          <div className="pte-passage">{passage}</div>
        </div>

        {/* Question */}
        <div className="pte-card">
          <h2 className="pte-question">{question}</h2>

          {Object.entries(options).map(([key, value]) => (
            <label key={key} className="pte-option">
              <input
                type="checkbox"
                value={key}
                checked={answers.includes(key)}
                onChange={() => toggleAnswer(key)}
              />
              <span>
                {key}. {value}
              </span>
            </label>
          ))}
        </div>

        {/* Footer */}
        <div className="pte-footer">
          <button className="pte-next" disabled={answers.length === 0}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
