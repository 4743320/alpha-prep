// components/PTEQuestionList.jsx
import React, { useState } from "react";
import "./Interface2.css";

export default function PTEQuestionList({ questions = [], module, type, onBack, onSelectQuestion  }) {
  const [searchText, setSearchText] = useState("");
  const [showPracticed, setShowPracticed] = useState(false);
  const [showNotPracticed, setShowNotPracticed] = useState(false);

  // Filter questions based on search / filters
  const filteredQuestions = questions.filter((q) => {
    if (showPracticed && q.appeared === 0) return false;
    if (showNotPracticed && q.appeared > 0) return false;
    if (!q.title.toLowerCase().includes(searchText.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="pte-wrapper">
      {/* Header */}
      <div className="pte-header">
        <div className="pte-header-left">
          <div className="pte-module">{module}</div>
          <div className="pte-title">
            <span className="pte-badge">{type}</span>
            {type}
          </div>
        </div>

        {onBack && (
          <button className="reset-btn" onClick={onBack}>
            ← Back
          </button>
        )}
      </div>

      {/* Filters */}
      <div className="pte-filters">
        <label>
          <input
            type="checkbox"
            checked={!showPracticed && !showNotPracticed}
            onChange={() => {
              setShowPracticed(false);
              setShowNotPracticed(false);
            }}
          />{" "}
          All
        </label>
        <label>
          <input
            type="checkbox"
            checked={showPracticed}
            onChange={() => setShowPracticed((prev) => !prev)}
          />{" "}
          Practiced
        </label>
        <label>
          <input
            type="checkbox"
            checked={showNotPracticed}
            onChange={() => setShowNotPracticed((prev) => !prev)}
          />{" "}
          Not Practiced
        </label>

        <input
          className="search"
          type="text"
          placeholder="Content / Title / Number"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      {/* Question List */}
      <div className="pte-list">
        {filteredQuestions.map((q) => (
          <div className="pte-row" key={q.id} onClick={() => onSelectQuestion(q)}>
            <div className="pte-q-left">
              <span className="qid">#{q.id}</span>
              <span className="qtitle">{q.title}</span>
            </div>

            <div className="pte-q-right">
              <span className={`level ${q.level.toLowerCase()}`}>{q.level}</span>
              {q.appeared === 0 && <span className="new">New</span>}
              <span className="appeared">Appeared ({q.appeared})</span>
              <span className="bookmark">☆</span>
            </div>
          </div>
        ))}
        {filteredQuestions.length === 0 && (
          <div style={{ padding: "12px", color: "#64748b" }}>No questions found.</div>
        )}
      </div>
    </div>
  );
}
