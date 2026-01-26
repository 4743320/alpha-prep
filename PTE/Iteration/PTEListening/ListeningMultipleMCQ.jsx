// import { useState } from "react";
// import "./ListeningMCQ.css";

// export default function PTEListeningMCQMultiple() {
//   const [answers, setAnswers] = useState([]);

//   const options = [
//     "Modern companies are not using them.",
//     "Skilled people are not attracted to them.",
//     "Ordinary people are not able to answer them.",
//     "High levels of ability are needed to understand them.",
//   ];

//   const toggleAnswer = (opt) => {
//     setAnswers((prev) => {
//       // remove if already selected
//       if (prev.includes(opt)) {
//         return prev.filter((a) => a !== opt);
//       }

//       // limit to 2 selections
//       if (prev.length === 2) {
//         return prev;
//       }

//       return [...prev, opt];
//     });
//   };

//   return (
//     <div className="pte-page">
//       <div className="pte-container">
//         {/* Header */}
//         <div className="pte-header">
//           <span className="pte-back">← Go back</span>
//           <span className="pte-progress">Listening • 2 of 5 questions</span>
//         </div>

//         {/* Title */}
//         <h1 className="pte-title">Multiple choice, multiple answers</h1>
//         <p className="pte-subtitle">
//           Listen to the recording and select all the responses that are correct.
//         </p>

//         {/* Audio (same place as passage) */}
//         <div className="pte-card">
//           <div className="pte-audio">
//             <button className="pte-play">▶</button>
//             <div className="pte-audio-bar"></div>
//             <div className="pte-volume">🔊</div>
//           </div>
//         </div>

//         {/* Question + Options */}
//         <div className="pte-card">
//           <h2 className="pte-question">
//             According to the speaker, why do trick interview questions fail?
//           </h2>

//           {options.map((opt) => (
//             <label key={opt} className="pte-option">
//               <input
//                 type="checkbox"
//                 checked={answers.includes(opt)}
//                 onChange={() => toggleAnswer(opt)}
//               />
//               <span>{opt}</span>
//             </label>
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="pte-footer">
//           <button className="pte-next" disabled={answers.length !== 2}>
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import "./ListeningMCQ.css";

export default function PTEListeningMCQ() {
  const [answers, setAnswers] = useState([]);


  const options = [
    "Modern companies are not using them.",
    "Skilled people are not attracted to them.",
    "Ordinary people are not able to answer them.",
    "High levels of ability are needed to understand them.",
  ];
  const toggleAnswer = (opt) => {
  setAnswers((prev) => {
    if (prev.includes(opt)) {
      return prev.filter((a) => a !== opt);
    }

    if (prev.length === 2) {
      return prev; // max 2 selections
    }

    return [...prev, opt];
  });
};


  return (
    <div className="pte-page">
      <div className="pte-container">
        {/* Header */}
        <div className="pte-header">
          <span className="pte-back">← Go back</span>
          <span className="pte-progress">Listening • 2 of 5 questions</span>
        </div>

        {/* Title */}
<h1 className="pte-title">Multiple choice, multiple answers</h1>

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
  type="checkbox"
  checked={answers.includes(opt)}
  onChange={() => toggleAnswer(opt)}
/>

              <span>{opt}</span>
            </label>
          ))}
        </div>

        {/* Footer */}
        <div className="pte-footer">
          <button className="pte-next" disabled={answers.length !== 2}>

            Next
          </button>
        </div>
      </div>
    </div>
  );
}
