// import { useState, useRef } from "react";
// import "../../Iteration/PTEListening/ListeningFIB.css";

// export default function PTEListeningFIB({ questionData, onBack }) {
//   const [answers, setAnswers] = useState(
//     Array(questionData?.blanksCount || 0).fill("")
//   );
//   const [isPlaying, setIsPlaying] = useState(false);
//   const audioRef = useRef(null);

//   if (!questionData) return null;

//   // Split passage at blanks (_____)
//   const textParts = questionData.passage.split("_____");

//   const handleChange = (index, value) => {
//     const updated = [...answers];
//     updated[index] = value;
//     setAnswers(updated);
//   };

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
//         {/* Header */}
//         <div className="pte-header">
//           {onBack && (
//             <span className="pte-back" onClick={onBack}>
//               ← Go back
//             </span>
//           )}
//           <span className="pte-progress">
//             Listening • Question {questionData.id}
//           </span>
//         </div>

//         {/* Title */}
//         <h1 className="pte-title">{questionData.title}</h1>
//         <p className="pte-subtitle">
//           Listen to the recording and fill in the blanks by typing the missing words.
//         </p>

//         {/* Audio Player */}
//         <div className="pte-card">
//           <div className="pte-audio">
//             <button className="pte-play" onClick={handlePlay}>
//               {isPlaying ? "⏸" : "▶"}
//             </button>
//             <audio
//               ref={audioRef}
//               src={questionData.audio}
//               onEnded={handleEnded}
//             />
//             <div className="pte-audio-bar">
//               <div
//                 className={`pte-audio-progress ${isPlaying ? "playing" : ""}`}
//               ></div>
//             </div>
//             <div className="pte-volume">🔊</div>
//           </div>
//         </div>

//         {/* Passage with blanks */}
//         <div className="pte-card pte-transcript">
//           {textParts.map((part, i) => (
//             <span key={i}>
//               {part}
//               {i < answers.length && (
//                 <input
//                   type="text"
//                   className="pte-blank-input"
//                   value={answers[i]}
//                   onChange={(e) => handleChange(i, e.target.value)}
//                   placeholder="______"
//                 />
//               )}
//             </span>
//           ))}
//         </div>

//         {/* Footer */}
//         <div className="pte-footer">
//           <button
//             className="pte-next"
//             disabled={answers.some((a) => a === "")}
//             onClick={() => alert("Submit logic here!")}
//           >
//             Next question
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState, useRef, useEffect } from "react";
import "../../Iteration/PTEListening/ListeningFIB.css";

export default function PTEListeningFIB({ questionData, onBack }) {
  const audioRef = useRef(null);
  const [answers, setAnswers] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!questionData) return null;

  // Destructure audio and passage like MCQ
  const { audio, passage, title, blanksCount, id } = questionData;

  // Initialize answers array when questionData changes
  useEffect(() => {
    setAnswers(Array(blanksCount || 0).fill(""));
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  }, [blanksCount, audio]);

  // Split passage into text parts for blanks
  const textParts = passage.split("_____");

  const handleChange = (index, value) => {
    const updated = [...answers];
    updated[index] = value;
    setAnswers(updated);
  };

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
        <div className="pte-header">
          {onBack && (
            <span className="pte-back" onClick={onBack}>
              ← Go back
            </span>
          )}
          <span className="pte-progress">Listening • Question {id}</span>
        </div>

        {/* Title */}
        <h1 className="pte-title">{title}</h1>
        <p className="pte-subtitle">
          Listen to the recording and fill in the blanks by typing the missing words.
        </p>

        {/* Audio Player */}
        <div className="pte-card">
          <div className="pte-audio">
            <button className="pte-play" onClick={handlePlay}>
              {isPlaying ? "⏸" : "▶"}
            </button>
            <audio
              key={id} // ensures reload on new question
              ref={audioRef}
              src={audio}
              onEnded={handleEnded}
            />
            <div className="pte-audio-bar">
              <div className={`pte-audio-progress ${isPlaying ? "playing" : ""}`}></div>
            </div>
            <div className="pte-volume">🔊</div>
          </div>
        </div>

        {/* Passage with blanks */}
        <div className="pte-card pte-transcript">
          {textParts.map((part, i) => (
            <span key={i}>
              {part}
              {i < answers.length && (
                <input
                  type="text"
                  className="pte-blank-input"
                  value={answers[i]}
                  onChange={(e) => handleChange(i, e.target.value)}
                  placeholder="______"
                />
              )}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="pte-footer">
          <button
            className="pte-next"
            disabled={answers.some((a) => a === "")}
            onClick={() => alert("Submit logic here!")}
          >
            Next question
          </button>
        </div>
      </div>
    </div>
  );
}
