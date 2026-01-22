import "./Interface.css";

const questions = [
  { id: 8000286, title: "Knowledge", level: "Medium", appeared: 0 },
  { id: 8000285, title: "Persistence", level: "Medium", appeared: 0 },
  { id: 8000284, title: "Human Development Index", level: "Medium", appeared: 0 },
  { id: 8000283, title: "Glaciers", level: "Easy", appeared: 0 },
  { id: 8000282, title: "Fish", level: "Easy", appeared: 0 },
  { id: 8000281, title: "Gliese 581", level: "Medium", appeared: 0 },
  { id: 8000280, title: "Piaget's theory", level: "Difficult", appeared: 0 },
];

export default function PTEQuestionList() {
  return (
    <div className="pte-wrapper">
      {/* Header */}
      <div className="pte-header">
        <div className="pte-header-left">
          <div className="pte-module">Reading</div>
          <div className="pte-title">
            <span className="pte-badge">MCS</span>
            Multiple Choice, Single Answer
          </div>
        </div>

        <button className="reset-btn">Reset Practice</button>
      </div>

      {/* Filters */}
      <div className="pte-filters">
        <label><input type="checkbox" defaultChecked /> All</label>
        <label><input type="checkbox" /> Practiced</label>
        <label><input type="checkbox" /> Not Practiced</label>

        <input
          className="search"
          type="text"
          placeholder="Content / Title / Number"
        />
      </div>

      {/* Question List */}
      <div className="pte-list">
        {questions.map((q) => (
          <div className="pte-row" key={q.id}>
            <div className="pte-q-left">
              <span className="qid">#{q.id}</span>
              <span className="qtitle">{q.title}</span>
            </div>

            <div className="pte-q-right">
              <span className={`level ${q.level.toLowerCase()}`}>
                {q.level}
              </span>
              <span className="new">New</span>
              <span className="appeared">Appeared ({q.appeared})</span>
              <span className="bookmark">☆</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
