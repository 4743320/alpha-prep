
// import { useState, useRef } from "react";
// import "../../Iteration/PTEListening/ListeningMCQ.css";

// export default function PTEListeningHighlightCorrectSummary({ questionData, onBack }) {
//   const [answer, setAnswer] = useState("");
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef(null);

//   if (!questionData) return null;

//   const { audio, question, options } = questionData;

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

//   const handleEnded = () => setIsPlaying(false);

//   return (
//     <div className="pte-page">
//       <div className="pte-container">
//         {onBack && (
//           <span className="pte-back" onClick={onBack}>
//             ← Go back
//           </span>
//         )}

//         <h1 className="pte-title">Highlight Correct Summary</h1>
//         <p className="pte-subtitle">You will hear a recording. Click on the paragraph that best relates to the recording.</p>

//         {/* Custom audio player */}
//         <div className="pte-audio">
//           <button className="pte-play" onClick={handlePlay}>
//             {isPlaying ? "⏸" : "▶"}
//           </button>
//           <div className="pte-audio-bar">
//             <div className={`pte-audio-progress ${isPlaying ? "playing" : ""}`}></div>
//           </div>
//           <audio ref={audioRef} src={audio} onEnded={handleEnded} />
//         </div>

//         <div className="pte-card">
//           <h2 className="pte-question">{question}</h2>
//           {Object.entries(options).map(([key, value]) => (
//             <label key={key} className="pte-option">
//               <input
//                 type="radio"
//                 name="answer"
//                 value={key}
//                 checked={answer === key}
//                 onChange={() => setAnswer(key)}
//               />
//               <span>{key}. {value}</span>
//             </label>
//           ))}
//         </div>
        
//       </div>
//     </div>
//   );
// }

import { useState, useRef } from "react";
import "../../Iteration/PTEListening/ListeningMCQ.css";

export default function PTEListeningHighlightCorrectSummary({ questionData, onBack }) {
  const [answer, setAnswer] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  if (!questionData) return null;

  const { audio, question, options } = questionData;

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

  const handleEnded = () => setIsPlaying(false);

  return (
    <div className="pte-page">
      <div className="pte-container">
        {/* Header */}
        {onBack && (
          <span className="pte-back" onClick={onBack}>
            ← Go back
          </span>
        )}

        <h1 className="pte-title">Highlight Correct Summary</h1>
        <p className="pte-subtitle">
          You will hear a recording. Click on the paragraph that best relates to the recording.
        </p>

        {/* Audio Player */}
        <div className="pte-audio">
          <button className="pte-play" onClick={handlePlay}>
            {isPlaying ? "⏸" : "▶"}
          </button>
          <div className="pte-audio-bar">
            <div className={`pte-audio-progress ${isPlaying ? "playing" : ""}`}></div>
          </div>
          <audio ref={audioRef} src={audio} onEnded={handleEnded} />
        </div>

        {/* Question Options */}
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
              <span>{key}. {value}</span>
            </label>
          ))}
        </div>

        {/* Footer with Next button */}
        <div className="pte-footer">
          <button className="pte-next" disabled={!answer}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
