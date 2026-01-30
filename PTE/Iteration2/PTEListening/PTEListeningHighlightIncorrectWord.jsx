// PTEHighlightIncorrectWords.jsx
import { useState, useRef } from "react";
// import "../../Iteration/HighlightIncorrect.css";
// import "../../Iteration2/PTEListening/PTEListeningHighlightIncorrectWords.css";

export default function PTEHighlightIncorrectWords({ questionData, onBack }) {
  const [selected, setSelected] = useState([]);
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  if (!questionData) return null;

  const words = questionData.passage.split(/(\s+)/);

  const toggleWord = (index) => {
    setSelected((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
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
          <span className="pte-progress">Listening • Highlight Incorrect Words</span>
        </div>

        {/* Title */}
        <h1 className="pte-title">Highlight incorrect words</h1>
        <p className="pte-subtitle">
          You will hear a recording. Below is a transcription of the recording. 
          Some words in the transcription differ from what the speaker said. 
          Click on the words that are different.
        </p>

        {/* Audio Player */}
        <div className="pte-card pte-audio">
          <button className="pte-play" onClick={handlePlay}>
            {isPlaying ? "⏸" : "▶"}
          </button>
          <audio ref={audioRef} src={questionData.audio} onEnded={handleEnded} />
          <div className="pte-audio-bar">
            <div className={`pte-audio-progress ${isPlaying ? "playing" : ""}`} />
          </div>
          <div className="pte-volume">🔊</div>
        </div>

        {/* Transcript */}
        <div className="pte-card pte-transcript">
          {words.map((word, index) =>
            word.trim() === "" ? (
              <span key={index}>{word}</span>
            ) : (
              <span
                key={index}
                className={`pte-words ${selected.includes(index) ? "active" : ""}`}
                onClick={() => toggleWord(index)}
              >
                {word}
              </span>
            )
          )}
        </div>

        {/* Footer */}
        <div className="pte-footer">
          <button
            className="pte-next"
            disabled={selected.length === 0}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
