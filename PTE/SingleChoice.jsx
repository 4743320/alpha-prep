import React, { useState } from "react";

export default function SingleChoice({ question, onAnswer }) {
  const [selected, setSelected] = useState("");

  const handleSubmit = () => {
    onAnswer(selected === question.answer ? 1 : 0);
  };

  return (
    <div className="question-container">
      <p className="question-text">{question.question}</p>
      {question.options.map((opt) => (
        <label key={opt} className="option">
          <input
            type="radio"
            name={question.id}
            value={opt}
            onChange={(e) => setSelected(e.target.value)}
          />
          {opt}
        </label>
      ))}
      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
    </div>
  );
}
