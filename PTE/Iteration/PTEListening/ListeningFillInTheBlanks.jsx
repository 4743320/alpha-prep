import { useState } from "react";
import "./ListeningFIB.css";

export default function PTEListeningFillInTheBlanks() {
  const textParts = [
    "Nutrition scientists are constantly making new discoveries. For this reason, we need to ",
    " our recommendations for healthy eating from time to time. However, nutrition is an art ",
    " a science. It's an art because it requires ",
    " to develop a healthy eating plan for people who differ in their food preferences, beliefs and culture, let alone in their nutritional needs, according to their genes and life stage. ",
    " we discover more about how our genes and our environment interact, it's becoming increasingly difficult to provide a single ",
    " of dietary recommendations that will be suitable for everyone."
  ];

  const [answers, setAnswers] = useState(
    Array(textParts.length - 1).fill("")
  );

  const handleChange = (index, value) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

  return (
    <div className="pte-page">
      <div className="pte-container">
        {/* Header */}
        <div className="pte-header">
          <span className="pte-back">← Go back</span>
          <span className="pte-progress">Listening • 1 of 5 questions</span>
        </div>

        {/* Title */}
        <h1 className="pte-title">Fill in the blanks</h1>
        <p className="pte-subtitle">
          Listen to the recording and fill in the blanks by typing the missing words.
        </p>

        {/* 🔊 Audio Player */}
        <div className="pte-card">
          <div className="pte-audio">
            <button className="pte-play">▶</button>
            <div className="pte-audio-bar"></div>
            <div className="pte-volume">🔊</div>
          </div>
        </div>

        {/* Text with input blanks */}
        <div className="pte-card pte-transcript">
          {textParts.map((part, i) => (
            <span key={i}>
              {part}
              {i < answers.length && (
                <input
                  type="text"
                  className="pte-blank-input"
                  value={answers[i]}
                  onChange={(e) => handleChange(i, e.target.value)}
                  placeholder="______"
                />
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
