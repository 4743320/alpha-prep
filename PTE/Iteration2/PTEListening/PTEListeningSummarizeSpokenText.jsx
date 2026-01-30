import { useState, useRef } from "react";
import "../../Iteration/PTEListening/ListeningDictation.css";

export default function PTEListeningSummarizeSpokenText({
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
        <h1 className="pte-title">Summarize Spoken Text</h1>
        <p className="pte-subtitle">
          You will hear a short lecture. Write a summary for a fellow student who was not present at the lecture. You should write 50 - 70 words. You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the lecture.
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
