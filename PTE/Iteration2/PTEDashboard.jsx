
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../src/styles/pedashboard.css";
import PTECard from "./PTECard";
import PTEQuestionList from "./Interface2";
import PTEReadingMCQ from "./PTEReadingMCQ";
import PTEReadingMCQMultiple from "./PTEReadingMCQMultiple";
import PTEReadingFillInTheBlanks from './PTEReadingFillInTheBlanks';
import PTEListeningMCQ from "../Iteration2/PTEListening/PTEListeningMCQ";
import PTEListeningMMCQ from '../Iteration2/PTEListening/PTEListeningMCQMultiple'
import PTEListeningFillInTheBlanks from '../Iteration2/PTEListening/PTEListeningFillInTheBlanks'
import PTEListeningHighlightCorrectSummary from "./PTEListening/PTEListeningHighlightCorrectSummary";
import PTEListeningSelectMissingWord from "./PTEListening/PTEListeningSelectMissingWord";

// import PTEReadingFillInTheBlanksDrag from '../Iteration/FillinTheBlanksDrag_Drop'
import PTEReadingFillInTheBlanksDrag from './PTEReadingFillInTheBlanksD_D'
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
         type: "mcq-single",
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
      { title: "Fill in the Blanks", desc: "Complete sentences with the correct words.",
      type: "fill-in-the-blanks"
        , questions: [ {
      id: 12001327,
      title: "Insects",
      level: "Medium",
      appeared: 92,
      question: `Insects have been an important part of the human diet for thousands of years. So why has insect eating died out in the developed world? Stuart Hine, an entomologist at the Natural History Museum in London says it's a cultural _______ are seen as 'dirty' and as carriers of disease. Despite this, a decade ago, insect eating seemed to be making a _______ with the publication of a number of insect recipe books. Edible, a London-based company, supplies Products such as chocolate-covered ants and toasted leafcutter ants. Perhaps as we become _______ of the sentience of higher animals, insects will become the protein of choice in centuries to come.`,
      options: {
        blank1: ["element", "instance", "item", "things"],
        blank2: ["comeback", "reaction", "competition", "reproduction"],
        blank3: ["aware", "conscious", "observant", "sensitive"]
      },
      answers: {
        blank1: "instance",
        blank2: "comeback",
        blank3: "aware"
      }
    },

    {
      id: 12001326,
      title: "Workforce Plan",
      level: "Medium",
      appeared: 6,
      question: `The purpose of the workforce plan is to enable a business to achieve its overall objective by successfully putting its corporate strategies into action. So it is _______ these overall business objectives and strategies that are the _______ for assessing the number and type of staff of workers that will be needed in the future. Where growth is the objective, the business _______ to increase sales by targeting new markets and launching new products. The workforce plan will need to set out the people required to make this happen will be recruited, retained, developed and relocated. If cost minimization is the goal and if workforce efficiency is one of the strategies, plans will need to be in place to _______ productivity, cut wages, bills or delays the organisational structure.`,
      options: {
        blank1: ["day one", "square one", "starting point", "take off"],
        blank2: ["has planned", "had planned", "maybe planning", "planning"],
        blank3: ["how", "that", "what", "which"],
        blank4: ["boost", "innovate", "release", "renew"]
      },
      answers: {
        blank1: "starting point",
        blank2: "planning",
        blank3: "how",
        blank4: "boost"
      }
    },

    {
      id: 12001325,
      title: "Technology Advances",
      level: "Medium",
      appeared: 0,
      question: `As the world charges into the future each day, bringing new, astonishing technological advances, our society runs the risk of becoming not only Washington Irvine's headless horseman but the _______ as well — eating up the technological miles with little or no reflection as to why we're moving so fast or even where we're going. But both the head and the _______ — urgent reflection and deeply felt about the meaning of these galloping changes are in all sorts of venues, not least in the endeavours that are known as the humanities.`,
      options: {
        blank1: ["heartless", "lessened", "skillful", "troubled"],
        blank2: ["acquittal", "connection", "contemplation", "feelings"],
        blank3: ["available", "ignored", "interrupted", "present"],
        blank4: ["collected", "collectedly", "collection", "collectively"]
      },
      answers: {
        blank1: "heartless",
        blank2: "contemplation",
        blank3: "present",
        blank4: "collectively"
      }
    }] },
      { title: "Multiple Choice Questions Multiple Answers", 
        desc: "Complete sentences with the correct words.",
        
        type: "mcq-multiple",
         questions: [{
            id: 9000198,
            title: "Job Opening",
            level: "Medium",
            appeared: 0,
            question: "What does this employer offer?",
            passage:
              "This position involves driving a company car between branches in Canada and occasionally the United States. The employer provides paid training, covers food and hotel expenses for out-of-province trips, provides a company car and fuel, offers full-time hours, weekly pay, vacation pay, and possible permanent hire with benefits.",
            options: {
              A: "The possibility of part-time work",
              B: "Fuel for the work vehicle",
              C: "A free course in Canada",
              D: "Paid meals when traveling",
              E: "Four weeks of holiday per year"
            },
            answers: ["B", "D"]
          },

          // =========================
          // Question 2
          // =========================
          {
            id: 9000197,
            title: "Disciplined Inquiry",
            level: "Medium",
            appeared: 0,
            question:
              "Which of the following are disadvantages of the 'disciplined inquiry' approach?",
            passage:
              "Disciplined inquiry has limitations. Some questions cannot be answered through research alone because values and ethics influence answers. Research can never capture the full richness of individuals and contexts. Variables are often proxies and measurement tools have errors. Research also depends on participants' willingness to provide data and requires ethical responsibility toward participants.",
            options: {
              A: "The full richness of individuals and sites cannot be captured by research studies.",
              B: "Some questions are influenced by personal philosophical values and ethics.",
              C: "Participants are not informed about the nature of the planned research.",
              D: "It depends on participants' willingness to provide data.",
              E: "All variables and aspects of a context are always examined."
            },
            answers: ["A", "B", "D"]
          },

          // =========================
          // Question 3
          // =========================
          {
            id: 9000196,
            title: "Migration",
            level: "Medium",
            appeared: 0,
            question:
              "Which of the following could help Asia improve its economic outlook?",
            passage:
              "IMF reports suggest Asia faces economic challenges due to low birth rates and aging populations, while Africa struggles due to high birth rates. A theoretical solution could be large-scale migration of younger people from Africa to Asia, despite its practical difficulties.",
            options: {
              A: "Speeding up its sluggish pace of demographic transition",
              B: "Receiving immigration from regions with high birth rates such as Africa",
              C: "Sending immigration elsewhere due to high Asian birth rates",
              D: "Mass Asian emigration to Africa",
              E: "Having more babies"
            },
            answers: ["B"]
          }] },
      { title: "Reorder Paragraphs", desc: "Arrange paragraphs in the correct order.", questions: [] },
      { title: "Fill In The Blanks Drag and Drop", type:"fill-in-the-blanks-drag-nd-drop", desc: "Identify words that differ from the passage.", questions: 
        [
        {
    id: "11001114",
    difficulty: "Easy",
    title: "Lifelong Learning",
    textParts: [
      "My grandmother may have an old body, but her ",
      " hasn't aged a day. She says it's because of all the hobbies she still does, such as reading, baking, and gardening. She knows that learning should never stop. Every time you pick up a hobby, you learn new ",
      ", new words, new techniques. Just like your body needs to stay fit, your brain needs learning to stay sharp!"
    ],
    blanksCount: 2,
    options: ["skill", "mind", "Time", "exercise", "thoughts", "items"]
  },
  {
    id: "11001113",
    difficulty: "Easy",
    title: "Work Preparation",
    textParts: [
      "It's important to arrive to work early. If your start time is 8:30 a.m., you need to be at work by then. Depending on where you work, you might have to ",
      " your clothes, turn your computer on, or do some other tasks before you're ready to work. You should ",
      " all of these activities by the time your workday begins."
    ],
    blanksCount: 2,
    options: ["end", "complete", "explain", "start", "change", "wash"]
  },
      ] },
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
      { title: "Multiple Choice Single Answer",
        type: "listening-mcq-single",
        desc: "Answer questions based on the audio.", questions: [{
  id: 17000219,
  title: "Literary Genres",
  level: "Medium",
  appeared: 4,
  audio:  "public/Audio/test3_p1.mp3",
  question: "Which literary genre is being referred to?",
  passage: "",
  options: {
    A: "mainstream",
    B: "gothic",
    C: "fantasy",
    D: "romance"
  },
  answer: ""
},
{
  id: 17000218,
  title: "Narcissism",
  level: "Medium",
  appeared: 3,
  audio:   "public/Audio/test3_p1.mp3",
  question: "How does he respond to the idea?",
  passage: "",
  options: {
    A: "He is angered by it.",
    B: "He is skeptical of it.",
    C: "He is amused by it.",
    D: "He doesn't believe any of it is true."
  },
  answer: ""
},
{
  id: 17000217,
  title: "MCS-L",
  level: "Medium",
  appeared: 3,
  audio:   "public/Audio/test3_p1.mp3",
  question: "Which statement about self-defence is correct?",
  passage: "",
  options: {
    A: "The concept of reasonable force is very clearly defined.",
    B: "Your use of force may be judged on how strong you are compared to the other person.",
    C: "If you hit someone first, you cannot then claim self-defence.",
    D: "Courts do not expect ordinary people to react rationally."
  },
  answer: ""
}
] },
      { title: "Multiple Choice Multiple Answers",type: "listening-mcq-multiple", desc: "Listen carefully and select the suitable Answers.", questions: [
         {
    id: 14000228,
    title: "Language Skills",
    level: "Medium",
    appeared: 2,
    audio: "public/Audio/test3_p1.mp3",
    question: "Which statements about music and language learning are correct?",
    passage: "",
    options: {
      A: "Scientists still do not know why music probably helps language learning.",
      B: "Piano lessons can heighten the brain's response to changes in pitch.",
      C: "Children who have attended kindergarten are more interested in music.",
      D: "Mandarin is a tonal language, which is different from English.",
      E: "Music lessons only benefit language learners who learn tonal languages."
    },
    answer: [] // For multiple answers, keep it as an empty array initially
  },
  {
    id: 14000225,
    title: "English Landscape Garden",
    level: "Medium",
    appeared: 9,
    audio: "public/Audio/test3_p1.mp3",
    question: "Which of the following are related to the development of English landscape gardens?",
    passage: "",
    options: {
      A: "Italian classical painting",
      B: "Gardens from classical Greece and Rome",
      C: "The Romantic Movement",
      D: "A person's political affiliations",
      E: "The poet Alexander Pope"
    },
    answer: []
  },
  {
    id: 14000223,
    title: "Rousseau's Beliefs",
    level: "Difficult",
    appeared: 4,
    audio: "public/Audio/test3_p1.mp3",
    question: "Which statements reflect Rousseau's beliefs?",
    passage: "",
    options: {
      A: "Children's emotions should be educated before their intellect.",
      B: "People were far happier in a 'state of nature' before civilization.",
      C: "By forming societies, law and morality come into force.",
      D: "Men form societies to better cope with the dangers in life.",
      E: "Society has a corrupting influence on people."
    },
    answer: []
  }
      ] },
      {
      title: "Fill in the Blanks",
      desc: "Listen carefully and fill in missing words.",
      type: "listening-fill-in-the-blanks", // must match your if-check in dashboard
      questions: [
        {
          id: 15000430,
          title: "Building Responsibility",
          level: "Medium",
          appeared: 2,
          audio: "public/Audio/test3_p1.mp3",
          passage: `At school, the students _____ that responsibilities can help build communities. 
The teacher reminded them that integrity means keeping _____ even in small matters. 
One day, they made a discovery of ancient words in a library book, which _____ the whole class. 
They realized that honest actions together with shared _____ can shape a brighter future.`,
          blanksCount: 4
        },
        {
          id: 15000429,
          title: "Javelin Competition",
          level: "Medium",
          appeared: 4,
          audio: "public/Audio/test3_p1.mp3",
          passage: `The _____ at the sports festival was the javelin competition. 
Athletes from all over the country came to participate. 
Many were excited to show their skills in the javelin _____ as far as possible. 
They were organized into different _____ to compete against each other. 
The biggest team, which had the most experienced members, took the lead. 
They _____ the competition with an impressive throw.`,
          blanksCount: 5
        },
        {
          id: 15000428,
          title: "Local Farmers",
          level: "Medium",
          appeared: 4,
          audio: "public/Audio/test3_p1.mp3",
          passage: `Local farmers experiment with new methods to grow their crops more efficiently. 
They want to improve their harvests each season. 
Different _____ of farming, such as organic or vertical farming, are becoming popular. 
Many now offer subscription services to deliver their produce directly to customers. 
They pack vegetables into a _____ for families to enjoy weekly. 
This ensures people have access to healthy food.`,
          blanksCount: 2
        }
      ]
    },
    { title: "Select Missing Word",
        type: "listening-select-missing-word",
        desc: "select missing word  based on the audio.", questions: [
           {
      id: 18000214,
      title: "Faint Sound",
      level: "Medium",
      appeared: 1,
      audio: "public/Audio/test3_p1.mp3",
      question: "Select the word that best completes the sentence.",
      passage: "",
      options: {
        A: "calming",
        B: "illusory",
        C: "disturbing",
        D: "inaudible"
      },
      answer: ""
    },
    {
      id: 18000213,
      title: "Surfing",
      level: "Medium",
      appeared: 8,
      audio: "public/Audio/test3_p1.mp3",
      question: "Select the word that best completes the sentence.",
      passage: "",
      options: {
        A: "took place",
        B: "were at stake",
        C: "were discovered",
        D: "could fail"
      },
      answer: ""
    },
    {
      id: 18000212,
      title: "Presentation",
      level: "Medium",
      appeared: 6,
      audio: "public/Audio/test3_p1.mp3",
      question: "Select the word that best completes the sentence.",
      passage: "",
      options: {
        A: "they did not speak as clearly as they should have done",
        B: "they made an inappropriate choice of topic",
        C: "they used illustrations and evidence well",
        D: "they showed they had grasped the content of the course"
      },
      answer: ""
    }
] },
 { title: "Highlight CorrectSummary",
        type: "listening-highlight-correct-summary",
        desc: "Highlight correct summary  based on the audio.", questions: [
           {
      id: 19000160,
      title: "Mountains",
      level: "Medium",
      appeared: 0,
      audio: "public/Audio/test3_p1.mp3",
      question: "Which statement correctly summarizes the discussion about mountains?",
      passage: "",
      options: {
        A: "Geologists are trying to build up a mountain that stretches between New York and Chicago, which will soar over 45km. This has been warned by experts that the support of such mountain may be damaged by winds and glaciers.",
        B: "For any conical mountain on the Earth, its height is limited by various factors. The factors include the Earth's mantle, collision of tectonic plates and erosion, so the tallest mountains are not likely to grow much higher.",
        C: "Mount Everest may grow in the future, because it won't sink lower into the Earth's hot interior like other mountains do. Another reason is that it hasn't reached the height limit of 15km yet.",
        D: "The Earth's crust is made up of continental plates that float in the rock of its mantle. This can result in earthquakes, which may force the highest mountains to collapse, according to a research."
      },
      answer: ""
    },
    {
      id: 19000159,
      title: "DNA Model",
      level: "Difficult",
      appeared: 0,
      audio: "public/Audio/test3_p1.mp3",
      question: "Which statement correctly summarizes the DNA model described?",
      passage: "",
      options: {
        A: "The proposed model uses Mobius weight functions to unify topological and sequence-dependent torsional characteristics in DNA.",
        B: "The model treats DNA as a flat, untwisted ribbon and uses the Mobius function solely for visual strand orientation mapping.",
        C: "The Mobius weight energy function models DNA purely as a bending rod and does not account for torsional topology or sequence variability.",
        D: "The Mobius weight function focuses exclusively on electronic base-pair interactions, ignoring large-scale mechanical properties."
      },
      answer: ""
    },
    {
      id: 19000158,
      title: "Genealogy",
      level: "Medium",
      appeared: 6,
      audio: "public/Audio/test3_p1.mp3",
      question: "Which statement correctly summarizes the study of genealogy?",
      passage: "",
      options: {
        A: "The study of family history began hundreds of years ago in North Africa in order to establish such things as ownership of property. It rapidly became a common practice in many cultures because inheritance played such an important role in society and government.",
        B: "Research into family history by ordinary people only started to become far more widespread in the early nineteenth century. Prior to that time, it was chiefly rich, important and powerful families who had an interest and involvement in this type of activity.",
        C: "All social classes of the general population have always been interested in recording their family history, but genealogy became really popular in the early nineteenth century due to the publication of a book concerning the methodology of determining family history.",
        D: "Originally, tracing family history was only used in order to establish the origins of prosperous and powerful families. However, by the middle of the twentieth century, ordinary people were also starting to show an interest in researching their family background too."
      },
      answer: ""
    }
] },  
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
if (selectedQuestion) {
  // Single-choice MCQ
  if (selectedTopic.type === "mcq-single") {
    return (
      <PTEReadingMCQ
        questionData={selectedQuestion}
        onBack={() => setSelectedQuestion(null)}
      />
    );
  }

  // Multiple-choice MCQ
  if (selectedTopic.type === "mcq-multiple") {
    return (
      <PTEReadingMCQMultiple
        questionData={selectedQuestion}
        onBack={() => setSelectedQuestion(null)}
      />
    );
  }

  // Regular Fill in the blanks
  if (selectedTopic.type === "fill-in-the-blanks") {
    const blanksKeys = Object.keys(selectedQuestion.options);
    const textParts = selectedQuestion.question.split(/_____/g);
    const blanks = blanksKeys.map((key) => selectedQuestion.options[key]);

    return (
      <PTEReadingFillInTheBlanks
        textParts={textParts}
        blanks={blanks}
        onBack={() => setSelectedQuestion(null)}
      />
    );
  }
// if (selectedTopic.type === "fill-in-the-blanks-drag-nd-drop") {
//   const textParts = selectedQuestion.question.split(/_____/g);
//   const blanksCount = textParts.length - 1;
//   const options = selectedQuestion.dragWords;

//   return (
//     <PTEFillInTheBlanksDrag
//       textParts={textParts}
//       blanksCount={blanksCount}
//       options={options}
//       onBack={() => setSelectedQuestion(null)}
//     />
//   );
// }
  // Drag-and-drop Fill in the blanks
    // if (selectedTopic.type === "fill-in-the-blanks-drag-nd-drop") {
    //   const { textParts, blanksCount, options } = selectedQuestion;
    //   return <PTEReadingFillInTheBlanksDrag textParts={textParts} blanksCount={blanksCount} options={options} onBack={() => setSelectedQuestion(null)} />;
    // }
 // Drag-and-drop Fill in the blanks
  if (selectedTopic.type === "fill-in-the-blanks-drag-nd-drop") {
    const { textParts, blanksCount, options } = selectedQuestion;
    return (
      <PTEReadingFillInTheBlanksDrag
        textParts={textParts}
        blanksCount={blanksCount}
        options={options}
        onBack={() => setSelectedQuestion(null)}
      />
    );
  }
if (selectedTopic.type === "listening-mcq-single") {
  return (
    <PTEListeningMCQ
      questionData={selectedQuestion}
      onBack={() => setSelectedQuestion(null)}
    />
  );
}
if (selectedTopic.type === "listening-mcq-multiple") {
  return (
    <PTEListeningMMCQ
      questionData={selectedQuestion}
      onBack={() => setSelectedQuestion(null)}
    />
  );
}
if (selectedTopic.type === "listening-fill-in-the-blanks") {
  return (
    <PTEListeningFillInTheBlanks
      questionData={selectedQuestion}
      onBack={() => setSelectedQuestion(null)}
    />
  );
}

if (selectedTopic.type === "listening-highlight-correct-summary") {
  return (
    <PTEListeningHighlightCorrectSummary
      questionData={selectedQuestion}
      onBack={() => setSelectedQuestion(null)}
    />
  );
}

if (selectedTopic.type === "listening-select-missing-word") {
  return (
    <PTEListeningSelectMissingWord
      questionData={selectedQuestion}
      onBack={() => setSelectedQuestion(null)}
    />
  );
}

}

  // ------------------------
  // Conditional rendering
  // ------------------------
  // if (selectedQuestion) {
  //   return (
  //     <PTEReadingMCQ
  //       questionData={selectedQuestion}
  //       onBack={() => setSelectedQuestion(null)}
  //     />
  //   );
  // }
