import React, { useState } from "react";
import '../../styles/IeltsTest/ieltstest.css'
import { useNavigate } from "react-router-dom";
import BlankInput from "../../components/IeltsFullTestComponents/BlankInput";
import DropDown3 from "../../components/IeltsFullTestComponents/DropDown3";
import DropDown4 from "../../components/IeltsFullTestComponents/DropDown4";
import DropDown from "../../components/IeltsFullTestComponents/DropDown";
import { account } from "../../lib/appwrite";
import { saveIeltsTest } from "../../lib/helpers/ieltsScoreHelper";
import ResultModal from "../../components/IeltsFullResultModal";
import Overlay from "../../components/Overlay";


const IELTSTest = () => {
  const navigate = useNavigate();

  // State to track section and part
  const [section, setSection] = useState("listening"); // listening, reading, writing
  const [part, setPart] = useState(1);
const[showModal, setShowModal]= useState(false)
  const [resultData, setResultData]= useState({
    listeningScore:0,
    readingScore:0,
    listeningBand:0,
    readingBand:0,
    overallBand:0
  })
  const [loading, setLoading] = useState(false); // NEW

  // Answers object
  const [allAnswers, setAllAnswers] = useState({
    listening: { part1: {}, part2: {}, part3: {}, part4: {} },
    reading: { part1: {}, part2: {}, part3: {} },
    writing: { part1: {}, part2: {} },
  });

  // Handle answer change
  const handleAnswerChange = (section, part, name, value) => {
    setAllAnswers((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [part]: {
          ...prev[section][part],
          [name]: value,
        },
      },
    }));
  };
  const handleSubmit = () => {
  console.log(JSON.stringify(allAnswers, null, 2));
};

// const endFullTest = async (testId) => {
//   try {
//     const payload = { answers: [] };

//     for (let section in allAnswers) {
//       for (let qid in allAnswers[section]) {
//         payload.answers.push({
//           question_id: qid.replace("q", ""),
//           answer: String(allAnswers[section][qid]).trim().toLowerCase()
//         });
//       }
//     }

//     console.log("PAYLOAD SENT:", JSON.stringify(payload, null, 2));

//     const url = `https://alpha-prep-fast-api.vercel.app/submit_fulltest/${testId}`;

//     const response = await fetch(url, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload)
//     });

//     if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

//     const data = await response.json();
//     console.log("RESPONSE:", data);

//     // Correct display
//     let message = `Full Test Submitted!\n`;
//     message += `Total Score: ${data.total_score}/${data.total_questions}\n\n`;

//     for (let section in data.scores_by_section) {
//       message += `${section}: ${data.scores_by_section[section].score}/${data.scores_by_section[section].total}\n`;
//     }

//     alert(message);

//   } catch (error) {
//     console.error("Error sending request", error);
//     alert("Failed to submit full test. Check console for details.");
//   }
// };
//   const endFullTest = async (testId) => {
//   try {
//     const payload = { answers: [] };

//     for (let section in allAnswers) {
//       for (let qid in allAnswers[section]) {
//         payload.answers.push({
//           question_id: qid.replace("q", ""), // remove 'q' prefix
//           answer: String(allAnswers[section][qid]).trim().toLowerCase()
//         });
//       }
//     }

//     console.log("PAYLOAD SENT:", JSON.stringify(payload, null, 2));

//     const url = `https://alpha-prep-fast-api.vercel.app/submit_fulltest/${testId}`;

//     const response = await fetch(url, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload)
//     });

//     if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

//     const data = await response.json();
//     console.log("RESPONSE:", data);

//     // Display result correctly
//     let message = `Full Test Submitted!\n`;
//     message += `Total Score: ${data.total_score}/${data.total_questions}\n\n`;

//     for (let section in data.scores_by_section) {
//       const score = data.scores_by_section[section];
//       let total = section === "Listening" ? 40 : section === "Reading" ? 40 : 0; // Adjust totals
//       message += `${section}: ${score}/${total}\n`;
//     }

//     alert(message);

//   } catch (error) {
//     console.error("Error sending request", error);
//     alert("Failed to submit full test. Check console for details.");
//   }
// };

// # this is fastapiend test
// const endFullTest = async (testId) => {
//   try {
//     const payload = { answers: [] };

//     // Convert allAnswers to payload
//     for (let section in allAnswers) {
//       for (let part in allAnswers[section]) {
//         const partAnswers = allAnswers[section][part];
//         for (let qid in partAnswers) {
//           payload.answers.push({
//             question_id: qid.replace("q", ""),
//             answer: String(partAnswers[qid]).trim().toLowerCase()
//           });
//         }
//       }
//     }

//     console.log("PAYLOAD SENT:", JSON.stringify(payload, null, 2));

//     const url = `https://alpha-prep-fast-api.vercel.app/submit_fulltest/${testId}`;

//     const response = await fetch(url, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload)
//     });

//     if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

//     const data = await response.json();
//     console.log("RESPONSE:", data);

//     // Display result
//     let message = `Full Test Submitted!\n`;
//     message += `Total Score: ${data.total_score}/${data.total_questions}\n\n`;

//     for (let section in data.scores_by_section) {
//       const score = data.scores_by_section[section];
//       const total = section.toLowerCase() === "listening" ? 40 : section.toLowerCase() === "reading" ? 40 : 0;
//       message += `${section.charAt(0).toUpperCase() + section.slice(1)}: ${score}/${total}\n`;
//     }

//     alert(message);

