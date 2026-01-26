import { useState } from "react";
import "./ListeningDictation.css";

export default function PTEListeningSingleInput() {
  const [answer, setAnswer] = useState("");
  const [audio] = useState(new Audio("https://your-audio-link.mp3"));

  const handlePlay = () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  };

  return (
    <div className="pte-page">
      <div className="pte-container">
        {/* Header */}
        <div className="pte-header">
          <span className="pte-back">← Go back</span>
          <span className="pte-progress">Listening • 1 of 5 questions</span>
        </div>

        {/* Title */}
        <h1 className="pte-title">Summarize Spoken Text</h1>
        <p className="pte-subtitle">
          You will hear a short lecture. Write a summary for a fellow student who was not present at the lecture. You should write 50 - 70 words. You have 10 minutes to finish this task. Your response will be judged on the quality of your writing and on how well your response presents the key points presented in the lecture.

        </p>

        {/* Audio bar */}
        <div className="pte-card">
          <div className="pte-audio">
            <button className="pte-play" onClick={handlePlay}>
              ▶
            </button>
            <div className="pte-audio-bar"></div>
            <div className="pte-volume">🔊</div>
          </div>
        </div>

        {/* Single input box */}
        <div className="pte-card">
          <textarea
  className="pte-input"
  placeholder="Type your response here..."
  value={answer}
  onChange={(e) => setAnswer(e.target.value)}
  rows={8}   // shows 4 lines
></textarea>
        </div>

        {/* Footer */}
        <div className="pte-footer">
          <button className="pte-next" disabled={answer.trim() === ""}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
