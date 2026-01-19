// PTEDashboard.jsx
import React from "react";
import "../styles/pedashboard.css";
import { useNavigate } from "react-router-dom"; // ✅ import this at top

const sections = [
  {
    name: "Reading",
    topics: [
      { title: "Multiple Choice", desc: "Choose the correct answer based on the passage." },
      { title: "Fill in the Blanks", desc: "Complete sentences with the correct words." },
      { title: "Reorder Paragraphs", desc: "Arrange paragraphs in the correct order." },
      { title: "Highlight Incorrect Words", desc: "Identify words that differ from the passage." }
    ]
  },
  {
    name: "Speaking / Writing",
    topics: [
      { title: "Essay Writing", desc: "Practice essay structure and vocabulary." },
      { title: "Describe Image", desc: "Describe charts, maps, and images clearly." },
      { title: "Re-tell Lecture", desc: "Summarize spoken lectures in your own words." },
      { title: "Summarize Spoken Text", desc: "Write concise summaries of audio content." }
    ]
  },
  {
    name: "Listening",
    topics: [
      { title: "Highlight Incorrect Words", desc: "Select words that are different from the audio." },
      { title: "Fill in the Blanks", desc: "Listen carefully and fill in missing words." },
      { title: "Multiple Choice", desc: "Answer questions based on the audio." },
      { title: "Summarize Spoken Text", desc: "Summarize what you hear in short paragraphs." }
    ]
  }
];

export default function PTEDashboard() {
  const navigate = useNavigate(); // ✅ add this here

  const handleCardClick = (topic) => {
    // ✅ replace alert with navigation
    const topicMap = {
      "Essay Writing": "/speaking-writing",
      "Describe Image": "/speaking-writing",
      "Re-tell Lecture": "/speaking-writing",
      "Summarize Spoken Text": "/speaking-writing",
      "Multiple Choice": "/reading",
      "Fill in the Blanks": "/reading",
      "Reorder Paragraphs": "/reading",
      "Highlight Incorrect Words": "/reading",
      "Highlight Incorrect Words (Listening)": "/listening",
      "Fill in the Blanks (Listening)": "/listening",
      "Multiple Choice (Listening)": "/listening",
      "Summarize Spoken Text (Listening)": "/listening"
    };

    const path = topicMap[topic.title];
    if (path) {
      navigate(path); // ✅ this navigates to the page
    }
  };

  return (
    <div className="pte-page">
      <div className="pte-container">
        <h1 className="pte-title">PTE Practice Dashboard</h1>
        <p className="pte-subtitle">
          Choose a section and start practicing. Click on a topic to begin.
        </p>

        {sections.map((section) => (
          <div key={section.name} className="pte-section">
            <h2 className="pte-section-title">{section.name}</h2>
            <div className="pte-card-grid">
              {section.topics.map((topic) => (
                <div
                  key={topic.title}
                  className="pte-topic-card"
                  onClick={() => handleCardClick(topic)} // ✅ card click
                >
                  <h3 className="pte-topic-title">{topic.title}</h3>
                  <p className="pte-topic-desc">{topic.desc}</p>
                  <span
                    className="pte-practice-link"
                    onClick={(e) => {
                      e.stopPropagation(); // prevent double trigger
                      handleCardClick(topic); // ✅ practice now click
                    }}
                  >
                    Practice Now →
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