//   } catch (error) {
//     console.error("Error sending request", error);
//     alert("Failed to submit full test. Check console for details.");
//   }
// };
const getBandFromScore = (score, total) => {
  const percentage = (score / total) * 100;

  if (percentage >= 90) return 9;
  if (percentage >= 80) return 8;
  if (percentage >= 70) return 7;
  if (percentage >= 60) return 6;
  if (percentage >= 50) return 5;
  if (percentage >= 40) return 4;
  if (percentage >= 30) return 3;
  if (percentage >= 20) return 2;
  return 1;
};
// # This is the fast Api one
// const endFullTest= async(testId)=>{
//   try {
//     const payload={ answers:[]}
//     for (let section in allAnswers){
//       for (let part in allAnswers[section]){
//         for(let qid in allAnswers[section][part]){
//           payload.answers.push({
//             question_id: qid.replace('q',''),
//             answer:String(allAnswers[section][part][qid]).trim().toLowerCase()
//           })
//         }
//       }
//     }
//     console.log("📤 PAYLOAD SENT:", payload);

//     const url = `https://alpha-prep-fast-api.vercel.app/submit_fulltest/${testId}`;

//     const response = await fetch(url,{
//       method:'POST',
//       headers: {'Content-Type':'application/json'},
//       body: JSON.stringify(payload)

//     })
//      if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     const data= await response.json()
//      console.log("📥 RAW BACKEND RESPONSE:", data);

//      const listeningScore = data.scores_by_section?.listening || 0;
//      const readingScore = data.scores_by_section?.reading || 0;

//      const listeningBand = getBandFromScore(listeningScore,40)
//      const readingBand = getBandFromScore(readingScore, 40)

//      const overallBand = Number(((listeningBand+readingBand)/2).toFixed(1))


//      console.log("🎧 Listening:", listeningScore, "/40 | Band", listeningBand);
// console.log("📖 Reading:", readingScore, "/40 | Band", readingBand);
// console.log("🏅 Overall Band:", overallBand);

//      const currectUser= await account.get()

//      const writingTask1 = allAnswers.writing.part1?.response || "";
// const writingTask2 = allAnswers.writing.part2?.response || "";
//      await saveIeltsTest({
//       userId: currectUser.$id,
//       testName: `IELTS FULL Test ${testId}`,
//       listeningScore,
//       readingScore,
//       writingTask1,
//       writingTask2,
//       band:overallBand
//      })
//       console.log("✅ Full IELTS test saved with bands!");
//   } 
  
  
//   catch (error) {
//     console.error("Error sending request", error);
//     alert("Failed to submit full test, check console");
//   }
// }

const endFullTest= async(testId)=>{
  try {
    
    setLoading(true); // show overlay
    const payload={ answers:[]}
    for (let section in allAnswers){
      for (let part in allAnswers[section]){
        for(let qid in allAnswers[section][part]){
          payload.answers.push({
            question_id: qid.replace('q',''),
            answer:String(allAnswers[section][part][qid]).trim().toLowerCase()
          })
        }
      }
    }
    console.log("📤 PAYLOAD SENT:", payload);

    const url = `https://alpha-prep-fast-api.vercel.app/submit_fulltest/${testId}`;

    const response = await fetch(url,{
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(payload)

    })
     if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data= await response.json()
     console.log("📥 RAW BACKEND RESPONSE:", data);

     const listeningScore = data.scores_by_section?.listening || 0;
     const readingScore = data.scores_by_section?.reading || 0;

     const listeningBand = getBandFromScore(listeningScore,40)
     const readingBand = getBandFromScore(readingScore, 40)

     const overallBand = Number(((listeningBand+readingBand)/2).toFixed(1))


     console.log("🎧 Listening:", listeningScore, "/40 | Band", listeningBand);
console.log("📖 Reading:", readingScore, "/40 | Band", readingBand);
console.log("🏅 Overall Band:", overallBand);

     const currectUser= await account.get()

     const writingTask1 = allAnswers.writing.part1?.response || "";
const writingTask2 = allAnswers.writing.part2?.response || "";
     await saveIeltsTest({
      userId: currectUser.$id,
      testName: `IELTS FULL Test ${testId}`,
      listeningScore,
      readingScore,
      writingTask1,
      writingTask2,
      band:overallBand
     })
      console.log("✅ Full IELTS test saved with bands!");
      setResultData({
      listeningScore,
      readingScore,
      listeningBand,
      readingBand,
      overallBand
    });
    setLoading(false); // hide overlay 
      setShowModal(true);
  } 
  
  
  catch (error) {
    console.error("Error sending request", error);
    alert("Failed to submit full test, check console");
  }
  finally {
    // setLoading(false); // hide overlay
  }
}


  // Test structure for bottom bar
  const testStructure = {
    listening: 4,
    reading: 3,
    writing: 2,
  };
