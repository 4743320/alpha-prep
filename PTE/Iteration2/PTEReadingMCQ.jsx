// import React, { useState } from 'react'
// import './PTEReadingMCQ.css'

// const PTEReadingMCQ = ({questionData, onBack}) => {
//  const [selectedAnswer, setSelectedAnswer] = useState("");

//   if (!questionData) return null; // safety check

//   const { question, passage, options } = questionData;

//   return (
//     <div className="pte-page">
//       <div className="pte-container">
//         {/* Header */}
//         <div className="pte-header">
//           {onBack && (
//             <span className="pte-back" onClick={onBack}>
//               ← Go back
//             </span>
//           )}
//           <span className="pte-progress">Reading • 1 of 1 question</span>
//         </div>

//         {/* Question Title */}
//         <h1 className="pte-title">Multiple Choice, Single Answer</h1>
//         <p className="pte-subtitle">
//           Read the passage and answer the question by selecting the correct option.
//         </p>

//         {/* Passage */}
//         <div className="pte-card">
//           <div className="pte-passage">{passage}</div>
//         </div>

//         {/* Question */}
//         <div className="pte-card">
//           <h2 className="pte-question">{question}</h2>

//           {Object.entries(options).map(([key, value]) => (
//             <label key={key} className="pte-option">
//               <input
//                 type="radio"
//                 name="answer"
//                 value={key}
//                 checked={selectedAnswer === key}
//                 onChange={() => setSelectedAnswer(key)}
//               />
//               <span>{`${key}. ${value}`}</span>
//             </label>
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="pte-footer">
//           <button className="pte-next" disabled={!selectedAnswer}>
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default PTEReadingMCQ

// components/PTEReadingMCQ.jsx
import { useState } from "react";
import "./PTEReadingMCQ.css";

export default function PTEReadingMCQ({ questionData, onBack }) {
  const [answer, setAnswer] = useState("");

  if (!questionData) return null; // safety check

  const { passage, question, options } = questionData;

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
        <h1 className="pte-title">Multiple choice, single answer</h1>
        <p className="pte-subtitle">
          Read the passage and select the correct answer.
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
                type="radio"
                name="answer"
                value={key}
                checked={answer === key}
                onChange={() => setAnswer(key)}
              />
              <span>
                {key}. {value}
              </span>
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
