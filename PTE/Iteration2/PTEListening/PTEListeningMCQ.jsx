// import { useState } from "react";
// import '../../Iteration/PTEListening/ListeningMCQ.css';

// export default function PTEListeningMCQ({ questionData, onBack }) {
//   const [answer, setAnswer] = useState("");

//   if (!questionData) return null; // safety check

//   const { audio, question, options } = questionData;

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
//             Listening • 1 of 1 question
//           </span>
//         </div>

//         {/* Title */}
//         <h1 className="pte-title">Multiple choice, single answer</h1>
//         <p className="pte-subtitle">
//           Listen to the audio and select the correct answer.
//         </p>

//         {/* Audio */}
//         <div className="pte-card">
//           {audio ? (
//             <audio controls className="pte-audio">
//               <source src={audio} type="audio/mpeg" />
//               Your browser does not support the audio element.
//             </audio>
//           ) : (
//             <div className="pte-audio-placeholder">
//               Audio will be available here
//             </div>
//           )}
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
//                 checked={answer === key}
//                 onChange={() => setAnswer(key)}
//               />
//               <span>
//                 {key}. {value}
//               </span>
//             </label>
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="pte-footer">
//           <button className="pte-next" disabled={!answer}>
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
// import { useState } from "react";
// import "../../Iteration/PTEListening/ListeningMCQ.css";

// export default function PTEListeningMCQ({ questionData, onBack }) {
//   const [answer, setAnswer] = useState("");
//   const [isPlaying, setIsPlaying] = useState(false);

//   if (!questionData) return null;

//   const { audio, question, options } = questionData;

//   // Toggle play (dummy, UI only for now)
//   const handlePlay = () => {
//     setIsPlaying(!isPlaying);
//     // Here you can add real audio logic later
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
//         <h1 className="pte-title">Multiple choice, single answer</h1>
//         <p className="pte-subtitle">
//           Listen to the recording and select the correct answer.
//         </p>

//         {/* 🔊 Custom Audio Player */}
//         <div className="pte-audio">
//           <button className="pte-play" onClick={handlePlay}>
//             {isPlaying ? "⏸" : "▶"}
//           </button>

//           <div className="pte-audio-bar">
//             <div
//               className={`pte-audio-progress ${isPlaying ? "playing" : ""}`}
//             ></div>
//           </div>

//           <div className="pte-volume">🔊</div>
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
//                 checked={answer === key}
//                 onChange={() => setAnswer(key)}
//               />
//               <span>
//                 {key}. {value}
//               </span>
//             </label>
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="pte-footer">
//           <button className="pte-next" disabled={!answer}>
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState, useRef } from "react";
// import "../../Iteration/PTEListening/ListeningMCQ.css";

// export default function PTEListeningMCQ({ questionData, onBack }) {
//   const [answer, setAnswer] = useState("");
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef(null); // <-- Ref to control audio

//   if (!questionData) return null;

//   const { audio, question, options } = questionData;

//   // Real play/pause logic
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

//   // Reset play state when audio ends
//   const handleEnded = () => {
//     setIsPlaying(false);
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
//         <h1 className="pte-title">Multiple choice, single answer</h1>
//         <p className="pte-subtitle">
//           Listen to the recording and select the correct answer.
//         </p>

//         {/* 🔊 Audio Player */}
//         <div className="pte-audio">
//           <button className="pte-play" onClick={handlePlay}>
//             {isPlaying ? "⏸" : "▶"}
//           </button>

//           <audio
//             ref={audioRef}
//             src={audio} // <-- Path from your questionData, e.g., "/Audio/Select_Missing-Word_Presentation.mp3"
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
//               <input
//                 type="radio"
//                 name="answer"
//                 value={key}
//                 checked={answer === key}
//                 onChange={() => setAnswer(key)}
//               />
//               <span>
//                 {key}. {value}
//               </span>
//             </label>
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="pte-footer">
//           <button className="pte-next" disabled={!answer}>
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useRef } from "react";
import "../../Iteration/PTEListening/ListeningMCQ.css";

export default function PTEListeningMCQ({ questionData, onBack }) {
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
        {onBack && (
          <span className="pte-back" onClick={onBack}>
            ← Go back
          </span>
        )}

        <h1 className="pte-title">Multiple Choice Single Answer</h1>
        <p className="pte-subtitle">Listen and select the correct answer.</p>

        {/* Custom audio player */}
        <div className="pte-audio">
          <button className="pte-play" onClick={handlePlay}>
            {isPlaying ? "⏸" : "▶"}
          </button>
          <div className="pte-audio-bar">
            <div className={`pte-audio-progress ${isPlaying ? "playing" : ""}`}></div>
          </div>
          <audio ref={audioRef} src={audio} onEnded={handleEnded} />
        </div>

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
      </div>
    </div>
  );
}

// import { useRef } from "react";

// export default function TestAudio() {
//   const audioRef = useRef(null);

//   const handlePlay = () => {
//     if (audioRef.current) audioRef.current.play();
//   };

//   return (
//     <div>
//       <button onClick={handlePlay}>Play Audio</button>
//       <audio ref={audioRef} src="/Audio/Select_Missing-Word_Presentation.mp3" />
//     </div>
//   );
// }
