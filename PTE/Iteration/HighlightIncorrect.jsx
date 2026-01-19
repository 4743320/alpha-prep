// PTEHighlightIncorrectWords.jsx
import { useState } from "react";
import "./HighlightIncorrect.css";

export default function PTEHighlightIncorrectWords() {
  const transcript = `Colour theory is the study of colour and its place in art. Humans have been thinking about colours for thousands of years but modern colour theory really arose in the 1800s, when it began to move from science into a pure art. A knowledge of colour theory does require some understanding of basic scientific principles about colour but much of modern colour theory is about the way people perceive, think about and interact with colours – from those used on walls to those selected for a company logo. Colour theory is not only something you see applied to paintings; you can also see it in graphic design, photography, fashion, animation and even video games.`;

  const words = transcript.split(/(\s+)/);
  const [selected, setSelected] = useState([]);

  const toggleWord = (index) => {
    setSelected((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="pte-page">
      <div className="pte-container">
        {/* Header */}
        <div className="pte-header">
          <span className="pte-back">← Go back</span>
          <span className="pte-progress">Listening • 4 of 5 questions</span>
        </div>

        {/* Title */}
        <h1 className="pte-title">Highlight incorrect words</h1>
        <p className="pte-subtitle">
          You will hear a recording. Below is a transcription of the recording. Some words in the transcription differ from what the speaker said. Please click on the words that are different.
        </p>

        {/* Audio Player (UI only) */}
        <div className="pte-audio">
          <button className="pte-play">▶</button>
          <div className="pte-audio-bar" />
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
                className={`pte-word ${selected.includes(index) ? "active" : ""}`}
                onClick={() => toggleWord(index)}
              >
                {word}
              </span>
            )
          )}
        </div>

        {/* Footer */}
        <div className="pte-footer">
          <button className="pte-next">Next question</button>
        </div>
      </div>
    </div>
  );
}

