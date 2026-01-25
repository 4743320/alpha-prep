// App.jsx
import React, { useState } from "react";

function PTECard({ title, onClick }) {
  return (
    <div style={{ border: "1px solid black", margin: 4, padding: 4 }} onClick={onClick}>
      {title}
    </div>
  );
}

function PTEQuestionList({ questions, onBack, onSelectQuestion }) {
  return (
    <div>
      <button onClick={onBack}>Back to Topics</button>
      <ul>
        {questions.map((q) => (
          <li key={q.id} onClick={() => onSelectQuestion(q)}>
            {q.title} (Difficulty: {q.level})
          </li>
        ))}
      </ul>
    </div>
  );
}

function PTEReadingMCQ({ questionData, onBack }) {
  const [answer, setAnswer] = useState("");
  return (
    <div>
      <button onClick={onBack}>Back to Questions</button>
      <h3>{questionData.question}</h3>
      <p>{questionData.passage}</p>
      {Object.entries(questionData.options).map(([key, val]) => (
        <label key={key}>
          <input
            type="radio"
            name="answer"
            value={key}
            checked={answer === key}
            onChange={() => setAnswer(key)}
          />
          {key}: {val}
        </label>
      ))}
      <div>
        <button disabled={!answer}>Submit</button>
      </div>
    </div>
  );
}

// Main App
export default function App() {
  const sections = [
    {
      name: "Reading",
      topics: [
        {
          title: "Multiple Choice",
          questions: [
            {
              id: 1,
              title: "Knowledge",
              level: "Medium",
              question: "What advice does the author give regarding sources?",
              passage: "Knowledge never stands alone...",
              options: {
                A: "Scholars should be careful to select reliable sources.",
                B: "Scholars should use a wide variety of sources.",
                C: "Sources should determine a scholarly argument.",
                D: "Sources should serve as inspiration to scholars.",
              },
              answer: "D",
            },
            {
              id: 2,
              title: "Persistence",
              level: "Medium",
              question: "What kind of mothers did the study investigate?",
              passage: "Encouraging babies to be persistent...",
              options: {
                A: "Mothers from a wide range of backgrounds.",
                B: "Mothers from rural areas.",
                C: "Poorer mothers living in a city.",
                D: "Mothers from wealthy families.",
              },
              answer: "C",
            },
          ],
        },
      ],
    },
  ];

  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  if (selectedQuestion) {
    return (
      <PTEReadingMCQ
        questionData={selectedQuestion}
        onBack={() => setSelectedQuestion(null)}
      />
    );
  }

  if (selectedTopic) {
    return (
      <PTEQuestionList
        questions={selectedTopic.questions}
        onBack={() => setSelectedTopic(null)}
        onSelectQuestion={setSelectedQuestion}
      />
    );
  }

  return (
    <div>
      <h2>PTE Dashboard</h2>
      {sections.map((section) => (
        <div key={section.name}>
          <h3>{section.name}</h3>
          {section.topics.map((topic) => (
            <PTECard
              key={topic.title}
              title={topic.title}
              onClick={() => setSelectedTopic({ ...topic, sectionName: section.name })}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
