// import { useState, useRef } from "react";
// import '../../Iteration2/PTEReadingMCQ.css';
// import './PTEListeningMMCQ.css'

// export default function PTEListeningMCQMultiple({ questionData, onBack }) {
//   const [answers, setAnswers] = useState([]); // array of selected choices
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef(null);

//   if (!questionData) return null;

//   const { audio, question, options } = questionData;

//   // Play / Pause audio
//   const handlePlay = () => {
//     if (!audioRef.current) return;

//     if (audioRef.current.paused) {
//       audioRef.current.play();
//       setIsPlaying(true);
//     } else {
//       audioRef.current.pause();
//       setIsPlaying(false);
//     }
//   };

//   // Audio ended
//   const handleEnded = () => {
//     setIsPlaying(false);
//   };

//   // Checkbox change
//   const handleCheckboxChange = (key) => {
//     if (answers.includes(key)) {
//       // remove if already selected
//       setAnswers(answers.filter((a) => a !== key));
//     } else {
//       // add if not selected
//       setAnswers([...answers, key]);
//     }
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
//           <span className="pte-progress">Listening • 1 of 1 question</span>
//         </div>

//         {/* Title */}
//         <h1 className="pte-title">Multiple choice, multiple answers</h1>
//         <p className="pte-subtitle">
//           Listen to the recording and select all correct answers.
//         </p>

//         {/* 🔊 Audio Player */}
//         <div className="pte-audio">
//           <button className="pte-play" onClick={handlePlay}>
//             {isPlaying ? "⏸" : "▶"}
//           </button>

//           <audio
//             ref={audioRef}
//             src={audio}
//             onEnded={handleEnded}
//           />

//           <div className="pte-audio-bar">
//             <div className={`pte-audio-progress ${isPlaying ? "playing" : ""}`}></div>
//           </div>

//           <div className="pte-volume">🔊</div>
//         </div>

//         {/* Question */}
//         <div className="pte-card">
//           <h2 className="pte-question">{question}</h2>

//           {Object.entries(options).map(([key, value]) => (
//             <label key={key} className="pte-option">
//                         <input
//                 type="checkbox"
//                 value={key}
//                 checked={answers.includes(key)}
//                 onChange={() => toggleAnswer(key)}
//               />

//               <span>
//                 {key}. {value}
//               </span>
//             </label>
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="pte-footer">
//           <button className="pte-next" disabled={answers.length === 0}>
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useRef } from "react";
import "../../Iteration/PTEListening/ListeningMCQ.css";

export default function PTEListeningMCQMultiple({ questionData, onBack }) {
  const [answers, setAnswers] = useState([]); // selected answers
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  if (!questionData) return null;

  const { audio, question, options } = questionData;

  // Play / Pause audio
  const handlePlay = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Audio ended
  const handleEnded = () => {
    setIsPlaying(false);
  };

  // Checkbox change
  const handleCheckboxChange = (key) => {
    if (answers.includes(key)) {
      setAnswers(answers.filter((a) => a !== key));
    } else {
      setAnswers([...answers, key]);
    }
  };

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
          <span className="pte-progress">Listening • 1 of 1 question</span>
        </div>

        {/* Title */}
        <h1 className="pte-title">Multiple choice, multiple answers</h1>
        <p className="pte-subtitle">
          Listen to the recording and select all correct answers.
        </p>

        {/* 🔊 Audio Player */}
        <div className="pte-audio">
          <button className="pte-play" onClick={handlePlay}>
            {isPlaying ? "⏸" : "▶"}
          </button>

          <audio
            ref={audioRef}
            src={audio} // audio path from public folder, e.g., "/Audio/test3_p1.mp3"
            onEnded={handleEnded}
          />

          <div className="pte-audio-bar">
            <div className={`pte-audio-progress ${isPlaying ? "playing" : ""}`}></div>
          </div>

          <div className="pte-volume">🔊</div>
        </div>

        {/* Question */}
        <div className="pte-card">
          <h2 className="pte-question">{question}</h2>

          {Object.entries(options).map(([key, value]) => (
            <label key={key} className="pte-option">
              <input
                type="checkbox"
                value={key}
                checked={answers.includes(key)}
                onChange={() => handleCheckboxChange(key)}
              />
              <span>
                {key}. {value}
              </span>
            </label>
          ))}
        </div>

        {/* Footer */}
        <div className="pte-footer">
          <button className="pte-next" disabled={answers.length === 0}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
