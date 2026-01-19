// PTEFillInTheBlanks.jsx
import { useState } from "react";
import "./FillInTheBlanks.css";

export default function PTEFillInTheBlanks() {
  // Example text and blanks positions (indexes of blanks)
  const textParts = [
    "Nutrition scientists are constantly making new discoveries. For this reason, we need to ",
    " our recommendations for healthy eating from time to time. However, nutrition is an art ",
    " a science. It's an art because it requires ",
    " to develop a healthy eating plan for people who differ in their food preferences, beliefs and culture, let alone in their nutritional needs, according to their genes and life stage. ",
    " we discover more about how our genes and our environment interact, it's becoming increasingly difficult to provide a single ",
    " of dietary recommendations that will be suitable for everyone."
  ];

  const blanks = [
    ["update", "ignore", "discard"],
    ["rather than", "and", "as well as"],
    ["knowledge", "intuition", "opinion"],
    ["As", "Once", "Although"],
    ["plan", "summary", "list"]
  ];

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
          <span className="pte-back">← Go back</span>
          <span className="pte-progress">Reading • 1 of 5 questions</span>
        </div>

        {/* Title */}
        <h1 className="pte-title">Fill in the blanks</h1>
        <p className="pte-subtitle">
          Below is a text with blanks. Click on each blank, a list of choices will appear. Select the appropriate answer choice for each blank.
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
                  <option value="" disabled>Choose</option>
                  {blanks[i].map((option, idx) => (
                    <option key={idx} value={option}>{option}</option>
                  ))}
                </select>
              )}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="pte-footer">
          <button className="pte-next">Next question</button>
        </div>
      </div>
    </div>
  );
}