const questions25to30 = [
  {
    id: 25,
    text: "What does the woman say about using laptops to teach writing to children with dyslexia?",
    options: [
      "Children often lack motivation to learn that way.",
      "Children become fluent relatively quickly.",
      "Children react more positively if they make a mistake.",
    ],
  },
  {
    id: 26,
    text: "When discussing whether to teach cursive or print writing, the woman thinks that",
    options: [
      "cursive writing disadvantages a certain group of children.",
      "print writing is associated with lower academic performance.",
      "most teachers in the UK prefer a traditional approach to handwriting.",
    ],
  },
  {
    id: 27,
    text: "According to the students, what impact does poor handwriting have on exam performance?",
    options: [
      "There is evidence to suggest grades are affected by poor handwriting.",
      "Neat handwriting is less important now than it used to be.",
      "Candidates write more slowly and produce shorter answers.",
    ],
  },
  {
    id: 28,
    text: "What prediction does the man make about the future of handwriting?",
    options: [
      "Touch typing will be taught before writing by hand.",
      "Children will continue to learn to write by hand.",
      "People will dislike handwriting on digital devices.",
    ],
  },
  {
    id: 29,
    text: "The woman is concerned that relying on digital devices has made it difficult for her to",
    options: [
      "take detailed notes.",
      "spell and punctuate.",
      "read old documents.",
    ],
  },
  {
    id: 30,
    text: "How do the students feel about their own handwriting?",
    options: [
      "concerned they are unable to write quickly",
      "embarrassed by comments made about it",
      "regretful that they have lost the habit",
    ],
  },
];

const multiSelectQuestions11t012 = [
  {
    id: "11_12",
    text: "Which TWO things does the speaker say about visiting the football stadium with children?",
    options: {
      A: "Children can get their photo taken with a football player.",
      B: "There is a competition for children today.",
      C: "Parents must stay with their children at all times.",
      D: "Children will need sunhats and drinks.",
      E: "The café has a special offer on meals for children.",
    },
  },
];

const multiSelectQuestions13t014 = [
  {
    id: "13_14",
    text: "Which TWO features of the stadium tour are new this year?",
    options: {
      A: "VIP tour",
      B: "360 cinema experience",
      C: "audio guide",
      D: "dressing room tour",
      E: "tours in other languages",
    },
  },
];
const multiSelectQuestions21t022 = [
  {
    id: "21_22",
    text: "Which TWO benefits for children of learning to write did both students find surprising?",
    options: {
      A: "improved fine motor skills",
      B: "improved memory",
      C: "improved concentration",
      D: "improved imagination",
      E: "improved spatial awareness",
    },
  },
];

const multiSelectQuestions23t024 = [
  {
    id: "23_24",
    text: "For children with dyspraxia, which TWO problems with handwriting do the students think are easiest to correct?",
    options: {
      A: "not spacing letters correctly",
      B: "not writing in a straight line",
      C: "applying too much pressure when writing",
      D: "confusing letter shapes",
      E: "writing very slowly",
    },
  },
];

