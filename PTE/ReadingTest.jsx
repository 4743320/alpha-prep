import React, { useState } from "react";
import { readingPassages } from "./pte";
import SingleChoice from "./SingleChoice";
import MultipleChoice from './MulitpleChoice';
import FillInBlank from "./FillinBlank";
// import ReorderParagraph from "";

export default function ReadingTest() {
  const [score, setScore] = useState(0);
  const passage = readingPassages[0]; // MVP: single passage

  const handleAnswer = (points) => {
    setScore(prev => prev + points);
  };

  return (
    <div className="reading-test">
      <h2 className="passage-title">{passage.title}</h2>
      <p className="passage-text">{passage.text}</p>

      {passage.questions.map((q) => {
        if (q.type === "single_choice") return <SingleChoice key={q.id} question={q} onAnswer={handleAnswer} />;
        if (q.type === "multiple_choice") return <MultipleChoice key={q.id} question={q} onAnswer={handleAnswer} />;
        if (q.type === "fill_in_blank") return <FillInBlank key={q.id} question={q} onAnswer={handleAnswer} />;
        // if (q.type === "reorder_paragraph") return <ReorderParagraph key={q.id} question={q} onAnswer={handleAnswer} />;
        return null;
      })}

      <div className="score-container">
        Total Score: {score} / {passage.questions.length}
      </div>
    </div>
  );
}
