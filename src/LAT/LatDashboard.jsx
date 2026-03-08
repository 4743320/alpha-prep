
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import "../../src/styles/pedashboard.css";
import "../../src/styles/pedashboard.css"
import PTECard from "../../PTE/Iteration2/PTECard";

const sections = [
  {
    name: "English",
    topics: [
      {
        title: "Vocabulary",
        desc: "Practice synonyms, antonyms, and word meanings.",
        type: "english-vocab",
        questions: []
      },
      {
        title: "Grammar",
        desc: "Practice tenses, parts of speech, and sentence correction.",
        type: "english-grammar",
        questions: []
      },
      {
        title: "Sentence Correction",
        desc: "Identify and correct incorrect sentences.",
        type: "english-correction",
        questions: []
      }
    ]
  },

  {
    name: "General Knowledge",
    topics: [
      {
        title: "World Knowledge",
        desc: "Important global events, geography, and history.",
        type: "gk-world",
        questions: []
      },
      {
        title: "Current Affairs",
        desc: "Recent news and global developments.",
        type: "gk-current",
        questions: []
      }
    ]
  },

  {
    name: "Pakistan Studies",
    topics: [
      {
        title: "Pakistan History",
        desc: "Key events in Pakistan’s history.",
        type: "pk-history",
        questions: []
      },
      {
        title: "Politics & Constitution",
        desc: "Important political and constitutional concepts.",
        type: "pk-politics",
        questions: []
      }
    ]
  },

  {
    name: "Islamic Studies / Ethics",
    topics: [
      {
        title: "Islamic Knowledge",
        desc: "Basic Islamic teachings and history.",
        type: "islamic-studies",
        questions: []
      },
      {
        title: "Ethics",
        desc: "Moral reasoning and ethical concepts.",
        type: "ethics",
        questions: []
      }
    ]
  },

  {
    name: "Mathematics",
    topics: [
      {
        title: "Basic Math",
        desc: "Practice arithmetic, percentages, and ratios.",
        type: "math-basic",
        questions: []
      },
      {
        title: "Logical Reasoning",
        desc: "Solve analytical and reasoning problems.",
        type: "math-reasoning",
        questions: []
      }
    ]
  },

  {
    name: "Writing",
    topics: [
      {
        title: "Essay Writing",
        desc: "Practice writing LAT essays.",
        type: "essay-writing",
        questions: []
      },
      {
        title: "Personal Statement",
        desc: "Write your motivation for studying law.",
        type: "personal-statement",
        questions: []
      }
    ]
  }
];
export default function LATDashboard() {
  const navigate = useNavigate();

    return (
    <div className="pte-page">
      <div className="pte-container">
        <h1 className="pte-title">LAT Dashboard</h1>
        <p className="pte-subtitle">
          Choose a section and start practicing. Click on a topic to begin.
        </p>

        {sections.map((section) => (
          <div key={section.name} className="pte-section">
            <h2 className="pte-section-title">{section.name}</h2>
            <div className="pte-card-grid">
              {section.topics.map((topic) => (
                <PTECard
                  key={topic.title}
                  title={topic.title}
                  desc={topic.desc}
                  onClick={() => handleCardClick(topic, section.name)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
