import { useState, useRef } from "react";
import "../../Iteration/PTEListening/ListeningDictation.css";

export default function PTEWriteFromDictation({
  questionData,
  onBack,
}) {
  const [answer, setAnswer] = useState("");
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  if (!questionData) return null;

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

  const wordCount = answer.trim()
    ? answer.trim().split(/\s+/).length
    : 0;

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
            Listening • Summarize Spoken Text
          </span>
        </div>

        {/* Title */}
        <h1 className="pte-title">Write from Dictation</h1>
        <p className="pte-subtitle">
          You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.
        </p>

        {/* Audio Player */}
        <div className="pte-card">
          <div className="pte-audio">
            <button className="pte-play" onClick={handlePlay}>
              {isPlaying ? "⏸" : "▶"}
            </button>

            <audio
              ref={audioRef}
              src={questionData.audio}
              onEnded={handleEnded}
            />

            <div className="pte-audio-bar">
              <div
                className={`pte-audio-progress ${
                  isPlaying ? "playing" : ""
                }`}
              />
            </div>

            <div className="pte-volume">🔊</div>
          </div>
        </div>

        {/* Textarea */}
        <div className="pte-card">
          <textarea
            className="pte-input"
            placeholder="Type your response here..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            rows={8}
          />
          <div className="pte-word-count">
            Word count: {wordCount}
          </div>
        </div>

        {/* Footer */}
        <div className="pte-footer">
          <button
            className="pte-next"
            disabled={wordCount < 50 || wordCount > 70}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
