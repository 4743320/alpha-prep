import { useState } from "react";
import "./ListeningMCQ.css";

export default function PTEListeningMCQ() {
  const [answer, setAnswer] = useState("");

  const options = [
    "Geologists are trying to build up a mountain that stretches between New York and Chicago, which will soar over 45km. This has been warned by experts that the support of such mountain may be damaged by winds and glaciers.",
    "For any conical mountain on the Earth, its height is limited by various factors. The factors include the Earth's mantle, collision of tectonic plates and erosion, so the tallest mountains are not likely to grow much higher.",
    "Mount Everest may grow in the future, because it won't sink lower into the Earth's hot interior like other mountains do. Another reason is that it hasn't reached the height limit of 15km yet.",
    "The Earth's crust is made up of continental plates that float in the rock of its mantle. This can result in earthquakes, which may force the highest mountains to collapse, according to a research.",
  ];

  return (
    <div className="pte-page">
      <div className="pte-container">
        {/* Header */}
        <div className="pte-header">
          <span className="pte-back">← Go back</span>
          <span className="pte-progress">Listening • 2 of 5 questions</span>
        </div>

        {/* Title */}
        <h1 className="pte-title">Highlight Correct Summary</h1>
        <p className="pte-subtitle">
          You will hear a recording. Click on the paragraph that best relates to the recording.
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
                type="radio"
                name="answer"
                value={opt}
                checked={answer === opt}
                onChange={() => setAnswer(opt)}
              />
              <span>{opt}</span>
            </label>
          ))}
        </div>

        {/* Footer */}
        <div className="pte-footer">
          <button className="pte-next" disabled={!answer}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
