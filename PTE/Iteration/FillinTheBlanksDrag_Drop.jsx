// // PTEFillInTheBlanksDrag.jsx
// import { useState } from "react";
// import "../Iteration/FillInTheBlanks.css";
// import './FIB_drag_drop.css'

// export default function PTEFillInTheBlanksDrag({ textParts, blanks, onBack }) {
//   // Track answers for each blank
//   const [answers, setAnswers] = useState(Array(blanks.length).fill(""));
//   // Track which words are still available to drag
//   const [availableWords, setAvailableWords] = useState(
//     [].concat(...blanks)
//   );

//   const handleDrop = (blankIndex, word) => {
//     // Update the answer for this blank
//     const newAnswers = [...answers];
//     newAnswers[blankIndex] = word;
//     setAnswers(newAnswers);

//     // Remove word from availableWords
//     setAvailableWords((prev) => prev.filter((w) => w !== word));
//   };

//   const handleDragStart = (e, word) => {
//     e.dataTransfer.setData("text/plain", word);
//   };

//   const handleBlankDrop = (e, index) => {
//     e.preventDefault();
//     const word = e.dataTransfer.getData("text");
//     if (word) handleDrop(index, word);
//   };

//   const handleBlankDragOver = (e) => {
//     e.preventDefault(); // Allow drop
//   };

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
//           <span className="pte-progress">
//             Fill in the blanks • {blanks.length} blanks
//           </span>
//         </div>

//         {/* Title */}
//         <h1 className="pte-title">Fill in the blanks</h1>
//         <p className="pte-subtitle">
//           Drag the correct word from the bottom and drop it into the blank.
//         </p>

//         {/* Text with blanks */}
//         <div className="pte-card pte-transcript">
//           {textParts.map((part, i) => (
//             <span key={i} className="pte-text-part">
//               {part}
//               {i < blanks.length && (
//                 <span
//                   className="pte-blank-drag"
//                   onDrop={(e) => handleBlankDrop(e, i)}
//                   onDragOver={handleBlankDragOver}
//                 >
//                   {answers[i] || "______"}
//                 </span>
//               )}
//             </span>
//           ))}
//         </div>

//         {/* Word bank */}
//         <div className="pte-word-bank">
//           {availableWords.map((word, idx) => (
//             <span
//               key={idx}
//               className="pte-word"
//               draggable
//               onDragStart={(e) => handleDragStart(e, word)}
//             >
//               {word}
//             </span>
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="pte-footer">
//           <button className="pte-next" disabled={answers.includes("")}>
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// PTEFillInTheBlanks.jsx
import { useState } from "react";
// import "../Iteration/FillInTheBlanks.css";
import "./FillInTheBlanks.css";
import './FIB_drag_drop.css'


export default function PTEFillInTheBlanks() {
  // ------------------------
  // Dummy filler text
  // ------------------------
  const textParts = [
    "Lorem ipsum dolor sit amet, ",
    ", consectetur adipiscing elit. Sed ",
    " nisl felis, ",
    " vitae libero nec, ",
    " malesuada sapien."
  ];

  const blanks = [
    ["word1", "word2", "word3"],
    ["word4", "word5", "word6"],
    ["word7", "word8", "word9"],
    ["word10", "word11", "word12"]
  ];

  const [answers, setAnswers] = useState(Array(blanks.length).fill(""));

  // ------------------------
  // Drag-and-drop handlers
  // ------------------------
  const handleDrop = (index, e) => {
    const word = e.dataTransfer.getData("text");
    const newAnswers = [...answers];
    newAnswers[index] = word;
    setAnswers(newAnswers);
  };

  const handleDragStart = (word, e) => {
    e.dataTransfer.setData("text", word);
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  // Flatten all words for the bank
  const wordBank = blanks.flat();

  return (
    <div className="pte-page">
      <div className="pte-container">
        <h1 className="pte-title">Drag-and-Drop Fill in the Blanks</h1>
        <p className="pte-subtitle">Drag words from the bottom into the blanks above.</p>

        <div className="pte-card pte-transcript">
          {textParts.map((part, i) => (
            <span key={i} className="pte-text-part">
              {part}
              {i < blanks.length && (
                <span
                  className="pte-blank-drag"
                  onDrop={(e) => handleDrop(i, e)}
                  onDragOver={allowDrop}
                >
                  {answers[i] || "______"}
                </span>
              )}
            </span>
          ))}
        </div>

        <div className="pte-word-bank">
          {wordBank.map((word, idx) => (
            <span
              key={idx}
              className="pte-word"
              draggable
              onDragStart={(e) => handleDragStart(word, e)}
            >
              {word}
            </span>
          ))}
        </div>

        <div className="pte-footer">
          <button className="pte-next" disabled={answers.includes("")}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
