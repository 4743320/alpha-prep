// // pages/PTEDashboard.jsx
// import React, { useState } from "react";
// import "./ptedashboard.css";
// import PTECard from "./PTECard";
// import PTEQuestionList from "./Interface2"; // Make sure this exists

// const sections = [
//   {
//     name: "Reading",
//     topics: [
//       {
//         title: "Multiple Choice",
//         desc: "Choose the correct answer based on the passage.",
//         questions: [
//           {
//             id: 8000286,
//             title: "Knowledge",
//             level: "Medium",
//             appeared: 0,
//             question: "What advice does the author give regarding sources?",
//             passage: `Knowledge never stands alone. It builds upon and plays against the knowledge of previous knowers and reporters 
//             whom scholars call 'sources.' These are not, in a scholarly paper, the source of your particular argument (you are), 
//             but rather persons or documents that help you arrive at and support your argument. They are sources of information 
//             that you interpret; of ideas that you support, criticize, or develop; of vivid language that you quote and analyze.`,
//             options: {
//               A: "Scholars should be careful to select reliable sources.",
//               B: "Scholars should use a wide variety of sources.",
//               C: "Sources should determine a scholarly argument.",
//               D: "Sources should serve as inspiration to scholars."
//             },
//             answer: "D"
//           },
//           {
//             id: 8000285,
//             title: "Persistence",
//             level: "Medium",
//             appeared: 0,
//             question: "What kind of mothers did the study investigate?",
//             passage: `Encouraging babies to be persistent in their behavior and providing lots of stimulus can help improve 
//             their learning ability, researchers have said...`,
//             options: {
//               A: "Mothers from a wide range of backgrounds.",
//               B: "Mothers from rural areas.",
//               C: "Poorer mothers living in a city.",
//               D: "Mothers from wealthy families."
//             },
//             answer: "C"
//           }
//         ]
//       },
//       {
//         title: "Fill in the Blanks",
//         desc: "Complete sentences with the correct words.",
//         questions: [],
//       },
//       {
//         title: "Reorder Paragraphs",
//         desc: "Arrange paragraphs in the correct order.",
//         questions: [],
//       },
//       {
//         title: "Highlight Incorrect Words",
//         desc: "Identify words that differ from the passage.",
//         questions: [],
//       },
//     ],
//   },
//   {
//     name: "Speaking / Writing",
//     topics: [
//       {
//         title: "Essay Writing",
//         desc: "Practice essay structure and vocabulary.",
//         questions: [],
//       },
//       {
//         title: "Describe Image",
//         desc: "Describe charts, maps, and images clearly.",
//         questions: [],
//       },
//       {
//         title: "Re-tell Lecture",
//         desc: "Summarize spoken lectures in your own words.",
//         questions: [],
//       },
//       {
//         title: "Summarize Spoken Text",
//         desc: "Write concise summaries of audio content.",
//         questions: [],
//       },
//     ],
//   },
//   {
//     name: "Listening",
//     topics: [
//       {
//         title: "Multiple Choice",
//         desc: "Answer questions based on the audio.",
//         questions: [],
//       },
//       {
//         title: "Fill in the Blanks",
//         desc: "Listen carefully and fill in missing words.",
//         questions: [],
//       },
//       {
//         title: "Highlight Incorrect Words",
//         desc: "Select words that differ from the audio.",
//         questions: [],
//       },
//       {
//         title: "Summarize Spoken Text",
//         desc: "Summarize what you hear in short paragraphs.",
//         questions: [],
//       },
//     ],
//   },
// ];

// export default function PTEDashboard() {
//   const [selectedTopic, setSelectedTopic] = useState(null);

// const [selectedQuestion, setSelectedQuestion] = useState(null);


//   // const handleCardClick = (topic, sectionName) => {
//   //   setSelectedTopic({ ...topic, sectionName });
//   // };
// const handleCardClick = (topic, sectionName) => {
//   setSelectedTopic({ ...topic, sectionName });
// };
//   return (
//     <div className="pte-page">
//       <div className="pte-container">
//         {!selectedTopic && (
//           <>
//             <h1 className="pte-title">PTE 2 Practice Dashboard</h1>
//             <p className="pte-subtitle">
//               Choose a section and start practicing. Click on a topic to begin.
//             </p>

