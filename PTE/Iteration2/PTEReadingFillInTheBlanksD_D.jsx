
// import { useState } from "react";
// import "../Iteration/FillInTheBlanks.css";
// // import '../Iteration/FIB_drag_drop.css';

// export default function PTEFillInTheBlanksDrag({
//   textParts,
//   blanksCount,
//   options,
//   onBack
// }) {
//   const [answers, setAnswers] = useState(Array(blanksCount).fill(""));
//   const [availableWords, setAvailableWords] = useState(options);

//   const handleDragStart = (e, word) => {
//     e.dataTransfer.setData("text/plain", word);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e, blankIndex) => {
//   e.preventDefault();
//   const word = e.dataTransfer.getData("text/plain");  // ✅ match the setData
//   if (!word) return;
//   if (answers[blankIndex]) return;

//   setAnswers(prev => {
//     const updated = [...prev];
//     updated[blankIndex] = word;
//     return updated;
//   });

//   setAvailableWords(prev => prev.filter(w => w !== word));
// };;

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
//             Fill in the blanks • {blanksCount} blanks
//           </span>
//         </div>

//         {/* Title */}
//         <h1 className="pte-title">Fill in the blanks</h1>
//         <p className="pte-subtitle">
//           Drag the correct word from the bottom and drop it into the blank.
//         </p>

//         {/* Passage */}
//         <div className="pte-card pte-transcript">
//           {textParts.map((part, i) => (
//             <span key={i} className="pte-text-part">
//               {part}
//               {i < blanksCount && (
//                 <span
//                   className={`pte-blank-drag ${
//                     answers[i] ? "filled" : ""
//                   }`}
//                   onDragOver={handleDragOver}
//                   onDrop={(e) => handleDrop(e, i)}
//                 >
//                   {answers[i] || "______"}
//                 </span>
//               )}
//             </span>
//           ))}
//         </div>

//         {/* Word Bank */}
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
import { useState } from "react";
import "../Iteration/FillInTheBlanks.css";
import '../Iteration/FIB_drag_drop.css';

export default function PTEReadingFillInTheBlanksDrag({
  textParts,
  blanksCount,
  options,
  onBack
}) {
  const [answers, setAnswers] = useState(Array(blanksCount).fill(""));
  const [availableWords, setAvailableWords] = useState(options);

  const handleDragStart = (e, word) => {
    e.dataTransfer.setData("text/plain", word);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, blankIndex) => {
    e.preventDefault();
    const word = e.dataTransfer.getData("text");

    if (!word) return; // prevent empty drop
    if (answers[blankIndex]) return; // prevent overwriting

    // Place word in the blank
    setAnswers((prev) => {
      const updated = [...prev];
      updated[blankIndex] = word;
      return updated;
    });

    // Remove word from available bank
    setAvailableWords((prev) => prev.filter((w) => w !== word));
  };

  const handleResetBlank = (blankIndex) => {
    const word = answers[blankIndex];
    if (!word) return;

    // Remove from blank and put back in bank
    setAnswers((prev) => {
      const updated = [...prev];
      updated[blankIndex] = "";
      return updated;
    });

    setAvailableWords((prev) => [...prev, word]);
  };

  const allFilled = !answers.includes("");

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
            Fill in the blanks • {blanksCount} blanks
          </span>
        </div>

        {/* Title */}
        <h1 className="pte-title">Fill in the blanks</h1>
        <p className="pte-subtitle">
          Drag the correct word from the bottom and drop it into the blank.
        </p>

        {/* Passage with blanks */}
        <div className="pte-card pte-transcript">
          {textParts.map((part, i) => (
            <span key={i} className="pte-text-part">
              {part}
              {i < blanksCount && (
                <span
                  className={`pte-blank-drag ${answers[i] ? "filled" : ""}`}
                  onDragOver={handleDragOver}
                  onDrop={(e) => handleDrop(e, i)}
                  onClick={() => handleResetBlank(i)}
                  title={answers[i] ? "Click to remove" : ""}
                >
                  {answers[i] || "______"}
                </span>
              )}
            </span>
          ))}
        </div>

        {/* Word Bank */}
        <div className="pte-word-bank">
          {availableWords.map((word, idx) => (
            <span
              key={idx}
              className="pte-word"
              draggable
              onDragStart={(e) => handleDragStart(e, word)}
            >
              {word}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="pte-footer">
          <button
            className="pte-next"
            disabled={!allFilled}
            onClick={() => alert("Submitted: " + answers.join(", "))}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
