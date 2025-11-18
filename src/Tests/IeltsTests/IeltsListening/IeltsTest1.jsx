import React, { useState } from "react";
import "../../../styles/ieltsListening.css";

import correctAnswers from '../../../Data/Ielts/IeltsListening/IeltsListeningTest1.json'
import ResultModal from "./ResultModal";

const IeltsListening = () => {



  const [showModal, setShowModal] = useState(false)
  const[partScore, setPartScore] = useState({})
  const[totalScore, setTotalScore] = useState()

  const [currentPart, setCurrentPart] = useState(0);
  const [allAnswers, setAllAnswers] = useState({
    part1: {},
    part2: {},
    part3: {},
    part4: {},
  });
// Questions 11–16 (single choice)
  const questions11to16 = [
    {
      id: 11,
      text: "Heather says pottery differs from other art forms because",
      options: {
        A: "it lasts longer in the ground.",
        B: "it is practised by more people.",
        C: "it can be repaired more easily.",
      },
    },
    {
      id: 12,
      text: "Archaeologists sometimes identify the use of ancient pottery from",
      options: {
        A: "the clay it was made with.",
        B: "the marks that are on it.",
        C: "the basic shape of it.",
      },
    },
    {
      id: 13,
      text: "Some people join Heather’s pottery class because they want to",
      options: {
        A: "create an item that looks very old.",
        B: "find something that they are good at.",
        C: "make something that will outlive them.",
      },
    },
    {
      id: 14,
      text: "What does Heather value most about being a potter?",
      options: {
        A: "its calming effect",
        B: "its messy nature",
        C: "its physical benefits",
      },
    },
    {
      id: 15,
      text: "Most of the visitors to Edeanna Pottery",
      options: {
        A: "bring friends to join courses.",
        B: "have never made art before.",
        C: "try to learn techniques too quickly.",
      },
    },
    {
      id: 16,
      text: "Heather reminds her visitors that they should",
      options: {
        A: "put on their aprons.",
        B: "change their clothes.",
        C: "take off their jewellery.",
      },
    },
  ];
    const multiSelectQuestions = [
    {
      id: "21_22",
      text: "Which TWO things do the students both believe are responsible for the increase in loneliness?",
      options: {
        A: "Social media",
        B: "Smaller nuclear families",
        C: "Urban design",
        D: "Longer lifespans",
        E: "A mobile workforce",
      },
    },
    {
      id: "23_24",
      text: "Which TWO health risks associated with loneliness do the students agree are based on solid evidence?",
      options: {
        A: "A weakened immune system",
        B: "Dementia",
        C: "Cancer",
        D: "Obesity",
        E: "Cardiovascular disease",
      },
    },
    {
      id: "25_26",
      text: "Which TWO opinions do both the students express about the evolutionary theory of loneliness?",
      options: {
        A: "It has little practical relevance",
        B: "It needs further investigation",
        C: "It is misleading",
        D: "It should be more widely accepted",
        E: "It is difficult to understand",
      },
    },
  ];

  // Questions 27–30 (single choice)
  const singleSelectQuestions = [
    {
      id: 27,
      text: "When comparing loneliness to depression, the students",
      options: {
        A: "doubt that there will ever be a medical cure for loneliness",
        B: "claim that the link between loneliness and mental health is overstated",
        C: "express frustration that loneliness is not taken more seriously",
      },
    },
    {
      id: 28,
      text: "Why do the students decide to start their presentation with an example from their own experience?",
      options: {
        A: "To explain how difficult loneliness can be",
        B: "To highlight a situation that most students will recognise",
        C: "To emphasise that feeling lonely is more common for men than women",
      },
    },
    {
      id: 29,
      text: "The students agree that talking to strangers is a good strategy for dealing with loneliness because",
      options: {
        A: "It creates a sense of belonging",
        B: "It builds self-confidence",
        C: "It helps to make people feel more positive",
      },
    },
    {
      id: 30,
      text: "The students find it difficult to understand why solitude is considered to be",
      options: {
        A: "Similar to loneliness",
        B: "Necessary for mental health",
        C: "An unhealthy experience",
      },
    },
  ];


  // Questions 17–18 (multi-select)
  const questions17to18 = [
    {
      id: 17,
      text: "Which TWO things does Heather explain about kilns?",
      options: {
        A: "what their function is",
        B: "when they were invented",
        C: "ways of keeping them safe",
        D: "where to put one in your home",
        E: "what some people use instead of one",
      },
    },
    { id: 18, text: "", options: {} },
  ];

  // Questions 19–20 (multi-select)
  const questions19to20 = [
    {
      id: 19,
      text: "Which TWO points does Heather make about a potter’s tools?",
      options: {
        A: "Some are hard to hold.",
        B: "Some are worth buying.",
        C: "Some are essential items.",
        D: "Some have memorable names.",
        E: "Some are available for use by participants.",
      },
    },
    { id: 20, text: "", options: {} },
  ];


  // Handle input changes for each part
  const handleAnswerChange = (part, name, value) => {
    setAllAnswers((prev) => ({
      ...prev,
      [part]: { ...prev[part], [name]: value },
    }));
  };

  // Skeleton parts array (replace these divs with your actual test content)
  const parts = [
    <div key="part1">
            {/* Listening Part 1 */}
             <div>
                <div className="ielts-container">
      {/* Left column */}
      <div className="left-column">
        <h2>PART 1</h2>
        <audio controls>
          <source src="/Audio/L_1.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p style={{ marginTop: "20px" }}>Audioscript</p>
      </div>

      {/* Right column */}
      <div className="right-column">
        <h3>Questions 1-10</h3>
        <p>Complete the table below.</p>
        <p>
          Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.
        </p>

        <table className="listening-table">
          <thead>
            <tr>
              <th>Name of restaurant</th>
              <th>Location</th>
              <th>Reason for recommendation</th>
              <th>Other comments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Junction</td>
              <td>Greyson Street, near the station</td>
              <td>
                Good for people who are especially keen on{" "}
                <input
                  type="text"
                  className="blank"
                  name="q1"
                  placeholder="1"
                  value={allAnswers.part1.q1 || ""}
                  onChange={(e)=>handleAnswerChange('part1', e.target.name, e.target.value)}
                />
              </td>
              <td>
                • Quite expensive <br />
                • The{" "}
                <input
                  type="text"
                  className="blank"
                  name="q2"
                  placeholder="2"
                  value={allAnswers.part1.q2 || ""}
                  onChange={(e)=>handleAnswerChange('part1',e.target.name,e.target.value)}
                />{" "}
                is a good place for a drink
              </td>
            </tr>

            <tr>
              <td>Paloma</td>
              <td>In Bow Street next to the cinema</td>
              <td>
                <input
                  type="text"
                  className="blank"
                  name="q3"
                  placeholder="3"
                  value={allAnswers.part1.q3 || ""}
                  onChange={(e)=>handleAnswerChange('part1',e.target.name,e.target.value)}
                />{" "}
                food, good for sharing
              </td>
              <td>
                • Staff are very friendly <br />
                • Need to pay £50 deposit <br />
                • A limited selection of{" "}
                <input
                  type="text"
                  className="blank"
                  name="q4"
                  placeholder="4"
                  value={allAnswers.part1.q4 || ""}
                  onChange={(e)=>handleAnswerChange('part1',e.target.name,e.target.value)}
                />{" "}
                food on the menu
              </td>
            </tr>

            <tr>
              <td>
                The{" "}
                <input
                  type="text"
                  className="blank"
                  name="q5"
                  placeholder="5"
                  value={allAnswers.part1.q5 || ""}
                  onChange={(e)=>handleAnswerChange('part1',e.target.name,e.target.value)}
                />
              </td>
              <td>
                At the top of a{" "}
                <input
                  type="text"
                  className="blank"
                  name="q6"
                  placeholder="6"
                  value={allAnswers.part1.q6 || ""}
                  onChange={(e)=>handleAnswerChange('part1',e.target.name,e.target.value)}
                />
              </td>
              <td>
                • A famous chef <br />• All the{" "}
                <input
                  type="text"
                  className="blank"
                  name="q7"
                  placeholder="7"
                  value={allAnswers.part1.q7 || ""}
                  onChange={(e)=>handleAnswerChange('part1', e.target.name, e.target.value)}
                />{" "}
                are very good <br />• Only uses{" "}
                <input
                  type="text"
                  className="blank"
                  name="q8"
                  placeholder="8"
                  value={allAnswers.part1.q8 || ""}
                  onChange={(e)=>handleAnswerChange('part1',e.target.name,e.target.value)}
                />{" "}
                ingredients
              </td>
              <td>
                • Set lunch costs £{" "}
                <input
                  type="text"
                  className="blank"
                  name="q9"
                  placeholder="9"
                  value={allAnswers.part1.q9 || ""}
                  onChange={(e)=>handleAnswerChange('part1',e.target.name,e.target.value)}
                />{" "}
                per person <br />• Portions probably of{" "}
                <input
                  type="text"
                  className="blank"
                  name="q10"
                  placeholder="10"
                  value={allAnswers.part1.q10 || ""}
                  onChange={(e)=>handleAnswerChange('part1',e.target.name,e.target.value)}
                />{" "}
                size
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
   </div>
   </div>,
    <div key="part2">
      <div key="part2">
      <div className="ielts-container">
        {/* Left column */}
        <div className="left-column">
          <h2>PART 2</h2>
          <audio controls>
            <source src="/Audio/L_2.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <p style={{ marginTop: "20px" }}>Audioscript</p>
        </div>

        {/* Right column */}
        <div className="right-column">
          {/* Questions 11–16 (single choice) */}
          <h3>Questions 11–16</h3>
          <p>Choose the correct letter, <strong>A</strong>, <strong>B</strong> or <strong>C</strong>.</p>
          {questions11to16.map((q) => (
            <div key={q.id} className="question-block">
              <p><strong>{q.id}.</strong> {q.text}</p>
              {Object.entries(q.options).map(([letter, optionText]) => (
                <label key={letter}>
                  <input
                    type="radio"
                    name={`q${q.id}`}
                    value={letter}
                    checked={allAnswers.part2[`q${q.id}`] === letter}
                    onChange={(e) => handleAnswerChange('part2', e.target.name, e.target.value)}
                  />
                  {letter}. {optionText}
                </label>
              ))}
            </div>
          ))}

          {/* Questions 17–18 (multi-select) */}
          <h3>Questions 17–18</h3>
          <p>Choose <strong>TWO</strong> letters, <strong>A–E</strong>.</p>
          <p><em>Which TWO things does Heather explain about kilns?</em></p>
          <div className="question-block">
            {Object.entries(questions17to18[0].options).map(([letter, optionText]) => (
              <label key={letter}>
                <input
                  type="checkbox"
                  name="q17_18"
                  value={letter}
                  checked={(allAnswers.part2["q17_18"] || []).includes(letter)}
                  onChange={(e) => {
                    const prev = allAnswers.part2["q17_18"] || [];
                    if (e.target.checked) {
                      handleAnswerChange("part2", "q17_18", [...prev, e.target.value]);
                    } else {
                      handleAnswerChange("part2", "q17_18", prev.filter((v) => v !== e.target.value));
                    }
                  }}
                />
                {letter}. {optionText}
              </label>
            ))}
          </div>

          {/* Questions 19–20 (multi-select) */}
          <h3>Questions 19–20</h3>
          <p>Choose <strong>TWO</strong> letters, <strong>A–E</strong>.</p>
          <p><em>Which TWO points does Heather make about a potter’s tools?</em></p>
          <div className="question-block">
            {Object.entries(questions19to20[0].options).map(([letter, optionText]) => (
              <label key={letter}>
                <input
                  type="checkbox"
                  name="q19_20"
                  value={letter}
                  checked={(allAnswers.part2["q19_20"] || []).includes(letter)}
                  onChange={(e) => {
                    const prev = allAnswers.part2["q19_20"] || [];
                    if (e.target.checked) {
                      handleAnswerChange("part2", "q19_20", [...prev, e.target.value]);
                    } else {
                      handleAnswerChange("part2", "q19_20", prev.filter((v) => v !== e.target.value));
                    }
                  }}
                />
                {letter}. {optionText}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>,
      </div>,
    <div key="part3">
  <div className="ielts-container">
    {/* Left column */}
    <div className="left-column">
      <h2>PART 3</h2>
      <audio controls>
        <source src="/Audio/L_3.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <p style={{ marginTop: "20px" }}>Audioscript</p>
    </div>

    {/* Right column */}
    <div className="right-column">
      <h3>Questions 21–26</h3>
      {multiSelectQuestions.map((q) => (
        <div key={q.id} className="question-block">
          <p>
            <strong>{q.id.replace("_", " & ")}</strong>. {q.text}
          </p>

          {Object.entries(q.options).map(([letter, text]) => {
            const selected = allAnswers.part3[q.id] || [];

            return (
              <label key={letter}>
                <input
                  type="checkbox"
                  name={q.id} // key in allAnswers.part2
                  value={letter}
                  checked={selected.includes(letter)}
                  onChange={(e) => {
                    const prev = allAnswers.part3[q.id] || [];
                    if (e.target.checked) {
                      handleAnswerChange("part3", q.id, [...prev, e.target.value]);
                    } else {
                      handleAnswerChange(
                        "part3",
                        q.id,
                        prev.filter((v) => v !== e.target.value)
                      );
                    }
                  }}
                />{" "}
                {letter}. {text}
              </label>
            );
          })}
        </div>
      ))}

      <h3>Questions 27–30</h3>
      {singleSelectQuestions.map((q) => (
        <div key={q.id} className="question-block">
          <p>
            <strong>{q.id}.</strong> {q.text}
          </p>
          {Object.entries(q.options).map(([letter, text]) => (
            <label key={letter}>
              <input
                type="radio"
                name={`q${q.id}`}
                value={letter}
                checked={allAnswers.part3[`q${q.id}`] === letter}
                onChange={(e) =>
                  handleAnswerChange("part3", e.target.name, e.target.value)
                }
              />{" "}
              {letter}. {text}
            </label>
          ))}
        </div>
      ))}
    </div>
  </div>
</div>
,
    <div key="part4">
      <div className="ielts-container">
      {/* Left column */}
      <div className="left-column">
        <h2>PART 4</h2>
        <audio controls>
          <source src="/Audio/L_4.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p style={{ marginTop: "20px" }}>Audioscript</p>
      </div>

      {/* Right column */}
      <div className="right-column">
        <h3>Questions 31-40</h3>
        <p>
          Complete the notes below. Write <strong>ONE WORD ONLY</strong> for
          each answer.
        </p>

        <div className="notes-box">
          <h4>Reclaiming urban rivers</h4>

          <strong>Historical background</strong>
          <ul>
            <li>Nearly all major cities were built on a river.</li>
            <li>
              Rivers were traditionally used by city dwellers for transport,
              fishing and recreation.
            </li>
            <li>
              Industrial development and rising populations later led to:
              <ul>
                <li>
                  more sewage from houses being discharged into the river
                </li>
                <li>
                  pollution from{" "}
                  <input
                    type="text"
                    name="q31"
                    value={allAnswers.part4.q31 || ""}
                    placeholder="31"
                    onChange={(e)=>handleAnswerChange('part4',e.target.name, e.target.value)}
                  />
                  on the river bank
                </li>
              </ul>
            </li>
            <li>
              In 1957, the River Thames in London was declared biologically{" "}
              <input
                type="text"
                name="q32"
                value={allAnswers.part4.q32 || ""}
                placeholder="32"
                onChange={(e)=>handleAnswerChange('part4',e.target.name, e.target.value)}
              />
              .
            </li>
          </ul>

          <strong>Recent improvements</strong>
          <ul>
            <li>
              Seals and even a{" "}
              <input
                type="text"
                name="q33"
                value={allAnswers.part4.q33 || ""}
                placeholder="33"
                onChange={(e)=>handleAnswerChange('part4',e.target.name, e.target.value)}
              />{" "}
              have been seen in the River Thames.
            </li>
            <li>
              Riverside warehouses are converted to restaurants and{" "}
              <input
                type="text"
                name="q34"
                value={allAnswers.part4.q34 || ""}
                placeholder="34"
                onChange={(e)=>handleAnswerChange('part4',e.target.name, e.target.value)}
              />
              .
            </li>
            <li>
              In Los Angeles, there are plans to:
              <ul>
                <li>
                  build a riverside{" "}
                  <input
                    type="text"
                    name="q35"
                    value={allAnswers.part4.q35 || ""}
                    placeholder="35"
                    onChange={(e)=>handleAnswerChange('part4',e.target.name, e.target.value)}
                  />
                </li>
                <li>
                  display{" "}
                  <input
                    type="text"
                    name="q36"
                    value={allAnswers.part4.q36 || ""}
                    placeholder="36"
                    onChange={(e)=>handleAnswerChange('part4',e.target.name, e.target.value)}
                  />{" "}
                  projects
                </li>
              </ul>
            </li>
            <li>
              In Paris,{" "}
              <input
                type="text"
                name="q37"
                value={allAnswers.part4.q37 || ""}
                placeholder="37"
                onChange={(e)=>handleAnswerChange('part4',e.target.name, e.target.value)}
              />{" "}
              are created on the sides of the river every summer.
            </li>
          </ul>

          <strong>Transport possibilities</strong>
          <ul>
            <li>
              Over 2 billion passengers already travel by{" "}
              <input
                type="text"
                name="q38"
                value={allAnswers.part4.q38 || ""}
                placeholder="38"
                onChange={(e)=>handleAnswerChange('part4',e.target.name, e.target.value)}
              />{" "}
              in cities round the world.
            </li>
            <li>
              Changes in shopping habits mean the number of deliveries that are
              made is increasing.
            </li>
            <li>
              Instead of road transport, goods could be transported by large
              freight barges and electric{" "}
              <input
                type="text"
                name="q39"
                value={allAnswers.part4.q39 || ""}
                placeholder="39"
                onChange={(e)=>handleAnswerChange('part4',e.target.name, e.target.value)}
              />{" "}
              or, in future, by{" "}
              <input
                type="text"
                name="q40"
                value={allAnswers.part4.q40 || ""}
                placeholder="40"
                onChange={(e)=>handleAnswerChange('part4',e.target.name, e.target.value)}
              />
              .
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>,
  ];

//   const handleEndTest = () => {

//     let totalScore = 0
//     let partScores = {}
//     for (let part in correctAnswers){
//       let partCorrect =0

//       for (let qid in correctAnswers[part]){
//         if (allAnswers[part]?.[qid] === correctAnswers[part][qid]){
//           partCorrect ++ 
//         }
//       }
//       partScores[part] = partCorrect
//       totalScore += partCorrect    
//     }

//  console.log("Total Score:", totalScore);
//   console.log("Part-wise Scores:", partScores);

//     console.log(JSON.stringify(allAnswers,null,2));
//     console.log(JSON.stringify(totalScore,null,2))
//     alert("Test ended! Check console for all collected answers.");
    
//   };


  const handleEndTest= ()=>{

    let total = 0
    let parts = {}

    for (let part in correctAnswers){
      let partCorrect =0
      for( let qid in correctAnswers[part]){

        if(Array.isArray(correctAnswers[part][qid])){

          const userAns = correctAnswers[part]?.[qid] || []

          if( userAns.length === correctAnswers[part][qid].length &&
            userAns.every((val)=> correctAnswers[part][qid].includes(val))
          ){
            partCorrect ++
          }
          else{
            if(allAnswers[part]?.[qid]=== correctAnswers[part][qid]){
              partCorrect ++
            }
          }
        }
      }
    parts[part] = partCorrect
    total += partCorrect
    }
  
    setShowModal(true)
    setPartScore(parts)
    setTotalScore(total)
  }


  return (
    <div className="ielts-wrapper">
      {/* Scrollable content */}
      <div className="part-content">{parts[currentPart]}</div>

      {/* Part navigation buttons */}
     <div className="bottom-bar">
  <div className="part-buttons">
    {[0, 1, 2, 3].map((i) => (
      <button
        key={i}
        className={currentPart === i ? "active" : ""}
        onClick={() => setCurrentPart(i)}
      >
        {i + 1}
      </button>
    ))}
  </div>

  <button className="end-btn" onClick={handleEndTest}>
    End Test
  </button>
</div>
{ showModal && <ResultModal
  totalScore={totalScore}
  onClose={()=>setShowModal(false)}
  partScores={partScore}
/>}
    </div>
  );
};

export default IeltsListening;