// if (selectedQuestion) {
//     if (selectedTopic.type === "mcq-single") {
//       return (
//         <PTEReadingMCQ
//           questionData={selectedQuestion}
//           onBack={() => setSelectedQuestion(null)}
//         />
//       );
//     }
    
//     if (selectedTopic.type === "mcq-multiple") {
//       return (
//         <PTEReadingMCQMultiple
//           questionData={selectedQuestion}
//           onBack={() => setSelectedQuestion(null)}
//         />
//       );
//     }
//     if (selectedQuestion && selectedTopic.type === "fill-in-the-blanks") {
//   // Split the question string into textParts and blanks arrays
//   const blanksKeys = Object.keys(selectedQuestion.options);
//   const textParts = selectedQuestion.question.split(/_____/g); // split at blanks (or handle manually)
//   const blanks = blanksKeys.map((key) => selectedQuestion.options[key]);

//   return (
//     <PTEReadingFillInTheBlanks
//       textParts={textParts}
//       blanks={blanks}
//       onBack={() => setSelectedQuestion(null)}
//     />
//   );
// }
//  if (selectedTopic.type === "fill-in-the-blanks-drag-nd-drop") {
//     const textParts = selectedQuestion.question.split(/_____/g);
//     const blanksCount = textParts.length - 1;

//     return (
//       <PTEFillInTheBlanksDrag
//         textParts={textParts}
//         blanksCount={blanksCount}
//         dragWords={selectedQuestion.dragWords}
//         onBack={() => setSelectedQuestion(null)}
//       />
//     );
//   }
//     // if (selectedTopic.type === "fill-in-the-blanks") {
//     //   return (
//     //     <PTEReadingFillInTheBlanks
//     //       questionData={selectedQuestion}
//     //       onBack={() => setSelectedQuestion(null)}
//     //     />
//     //   );
//     // }
//   }
  
  // if(selectedQuestion){
  //   const QuestionComponent=
  //   selectedTopic.title == "Multiple Choice Questions Multiple Answer"
  //   ? PTEReadingMCQMultiple
  //   :PTEReadingMCQ

  //   return(
  //     <QuestionComponent
  //     questionData={selectedQuestion}
  //     onBack={()=>setSelectedQuestion(null)}/>
  //   )
  // }

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
