import React, { useState } from "react";

export default function MultipleChoice({ question, onAnswer }) {
  const [selected, setSelected] = useState([]);

  const handleChange = (option) => {
    setSelected(prev =>
      prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]
    );
  };

  const handleSubmit = () => {
    const correct = JSON.stringify(selected.sort()) === JSON.stringify(question.answer.sort());
    onAnswer(correct ? 1 : 0);
  };

  return (
    <div className="question-container">
      <p className="question-text">{question.question}</p>
      {question.options.map((opt) => (
        <label key={opt} className="option">
          <input
            type="checkbox"
            value={opt}
            checked={selected.includes(opt)}
            onChange={() => handleChange(opt)}
          />
          {opt}
        </label>
      ))}
      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
    </div>
  );
}
