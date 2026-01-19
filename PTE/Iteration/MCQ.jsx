// PTEReadingMCQ.jsx
import { useState } from "react";
import "./MCQ.css";

export default function PTEReadingMCQ() {
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
          <span className="pte-progress">Reading • 3 of 5 questions</span>
        </div>

        {/* Title */}
        <h1 className="pte-title">Multiple choice, single answer</h1>
        <p className="pte-subtitle">
          Read the text and answer the multiple-choice question by selecting the correct response. Only one response is correct.
        </p>

        {/* Passage */}
        <div className="pte-card">
          <div className="pte-passage">
            Trick interview questions are annoying. You would have to be a bit strange to feel comfortable with them. But ever since Microsoft decided to use ‘brain teaser questions’ in recruitment interviews back in the 1990s, they’ve been growing in popularity. They don’t necessarily work though. They also actively discourage good candidates and have a long-term effect on a company’s ability to attract talent, as reported in research that came out in October. After putting 360 participants through job interviews, the researchers found that the most qualified workers preferred not to attend interviews that use trick questions because they personally see them as unfair and are designed to make them fail.
          </div>
        </div>

        {/* Question */}
        <div className="pte-card">
          <h2 className="pte-question">
            According to the research, trick interview questions fail for which reason?
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
          <button className="pte-next" disabled={!answer}>Next</button>
        </div>
      </div>
    </div>
  );
}