//             {sections.map((section) => (
//               <div key={section.name} className="pte-section">
//                 <h2 className="pte-section-title">{section.name}</h2>
//                 <div className="pte-card-grid">
//                   {section.topics.map((topic) => (
//                     <PTECard
//                       key={topic.title}
//                       title={topic.title}
//                       desc={topic.desc}
//                       onClick={() => handleCardClick(topic, section.name)}
//                     />
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </>
//         )}

//         {selectedTopic && (
//           <PTEQuestionList
//             questions={selectedTopic.questions || []} // fallback to empty array
//             module={selectedTopic.sectionName}
//             type={selectedTopic.title}
//             onBack={() => setSelectedTopic(null)} // back button handler
//           />
//         )}
        
        
//       </div>
//     </div>
//   );
// }
// pages/PTEDashboard.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ptedashboard.css";
import PTECard from "./PTECard";
import PTEQuestionList from "./Interface2";
import PTEReadingMCQ from "./PTEReadingMCQ";

// ------------------------
// Static sections + questions (temporary for now)
// ------------------------
const sections = [
  {
    name: "Reading",
    topics: [
      {
        title: "Multiple Choice",
        desc: "Choose the correct answer based on the passage.",
        questions: [
  {
    id: 8000286,
    title: "Knowledge",
    level: "Medium",
    appeared: 0,
    question: "What advice does the author give regarding sources?",
    passage: "Knowledge never stands alone. It builds upon and plays against the knowledge of previous knowers and reporters ...",
    options: {
      A: "Scholars should be careful to select reliable sources.",
      B: "Scholars should use a wide variety of sources.",
      C: "Sources should determine a scholarly argument.",
      D: "Sources should serve as inspiration to scholars."
    },
    answer: "D"
  },
  {
    id: 8000285,
    title: "Persistence",
    level: "Medium",
    appeared: 0,
    question: "What kind of mothers did the study investigate?",
    passage: "Encouraging babies to be persistent in their behavior ...",
    options: {
      A: "Mothers from a wide range of backgrounds.",
      B: "Mothers from rural areas.",
      C: "Poorer mothers living in a city.",
      D: "Mothers from wealthy families."
    },
    answer: "C"
  }
]
      },
      { title: "Fill in the Blanks", desc: "Complete sentences with the correct words.", questions: [] },
      { title: "Reorder Paragraphs", desc: "Arrange paragraphs in the correct order.", questions: [] },
      { title: "Highlight Incorrect Words", desc: "Identify words that differ from the passage.", questions: [] },
    ],
  },
  {
    name: "Speaking / Writing",
    topics: [
      { title: "Essay Writing", desc: "Practice essay structure and vocabulary.", questions: [] },
      { title: "Describe Image", desc: "Describe charts, maps, and images clearly.", questions: [] },
      { title: "Re-tell Lecture", desc: "Summarize spoken lectures in your own words.", questions: [] },
      { title: "Summarize Spoken Text", desc: "Write concise summaries of audio content.", questions: [] },
    ],
  },
  {
    name: "Listening",
    topics: [
      { title: "Multiple Choice", desc: "Answer questions based on the audio.", questions: [] },
      { title: "Fill in the Blanks", desc: "Listen carefully and fill in missing words.", questions: [] },
      { title: "Highlight Incorrect Words", desc: "Select words that differ from the audio.", questions: [] },
      { title: "Summarize Spoken Text", desc: "Summarize what you hear in short paragraphs.", questions: [] },
    ],
  },
];

export default function PTEDashboard() {
  const navigate = useNavigate();

  // ------------------------
  // State for navigation
  // ------------------------
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleCardClick = (topic, sectionName) => {
    setSelectedTopic({ ...topic, sectionName });
  };

  // ------------------------
  // Conditional rendering
  // ------------------------
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
        module={selectedTopic.sectionName}
        type={selectedTopic.title}
        onBack={() => setSelectedTopic(null)}
        onSelectQuestion={setSelectedQuestion}
      />
    );
  }

  // ------------------------
  // Dashboard view
  // ------------------------
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
