import React, { useState } from "react";

export default function FillInBlank({ question, onAnswer }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    onAnswer(input.trim().toLowerCase() === question.answer.trim().toLowerCase() ? 1 : 0);
  };

  return (
    <div className="question-container">
      <p className="question-text">{question.question}</p>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="text-input"
      />
      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
    </div>
  );
}
