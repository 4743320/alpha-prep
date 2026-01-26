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
        <h1 className="pte-title">Write from Dictation</h1>
        <p className="pte-subtitle">
          You will hear a sentence. Type the sentence in the box below exactly as you hear it. Write as much of the sentence as you can. You will hear the sentence only once.
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
  rows={4}   // shows 4 lines
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