const questions8to13 = [
  {
    id: 8,
    text: "Georgia O'Keeffe's style was greatly influenced by the changing fashions in art over the seven decades of her career.",
  },
  {
    id: 9,
    text: "When O'Keeffe finished high school, she had already made her mind up about the career that she wanted.",
  },
  {
    id: 10,
    text: "Alfred Stieglitz first discovered O'Keeffe's work when she sent some abstract drawings to his gallery in New York City.",
  },
  {
    id: 11,
    text: "O'Keeffe was the subject of Stieglitz's photographic work for many years.",
  },
  {
    id: 12,
    text: "O'Keeffe's paintings of the patio of her house in Abiquiú were among the artist's favourite works.",
  },
  {
    id: 13,
    text: "O'Keeffe produced a greater quantity of work during the 1950s to 1970s than at any other time in her life.",
  },
];

  // Skeleton parts content
  const partsContent = {
    listening: [
      <div key="listening-part1">
               <div>
                <div className="ielts-container">
      {/* Left column */}
      <div className="left-column">
        <h2>PART 1</h2>
        <audio controls>
          <source src="/Audio/test4_p1.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p style={{ marginTop: "20px" }}>Audioscript</p>
      </div>

      {/* Right column */}
      <div className="right-column">

<h3>Questions 1-10</h3>
<p>
  Complete the notes below. Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.
</p>

<div className="notes-box">
  <h4>Advice on Family Visit</h4>

  <strong>Accommodation</strong>
  <ul>
    <li>
      Hotel on George Street – cost of family room per night: £
      <BlankInput
        section='listening'
        part='part1'
        id={1} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>
    </li>
    <li>
      (approx.) 
      <BlankInput
        section='listening'
        part='part1'
        id={2} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>
    </li>
  </ul>

  <strong>Recommended Trips</strong>
  <ul>
    <li>
      a
      <BlankInput
        section='listening'
        part='part1'
        id={3} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/> 
      tour of the city centre (starts in Carlton Square)
    </li>
    <li>
      a trip by
      <BlankInput
        section='listening'
        part='part1'
        id={4} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/> 
      to the old fort
    </li>
  </ul>

  <strong>Science Museum</strong>
  <ul>
    <li>
      best day to visit: 
    <BlankInput
        section='listening'
        part='part1'
        id={5} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>
    </li>
    <li>
      see the exhibition about 
      <BlankInput
        section='listening'
        part='part1'
        id={6} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>, which opens soon
    </li>
  </ul>

  <strong>Food</strong>
  <ul>
    <li>
      Clacton Market: good for 
     <BlankInput
        section='listening'
        part='part1'
        id={7} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/> 
      food
    </li>
    <li>
      need to have lunch before 
      <BlankInput
        section='listening'
        part='part1'
        id={8} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/> 
      p.m.
    </li>
  </ul>

  <strong>Theatre Tickets</strong>
  <ul>
    <li>
      save up to 
    <BlankInput
        section='listening'
        part='part1'
        id={9} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>
      % on ticket prices at bargaintickets.com
    </li>
  </ul>

  <strong>Free Activities</strong>
  <ul>
    <li>
      Blakewell Gardens: Roots Music Festival – climb Telegraph Hill to see a view of the 
     <BlankInput
        section='listening'
        part='part1'
        id={10} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>
    </li>
  </ul>
</div>

    </div>
   </div>
   </div>


      </div>,
      <div key="listening-part2">
         <div>
                        <div className="ielts-container">
              {/* Left column */}
              <div className="left-column">
                <h2>PART 2</h2>
                <audio controls>
                  <source src="/Audio/test4_p2.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <p style={{ marginTop: "20px" }}>Audioscript</p>
              </div>
         <div className="right-column">
              {/* Right column */}
              <h3 style={{  marginTop: "10px", marginBottom:'10px'}}>Questions 11 and 12 </h3>
 <h4 style={{  marginTop: "10px", marginBottom:'10px'}}>Choose TWO letters, A-E.</h4>
 {multiSelectQuestions11t012.map((q) => (
  <div key={q.id} className="question-block">
    <p>
      <strong>{q.id.replace("_", " & ")}</strong>. {q.text}
    </p>

    {Object.entries(q.options).map(([letter, text]) => {
      const selected = allAnswers.listening.part2[q.id] || [];

      return (
        <label key={letter}>
          <input
            type="checkbox"
            name={q.id}
            value={letter}
            checked={selected.includes(letter)}
            onChange={(e) => {
              const prev = allAnswers.listening.part2[q.id] || [];

              if (e.target.checked) {
                handleAnswerChange(
                  "listening",
                  "part2",
                  q.id,
                  [...prev, e.target.value]
                );
              } else {
                handleAnswerChange(
                  "listening",
                  "part2",
                  q.id,
                  prev.filter((v) => v !== e.target.value)
                );
              }
            }}
          />
          {" "}
          {letter}. {text}
        </label>
      );
    })}
  </div>
))}
              <h3 style={{  marginTop: "10px", marginBottom:'10px'}}>Questions 13 and 14 </h3>
 <h4 style={{  marginTop: "10px", marginBottom:'10px'}}>Choose TWO letters, A-E.</h4>
{multiSelectQuestions13t014.map((q) => (
  <div key={q.id} className="question-block">
    <p>
      <strong>{q.id.replace("_", " & ")}</strong>. {q.text}
    </p>

    {Object.entries(q.options).map(([letter, text]) => {
      const selected = allAnswers.listening.part2[q.id] || [];

      return (
        <label key={letter}>
          <input
            type="checkbox"
            name={q.id}
            value={letter}
            checked={selected.includes(letter)}
            onChange={(e) => {
              const prev = allAnswers.listening.part2[q.id] || [];

              if (e.target.checked) {
                handleAnswerChange(
                  "listening",
                  "part2",
                  q.id,
                  [...prev, e.target.value]
                );
              } else {
                handleAnswerChange(
                  "listening",
                  "part2",
                  q.id,
                  prev.filter((v) => v !== e.target.value)
                );
              }
            }}
          />
          {" "}
          {letter}. {text}
        </label>
      );
    })}
  </div>
))}

                              <div className="meowx">
                  <h3><strong>Questions 15-20</strong></h3>
                  <p>
                    Which event in the history of football in the UK took place in each of the following years?
                    Choose the correct letter, <strong>A–F</strong>, next to Questions 15-20.
                  </p>
                </div>
                <div style={{ marginBottom: "20px" }}></div>
              
                <div className="center-containerx">
                  <div className="question-blockx">
                    <h4>Events in the history of football</h4>
                    <p><strong>A.</strong> the introduction of pay for the players.</p>
                    <p><strong>B.</strong> a change to the design of the goal.</p>
                    <p><strong>C.</strong> the first use of lights for matches.</p>
                    <p><strong>D.</strong> the introduction of goalkeepers.</p>
                    <p><strong>E.</strong> the first international match.</p>
                    <p><strong>F.</strong> two changes to the rules of the game.</p>
                    <p><strong>G.</strong> the introduction of a fee for spectators.</p>
                    <p><strong>H.</strong> an agreement on the length of a game</p>
                  </div>
                </div>

                <div className="dropdown-blockx">
                  <p>15.1870<DropDown3 section='listening' part='part2' id={15} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
                  <p>16. 1874 <DropDown3 section='listening' part='part2' id={16} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/> </p>
                  <p>17. 1875 <DropDown3 section='listening' part='part2' id={17} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
                  <p>18. 1877<DropDown3 section='listening' part='part2' id={18} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
                  <p>19. 1878<DropDown3 section='listening' part='part2' id={19} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
                  <p>18. 1880<DropDown3 section='listening' part='part2' id={20} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
                  
                </div>
         </div>
          
                   
        </div>
           </div>
           
      </div>,
      <div key="listening-part3">
         <div>
                        <div className="ielts-container">
              {/* Left column */}
              <div className="left-column">
                <h2>PART 3</h2>
                <audio controls>
                  <source src="/Audio/test4_p3.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <p style={{ marginTop: "20px" }}>Audioscript</p>
              </div>
         <div className="right-column">
              {/* Right column */}
              <h3 style={{  marginTop: "10px", marginBottom:'10px'}}>Questions 21 and 22 </h3>
 <h4 style={{  marginTop: "10px", marginBottom:'10px'}}>Choose TWO letters, A-E.</h4>
 {multiSelectQuestions21t022.map((q) => (
  <div key={q.id} className="question-block">
    <p>
      <strong>{q.id.replace("_", " & ")}</strong>. {q.text}
    </p>

    {Object.entries(q.options).map(([letter, text]) => {
      const selected = allAnswers.listening.part3[q.id] || [];

      return (
        <label key={letter}>
          <input
            type="checkbox"
            name={q.id}
            value={letter}
            checked={selected.includes(letter)}
            onChange={(e) => {
              const prev = allAnswers.listening.part3[q.id] || [];

              if (e.target.checked) {
                handleAnswerChange(
                  "listening",
                  "part3",
                  q.id,
                  [...prev, e.target.value]
                );
              } else {
                handleAnswerChange(
                  "listening",
                  "part3",
                  q.id,
                  prev.filter((v) => v !== e.target.value)
                );
              }
            }}
          />
          {" "}
          {letter}. {text}
        </label>
      );
    })}
  </div>
))}
              <h3 style={{  marginTop: "10px", marginBottom:'10px'}}>Questions 23 and 24 </h3>
 <h4 style={{  marginTop: "10px", marginBottom:'10px'}}>Choose TWO letters, A-E.</h4>
{multiSelectQuestions23t024.map((q) => (
  <div key={q.id} className="question-block">
    <p>
      <strong>{q.id.replace("_", " & ")}</strong>. {q.text}
    </p>

    {Object.entries(q.options).map(([letter, text]) => {
      const selected = allAnswers.listening.part3[q.id] || [];

      return (
        <label key={letter}>
          <input
            type="checkbox"
            name={q.id}
            value={letter}
            checked={selected.includes(letter)}
            onChange={(e) => {
              const prev = allAnswers.listening.part3[q.id] || [];

              if (e.target.checked) {
                handleAnswerChange(
                  "listening",
                  "part3",
                  q.id,
                  [...prev, e.target.value]
                );
              } else {
                handleAnswerChange(
                  "listening",
                  "part3",
                  q.id,
                  prev.filter((v) => v !== e.target.value)
                );
              }
            }}
          />
          {" "}
          {letter}. {text}
        </label>
      );
    })}
  </div>
))}
            
                <h3><strong>Questions 25-30</strong></h3>
                <p>Choose the correct letter <strong>A, B, or D</strong>.</p>
                <h3>Teaching handwriting</h3>
                 {questions25to30.map((q)=>(
                <div key={q.id} className="question-block">
                  <p className="mcq-question"><strong>{q.id}.</strong> {q.text}</p>
                  {q.options.map((text,index)=>(
                    <label key={index}>
                      <input type="radio"
                      name={`q${q.id}`}
                      value={text}
                      checked={allAnswers.listening.part3[`q${q.id}`]=== text}
                      onChange={(e)=>{handleAnswerChange('listening', 'part3' ,e.target.name, e.target.value)}}
                       />
                       {text}
                    </label>
                  ))}
                </div>
              ))}
                     
               
         </div>
          
                   
        </div>
           </div>
           
      </div>,
      <div key="listening-part4">
             <div>
                <div className="ielts-container">
      {/* Left column */}
      <div className="left-column">
        <h2>PART 4</h2>
        <audio controls>
          <source src="/Audio/test4_p4.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p style={{ marginTop: "20px" }}>Audioscript</p>
      </div>

      {/* Right column */}
      <div className="right-column">

<h3>Questions 31-40</h3>
<p>
  Complete the notes below. Write <strong>ONE WORD ONLY</strong> for each answer.
</p>

<div className="notes-box">
  <h4>Research in the area around the Chembe Bird Sanctuary</h4>

  <strong>The importance of birds of prey to the local communities</strong>
  <ul>
    <li>
      They destroy 
        <BlankInput
        section='listening'
        part='part4'
        id={31} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>. 
      and other rodents.
    </li>
    <li>
      They help to prevent farmers from being bitten by 
          <BlankInput
        section='listening'
        part='part4'
        id={32} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>.
    </li>
    <li>
      They have been an important part of the local culture for many years.
    </li>
    <li>
      They now support the economy by encouraging 
          <BlankInput
        section='listening'
        part='part4'
        id={33} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/> 
      in the area.
    </li>
  </ul>

  <strong>Falling numbers of birds of prey</strong>
  <ul>
    <li>
      The birds may be accidentally killed by 
         <BlankInput
        section='listening'
        part='part1'
        id={34} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/> 
      when they are hunting or sleeping.
    </li>
    <li>
      By electrocution from contact with power lines, especially at times when there is a lot of 
          <BlankInput
        section='listening'
        part='part1'
        id={35} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>.
    </li>
    <li>
      Local farmers may illegally shoot them or 
          <BlankInput
        section='listening'
        part='part4'
        id={36} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/> them.
    </li>
  </ul>

  <strong>Ways of protecting chickens from birds of prey</strong>
  <ul>
    <li>
      Clearing away vegetation from the area (unhelpful)
    </li>
    <li>
      Providing a 
          <BlankInput
        section='listening'
        part='part4'
        id={37} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>
      for chickens (expensive)
    </li>
    <li>
      Frightening birds of prey by keeping a 
          <BlankInput
        section='listening'
        part='part4'
        id={38} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>
    </li>
    <li>
      Making a 
          <BlankInput
        section='listening'
        part='part4'
        id={39} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/> 
      - e.g. with metal objects
    </li>
    <li>
      A 
          <BlankInput
        section='listening'
        part='part4'
        id={40} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/> 
      of methods is usually most effective.
    </li>
  </ul>
</div>

    </div>
   </div>
   </div>
      </div>,
    ],
    reading: [
      <div key="reading-part1">
          <div className="ielts-container">
      {/* LEFT COLUMN */}
      <div className="left-column">
        <h2>Passage 1.</h2> <br />
        <h3>
          You should spend about 20 minutes on <strong>Questions 1-13</strong>, 
          which are based on Reading Passage 1 below.
        </h3>

      </div>

      {/* RIGHT COLUMN */}
      <div className="right-column">

        <h3>Questions 1-7</h3>
        <p>
          Complete the notes below.<br/> Write <strong>ONE WORD AND/OR A NUMBER</strong>from the passage for each answer.
        </p>
        <p>Write your answers in boxes 1-7 on your answer sheet.</p>
 
                      {/* Notes Questions 1-6 */}
      <div className="notes-box">
  <h2 style={{ textAlign: "center" , marginBottom: "20px"  }}>The life and work of Georgia O'Keeffe</h2>  
  <div className="reading-passage">

  <ul>
    <li>
      studied art, then worked as a{" "}
      <BlankInput
      section='reading'
        part='part1'
        id={1} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>{" "}
      in various places in the USA
    </li>

    <li>
      created drawings using{" "}
      <BlankInput
      section='reading'
        part='part1'
        id={2} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>{" "}
      which were exhibited in New York City
    </li>

    <li>
      moved to New York and became famous for her paintings of the city's{" "}
     <BlankInput
      section='reading'
        part='part1'
        id={3} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>
    </li>

    <li>
      produced a series of innovative close-up paintings of{" "}
     <BlankInput
      section='reading'
        part='part1'
        id={4} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>
    </li>

    <li>
      went to New Mexico and was initially inspired to paint the many{" "}
      <BlankInput
      section='reading'
        part='part1'
        id={5} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>{" "}
      that could be found there
    </li>

    <li>
      continued to paint various features that together formed the dramatic{" "}
      <BlankInput
      section='reading'
        part='part1'
        id={6} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>{" "}
      of New Mexico for over forty years
    </li>

    <li>
      travelled widely by plane in later years, and painted pictures of clouds
      and{" "}
      <BlankInput
      section='reading'
        part='part1'
        id={7} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>{" "}
      seen from above
    </li>
  </ul>
</div>  
  </div>
<br/>
   <h3><strong>Questions 8-13</strong></h3><br />
        <p>
          Do the following statements agree with the information given in Reading Passage 1?
          <br />
          Write your answers in boxes 8-13 .
        </p>
         <div className="tf">
          <h3>TRUE: if the statement agrees with the information</h3>
          <h3>FALSE: if the statement contradicts the information</h3>
          <h3>NOT GIVEN: <i>if there is no information on this</i></h3>
        </div><br /> 

      {questions8to13.map((q) => (
  <div key={q.id} className="question-block">
    <p>
      {q.id}. <strong>{q.text}</strong>
    </p>

    <div className="radio-block">
      <label>
        <input
          type="radio"
          name={`q${q.id}`}
          value="True"
          checked={allAnswers.reading.part1[`q${q.id}`] === "True"}
          onChange={(e) =>
            handleAnswerChange("reading", "part1", e.target.name, e.target.value)
          }
        />
        TRUE
      </label>

      <label>
        <input
          type="radio"
          name={`q${q.id}`}
          value="False"
          checked={allAnswers.reading.part1[`q${q.id}`] === "False"}
          onChange={(e) =>
            handleAnswerChange("reading", "part1", e.target.name, e.target.value)
          }
        />
        FALSE
      </label>

      <label>
        <input
          type="radio"
          name={`q${q.id}`}
          value="Not Given"
          checked={allAnswers.reading.part1[`q${q.id}`] === "Not Given"}
          onChange={(e) =>
            handleAnswerChange("reading", "part1", e.target.name, e.target.value)
          }
        />
        NOT GIVEN
      </label>
    </div>
  </div>
))}

    </div>
    </div>
      </div>,
      <div key="reading-part2">
        <div className="ielts-container">
      {/* LEFT COLUMN */}
      <div className="left-column">
        <h2>Passage 2.</h2> <br />
        <h3>
          You should spend about 20 minutes on <strong>Questions 14-26</strong>, 
          which are based on Reading Passage 2 below.
        </h3>

      </div>

      {/* RIGHT COLUMN */}
      <div className="right-column">
<h2 style={{ textAlign: "center", marginBottom: "20px" }}>Procrastination</h2>
          <h2><strong>Questions 14–17</strong></h2><br />
        <p>
          Reading Passage 2 has six paragraphs, A–F </p>.  
          <p>Which paragraph contains the following information? 
          Choose the correct letter, A–F, in boxes 14–17 on your answer sheet.</p>  
        {/* <p> <br /><strong>NB:</strong> You may use any letter more than once.<br/></p> 
         */}
            <div className="question-block">

              <p>14. how a type of plant functions as a natural protection for coastlines<DropDown4 section='reading' part='part2' id={14} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
              <p>15. a prediction about how long it could take to stop noticing the effects of climate change <DropDown4 section='reading' part='part2' id={15} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
          <p>16. a reference to the fact that a solution is particularly cost-effective<DropDown4 section='reading' part='part2' id={16} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
         <p>17. a mention of a technology used to locate areas most in need of intervention<DropDown4 section='reading' part='part2' id={17} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>

            </div>
        <h3>Questions 18-22</h3>
        <p>
          Complete the sentences below</p><br/><p>Choose <strong>ONE WORD ONLY</strong>from the passage for each answer.</p> 
        
        <p>Write your answers in boxes 18-22 on your answer sheet.</p>
 
                      {/* Notes Questions 17-22 */}
      <div >
  <h2 style={{ textAlign: "center" , marginBottom: "20px"  }}></h2>
        
  <div className="reading-passage">
            <div className="question-block">

              <p>18.The stormwater-management programme in Miami Beach has involved the installation of efficient
                {" "}
<BlankInput
        section='reading'
        part='part2'
        id={18} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>{" "}</p>
              <p>19. The construction of{" "}
     <BlankInput
        section='reading'
        part='part2'
        id={19} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>{" "}was the first stage of a project to ensure the success of mangroves in Indonesia.
{" "}</p>
              <p>20. As a response to rising floodwaters in the Mekong Delta, a not-for-profit organisation has been building houses that can
                {" "}<BlankInput
        section='reading'
        part='part2'
        id={20} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>{" "}
 </p>
          <p>21.Rising sea levels in Bangladesh have made it necessary to introduce various
{" "}
      <BlankInput
        section='reading'
        part='part2'
        id={21} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>{" "}</p>

that are suitable for areas of high salt content.
{" "}
<p>22.A project in LA has increased the number of
      <BlankInput
        section='reading'
        part='part2'
        id={22} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>{" "}
on the city's streets.</p>
         
            </div>
</div>
                              <div>
          <p>
            <h3><strong>Questions 23-26</strong></h3>
    
            Look at the following statements (Questions 23-26) and the list of people below. 
            <br/>Match each statement with the correct person, A-E. 
           Choose the correct letter , <strong> A-E</strong>,next to <strong> Questions 23-26.</strong>
          </p>

                <div className="center-containerx">
                  <div className="question-blockx">
                   <h4>List of People</h4>
            <p><strong>A.</strong>  Yanira Pineda.</p>
            <p><strong>B.</strong> Susanna Tol.</p>
            <p><strong>C.</strong> Elizabeth English.</p>
            <p><strong>D.</strong> Raisa Chowdhury.</p>
            <p><strong>E.</strong> Greg Spotts.</p>

                  </div>
                </div>

                <div className="dropdown-blockx">
                      <p>23. It is essential to adopt strategies which involve and help residents of the region.<DropDown3 section='reading' part='part2' id={23} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
              <p>24.Interventions which reduce heat are absolutely vital for our survival in this location. <DropDown3 section='reading' part='part2' id={24} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
          <p>25. More work will need to be done in future decades to deal with the impact of rising water levels.<DropDown3 section='reading' part='part2' id={25} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
         <p>26. The number of locations requiring action to adapt to flooding has grown in recent years.<DropDown3 section='reading' part='part2' id={26} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>

                  
                </div>
         </div>

    
    </div>
    </div>
    </div>
      </div>,
      <div key="reading-part3">
<div className="ielts-container">
      {/* LEFT COLUMN */}
      <div className="left-column">
        <h2>Passage 3.</h2> <br />
        <h3>
          You should spend about 20 minutes on <strong>Questions 27-40</strong>, 
          which are based on Reading Passage 3 below.
        </h3>

      </div>

      {/* RIGHT COLUMN */}
      <div className="right-column">
<h2 style={{ textAlign: "center", marginBottom: "20px" }}>Procrastination</h2>
          <h2><strong>Questions 27–31</strong></h2>
        <p>
          Reading Passage 3 has seven paragraphs, A–F </p>.  
          <p>Which paragraph contains the following information? 
          Choose the correct letter, A–G, in boxes 27–31 on your answer sheet.</p>  
        <p> <strong>NB:</strong> You may use any letter more than once.</p> 
        <br/>
        
            <div className="question-block">

              <p>27. an example of how one predator has been protected by the introduction of livestock guard dogs<DropDown section='reading' part='part3' id={27} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
              <p>28. an optimistic suggestion about the possible positive developments in the use of livestock guard dogs
 <DropDown section='reading' part='part3' id={28} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
          <p>29. a description of how the methods used by livestock guard dogs help to keep predators away<DropDown section='reading' part='part3' id={29} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
         <p>30.claims by different academics that the use of livestock guard dogs is a successful way of protecting farmers' herds<DropDown section='reading' part='part3' id={30} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
           <p>31.a reference to how livestock guard dogs gain their skills<DropDown section='reading' part='part3' id={30} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>

  
 
                              <div>
          <p>
            <h3><strong>Questions 32-36</strong></h3>
    
            Look at the following statements (Questions 32-36) and the list of people below. 
            <br/>Match each statement with the correct person, A-E. 
           Choose the correct letter , <strong> A-E</strong>,next to <strong> Questions 32-36.</strong>
          </p>

                <div className="center-containerx">
                  <div className="question-blockx">
                   <h4>List of People</h4>
            <p><strong>A.</strong>  Dan Macon.</p>
            <p><strong>B.</strong> Silvia Ribeiro.</p>
            <p><strong>C.</strong> Linda van Bommel.</p>
            <p><strong>D.</strong> Julie Young.</p>
            <p><strong>E.</strong> Bethany Smith.</p>

                  </div>
                </div>

                <div className="dropdown-blockx">
                      <p>32.The use of guard dogs may save the lives of both livestock and wild animals.<DropDown3 section='reading' part='part3' id={32} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
              <p>33.Claims of a change in behaviour from those using livestock guard dogs may not be totally accurate. <DropDown3 section='reading' part='part3' id={33} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
          <p>34. There may be negative results if the use of livestock guard dogs is not sufficiently widespread.<DropDown3 section='reading' part='part3' id={34} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
         <p>35.Livestock guard dogs are the best way of protecting farm animals, as long as the dogs are appropriately handled.<DropDown3 section='reading' part='part3' id={35} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
         <p>36.Teaching a livestock guard dog how to do its work needs a different focus from teaching a house guard dog..<DropDown3 section='reading' part='part3' id={36} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
                           
                </div>
                    <h2><strong>Questions 37-40</strong></h2><br />
    
        <p>
          Complete the Summary<br/><p>Write <strong>ONE WORD AND/OR A NUMBER</strong>from the passage for each answer.</p> 
        </p>
        <p>Write your answers in boxes 37-40 on your answer sheet.</p>
 
                      {/* Notes Questions 17-22 */}
      <div className="notes-box">
  <h2 style={{ textAlign: "center" , marginBottom: "20px"  }}></h2>
      
  
  <div className="reading-passage">
  <h2 style={{ textAlign: "center" , marginBottom:'20px' }}>Unintended ecological effects of using guard dogs</h2>

            <div className="question-block">

              <p  >In Namibia, livestock guard dogs have been used to protect domestic animals from attacks by cheetahs. 
                This has led to a rise in the deaths of other predators, particularly
                {" "}
      <BlankInput
        section='reading'
        part='part3'
        id={37} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>{" "}
.</p>
              <p> n addition, it has been suggested that the dogs could have
     {" "}
      <BlankInput
        section='reading'
        part='part3'
        id={38} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>{" "}which may affect other species, and that they may reduce the amount of

{" "}
      <BlankInput
        section='reading'
        part='part3'
        id={39} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>{" "}
. </p>
          <p>available to certain wild animals.On the other hand, these dogs may help birds by protecting their nests.
             These might otherwise be threatened by predators such as
{" "}
      <BlankInput
        section='reading'
        part='part3'
        id={40} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>{" "}

</p>
         
            </div>
            </div>
            </div>   
                
         </div>
    </div>
    </div>
    </div>


      </div>,
    ],
   writing: [
      <div key="writing-part1">
                <div className="ielts-container">
                    <div className="left-column">
                         <h2>Task 1.</h2>
              <h3>
                You should spend about 20 minutes on <strong>Task-1</strong>
              </h3>
              {/* <img
                src={myImage}
                alt="Writing Task 1"
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              /> */}
                    </div>
   <div className="right-column">
            <textarea
    className="textarea"
   value={allAnswers.writing.part1?.response || ""}
   onChange={(e)=> handleAnswerChange( "writing","part1",'response', e.target.value)}
   placeholder="Write your Response here"
style={{width: "100%",height: "100%",padding: "10px",fontSize: "16px",borderRadius: "6px",border: "1px solid #ccc",
                  resize: "none",
                }}
                        />
                    </div>
                </div>
            
</div>,
      <div key="writing-part2">
                      <div className="ielts-container">
                    <div className="left-column">
                         <h2>Task 2.</h2>
              <h3>
                You should spend about 40 minutes on <strong>Task-2</strong>
              </h3>
              {/* <img
                src={myImage}
                alt="Writing Task 1"
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              /> */}
                    </div>
   <div className="right-column">
            <textarea
    className="textarea"
 value={allAnswers.writing.part2?.response || ""}
   onChange={(e)=> handleAnswerChange( "writing","part2",'response', e.target.value)}
   placeholder="Write your Response here"
style={{width: "100%",height: "100%",padding: "10px",fontSize: "16px",borderRadius: "6px",border: "1px solid #ccc",
                  resize: "none",
                }}
                        />
                    </div>
                </div>
      </div>,
    ],
  };

  // Handle leaving test safely
  const handleNavigateBack = () => {
    if (
      window.confirm(
        "All progress will be lost if you leave this page. Are you sure?"
      )
    ) {
      navigate("/ielts-dash");
    }
  };

  return (
    <div className="ielts-wrapper">
      {/* Scrollable content */}
      <div className="part-content">
        {partsContent[section][part - 1]}
      </div>

      {/* Bottom bar */}
      <div className="bottom-bar">
        {/* Back to dashboard */}
        <button
          className="back-btn"
          onClick={handleNavigateBack}
          > Back
        </button>

        {/* Sections & Parts */}
        {Object.entries(testStructure).map(([sec, totalParts]) => (
          <div key={sec} className="bottom-section">
            {/* Section button */}
            <button
              className={`section-btn ${section === sec ? "active" : ""}`}
              onClick={() => {
                setSection(sec);
                setPart(1);
              }}
            >
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </button>

            {/* Part buttons */}
            {[...Array(totalParts)].map((_, i) => {
              const p = i + 1;
              return (
                <button
                  key={p}
                  className={`part-btn ${
                    section === sec && part === p ? "active" : ""
                  }`}
                  onClick={() => {
                    setSection(sec);
                    setPart(p);
                  }}
                >
                  {p}
                </button>
              );
            })}
          </div>
        ))}

        {/* End test button */}
        <button className="end-btn" onClick={()=>endFullTest("IELTS_AC_20_2025_TEST4")}>
          End Test
        </button>
      </div>
             <ResultModal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              result={resultData}
            />
            <Overlay show={loading}>
        <h2>Please wait, calculating your score...</h2>
      </Overlay>
      
      {showModal && (
            <ResultModal 
              resultData={resultData} 
              onClose={() => setShowModal(false)} 
            />
          )}
      
    </div>
  );
};

export default IELTSTest;
