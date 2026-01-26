import { useState } from "react";
import "./ListeningMCQ.css";

export default function PTEListeningMCQ() {
  const [answer, setAnswer] = useState("");

  const options = [
    "Modern companies are not using them.",
    "Skilled people are not attracted to them.",
    "Ordinary people are not able to answer them.",
    "High levels of ability are needed to understand them.",
  ];

  return (
    <div className="pte-page">
      <div className="pte-container">
        {/* Header */}
        <div className="pte-header">
          <span className="pte-back">← Go back</span>
          <span className="pte-progress">Listening • 2 of 5 questions</span>
        </div>

        {/* Title */}
        <h1 className="pte-title">Multiple choice, single answer</h1>
        <p className="pte-subtitle">
          Listen to the recording and answer the multiple-choice question by selecting the correct response.
        </p>

        {/* 🔊 Audio Player (replaces passage) */}
        <div className="pte-audio">
          <button className="pte-play">▶</button>
          <div className="pte-audio-bar"></div>
          <div className="pte-volume">🔊</div>
        </div>

        {/* Question */}
        <div className="pte-card">
          <h2 className="pte-question">
            According to the speaker, why do trick interview questions fail?
          </h2>

          {options.map((opt) => (
            <label key={opt} className="pte-option">
              <input
                type="radio"
                name="answer"
                value={opt}
                checked={answer === opt}
                onChange={() => setAnswer(opt)}
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>

        {/* Footer */}
        <div className="pte-footer">
          <button className="pte-next" disabled={!answer}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
