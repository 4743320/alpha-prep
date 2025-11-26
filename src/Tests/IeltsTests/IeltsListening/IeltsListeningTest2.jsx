import React, { useState } from "react";
import "../../../styles/ielts.css";

import correctAnswers from '../../../Data/Ielts/IeltsListening/IeltsListeningTest1.json'
import { useNavigate } from "react-router-dom";

const IeltsListeningTest2 = () => {
  const [currentPart, setCurrentPart] = useState(0);
  const [allAnswers, setAllAnswers] = useState({
    part1: {},
    part2: {},
    part3: {},
    part4: {},
  });
const navigate = useNavigate()
const handleNavigateBack = () => {
  if (window.confirm("All progress will be lost if you leave this page. Are you sure?")) {
    navigate("/ielts-dash");
  }
};

const Dropdown=({part, id ,allAnswers, handleAnswerChange})=>{

    const handleChange=(e)=> handleAnswerChange(part, e.target.name, e.target.value)
    
    return(
        <select
        name={`q${id}`}
        onChange={handleChange}
        value={allAnswers.part2?.[`q${id}`] || ''}
        >

  <option value="">{id}_______</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
      <option value="E">E</option>
      <option value="F">F</option>
      <option value="G">G</option>
      <option value="H">H</option>
      <option value="I">I</option>
      

        
    </select>

    )
}

const Dropdown2=({part, id, allAnswers, handleAnswerChange})=>{

  const handleChange =(e)=>handleAnswerChange(part, e.target.name, e.target.value) 

return(
  <select
  name={`q${id}`}
  value={allAnswers.part3?.[id] || ''}
  onChange={handleChange}
  >
    <option value="">{[id]}_______</option>
      <option value="A">A</option>
      <option value="B">B</option>
      <option value="C">C</option>
      <option value="D">D</option>
      <option value="E">E</option>
      <option value="F">F</option>
      <option value="G">G</option>
  </select>
)

}


const questions17to20 = [
  {
    id: 17,
    text: 'Which event requires the largest number of volunteers?',
    options: [
      'A. the music festival',
      'B. the science festival',
      'C. the book festival',
    ],
  },
  {
    id: 18,
    text: 'What is the most important requirement for volunteers at the festivals?',
    options: [
      'A. interpersonal skills',
      'B. personal interest in the event',
      'C. flexibility',
    ],
  },
  {
    id: 19,
    text: 'New volunteers will start working in the week beginning',
    options: [
      'A. 2 September.',
      'B. 9 September.',
      'C. 23 September.',
    ],
  },
  {
    id: 20,
    text: 'What is the next annual event for volunteers?',
    options: [
      'A. a boat trip',
      'B. a barbecue',
      'C. a party',
    ],
  },
];

const questions26to30 = [
  {
    id: 26,
    text: 'Rosie says that in her own city the main problem is',
    options: [
      'A. crime.',
      'B. housing.',
      'C. unemployment.',
    ],
  },
  {
    id: 27,
    text: 'What recent additions to the outskirts of their cities are both students happy about?',
    options: [
      'A. conference centres',
      'B. sports centres',
      'C. retail centres',
    ],
  },
  {
    id: 28,
    text: 'The students agree that developing disused industrial sites may',
    options: [
      'A. have unexpected costs.',
      'B. damage the urban environment.',
      'C. destroy valuable historical buildings.',
    ],
  },
  {
    id: 29,
    text: 'The students will mention Masdar City as an example of an attempt to achieve',
    options: [
      'A. daily collections for waste recycling.',
      'B. sustainable energy use.',
      'C. free transport for everyone.',
    ],
  },
  {
    id: 30,
    text: 'When discussing the ecotown of Greenhill Abbots, Colin is uncertain about',
    options: [
      'A. what its objectives were.',
      'B. why there was opposition to it.',
      'C. how much of it has actually been built.',
    ],
  },
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
             <div className="ielts-container">
      {/* Left column */}
      <div className="left-column">
        <h2>PART 1</h2>
        <audio controls>
          <source src="/Audio/2L_1.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p style={{ marginTop: "20px" }}>Audioscript</p>
      </div>

      {/* Right column */}
      <div className="right-column">
        <h3>Questions 1-10</h3>
        <p>
          Complete the notes below.<br/> Write <strong>ONE WORD ONLY</strong> for
          each answer.
        </p>

        <div className="notes-box">
  <h2 style={{ textAlign: "center" }}>Help for carers</h2>

  <p>
    Local councils can arrange practical support to help those caring for elderly people at home.
  </p>

  <p>This can give the carer:</p>
  <ul>
    <li>
      time for other responsibilities
    </li>
    <li>
      <input
        type="text"
        name="q1"
        value={allAnswers.part1.q1 || ""}
        placeholder="1"
        onChange={(e) => handleAnswerChange("part1", e.target.name, e.target.value)}      />
    </li>
  </ul>

  <h3>Assessment of mother's needs</h3>
  <p>This may include discussion of:</p>
  <ul>
    <li>
      how much{" "}
      <input
        type="text"
        name="q2"
        value={allAnswers.part1.q2 || ""}
        placeholder="2"
        onChange={(e) => handleAnswerChange("part1", e.target.name, e.target.value)}
      />{" "}
      the caring involves
    </li>
    <li>
      what types of tasks are involved, e.g.
      <ul>
        <li>help with dressing</li>
        <li>
          helping her have a{" "}
          <input
            type="text"
        name="q3"
        value={allAnswers.part1.q3 || ""}
        placeholder="3"
        onChange={(e) => handleAnswerChange("part1", e.target.name, e.target.value)}
          />
        </li>
        <li>shopping</li>
        <li>helping with meals</li>
        <li>
          dealing with{" "}
          <input
            type="text"
           name="q4"
        value={allAnswers.part1.q4 || ""}
        placeholder="4"
        onChange={(e) => handleAnswerChange("part1", e.target.name, e.target.value)}
          />
        </li>
        <li>
          any aspects of caring that are especially difficult, e.g.
          <ul>
            <li>
              loss of{" "}
              <input
                type="text"
                name="q5"
        value={allAnswers.part1.q5 || ""}
        placeholder="5"
        onChange={(e) => handleAnswerChange("part1", e.target.name, e.target.value)}
              />
            </li>
            <li>
              <input
                type="text"
                name="q6"
        value={allAnswers.part1.q6 || ""}
        placeholder="6"
        onChange={(e) => handleAnswerChange("part1", e.target.name, e.target.value)}
              />{" "}
              her
            </li>
            <li>
              preventing a{" "}
              <input
                type="text"
                name="q7"
        value={allAnswers.part1.q7 || ""}
        placeholder="7"
        onChange={(e) => handleAnswerChange("part1", e.target.name, e.target.value)}
              />
            </li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>

  <h3>Types of support that may be offered to carers</h3>
  <ul>
    <li>
      transport costs, e.g. cost of a{" "}
      <input
        type="text"
name="q8"
        value={allAnswers.part1.q8 || ""}
        placeholder="8"
        onChange={(e) => handleAnswerChange("part1", e.target.name, e.target.value)}
      />
    </li>
    <li>
      car-related costs, e.g. fuel and{" "}
      <input
        type="text"
        name="q9"
        value={allAnswers.part1.q9 || ""}
        placeholder="9"
        onChange={(e) => handleAnswerChange("part1", e.target.name, e.target.value)}
      />
    </li>
    <li>help with housework</li>
    <li>
      help to reduce{" "}
      <input
        type="text"
        name="q10"
        value={allAnswers.part1.q10 || ""}
        placeholder="10"
        onChange={(e) => handleAnswerChange("part1", e.target.name, e.target.value)}
      />
    </li>
  </ul>
</div>

      </div>
    </div>
   </div>,
    <div key="part2">
      {/* Listening Part 2 */}
             <div className="ielts-container">
      {/* Left column */}
      <div className="left-column">
        <h2>PART 2</h2>
        <audio controls>
          <source src="/Audio/2L_2.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p style={{ marginTop: "20px" }}>Audioscript</p>
      </div>

      {/* Right column */}
      <div className="right-column">
        <div className="meowx">
          <h3><strong>Questions 11-16</strong></h3>
          <p>
            What is the role of the volunteers in each of the following activities?<br/>
            Choose the correct letter,
             <strong>A–I</strong>, next to Questions 11-16.
          </p>
        </div>

        <div className="center-containerx">
          <div className="question-blockx">
            <h4>List of options</h4>
            <p><strong>A.</strong> providing entertainment</p>
            <p><strong>B.</strong> providing publicity about a council service</p>
            <p><strong>C.</strong> contacting local businesses</p>
            <p><strong>D.</strong> giving advice to visitors</p>
            <p><strong>E.</strong>collecting feedback on events</p>
            <p><strong>F.</strong> introducing guest speakers at an event</p>
            <p><strong>G.</strong> introducing guest speakers at an event</p>
            <p><strong>H.</strong> encouraging cooperation between local organisations</p>
            <p><strong>I.</strong> helping people find their seats</p>
          </div>
        </div>
      <div className="dropdown-blockx">
        <h2>Activities</h2>
          <p>11. walking around the town centre <Dropdown part='part2' id={11} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange} /></p>
          <p>12. helping at concerts <Dropdown part='part2' id={12} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange} /></p>
          <p>13. getting involved with community groups <Dropdown part='part2' id={13} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange} /></p>
          <p>14. helping with a magazine <Dropdown part='part2' id={14} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange} /></p>
          <p>15. participating at lunches for retired people <Dropdown part='part2' id={15} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange} /></p>
            <p>16. helping with the website <Dropdown part='part2' id={16} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange} /></p>
        </div>
 <h3><strong>Questions 17–20</strong></h3>
        <p>Choose the correct letter <strong>A, B, or C</strong>.</p>
        {questions17to20.map((q)=>(
                <div key={q.id} className="question-block">
                  <p className="mcq-question"><strong>{q.id}.</strong> {q.text}</p>
           {q.options.map((text, index) => (
  <label key={index}>
    <input
      type='radio'
      name={`q${q.id}`}
      value={text} // or you can use letters if you define them
      checked={allAnswers.part3[`q${q.id}`] === text}
      onChange={(e)=>handleAnswerChange('part2', e.target.name, e.target.value)}
    />
    {text}
  </label>
))}
          </div>
        ))}
      </div>
    </div>
      </div>,
    <div key="part3">
  {/* Listening Part 3 */}
             <div className="ielts-container">
      {/* Left column */}
      <div className="left-column">
        <h2>PART 3</h2>
        <audio controls>
          <source src="/Audio/2L_3.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p style={{ marginTop: "20px" }}>Audioscript</p>
      </div>

      {/* Right column */}
      <div className="right-column">
        <div className="meowx">
          <h3><strong>Questions 21-25</strong></h3>
          <p>
            What is Rosie and Colin's opinion about each of the following aspects of human geography?
            <br/>Choose the correct letter,  <strong>A–I</strong>, next to Questions 21-25.
          </p>
        </div>

        <div className="center-containerx">
          <div className="question-blockx">
            <h4>List of options</h4>
            <p><strong>A.</strong>The information given about this was too vague.</p>
            <p><strong>B.</strong> This may not be relevant to their course.</p>
            <p><strong>C.</strong> This will involve only a small number of statistics.</p>
            <p><strong>D.</strong> It will be easy to find facts about this.</p>
            <p><strong>E.</strong>The facts about this may not be reliable.</p>
            <p><strong>F.</strong> No useful research has been done on this.</p>
            <p><strong>G.</strong> The information provided about this was interesting.</p>
          </div>
        </div>
        <div className="dropdown-blockx">
          <p>21. Population <Dropdown2 part='part3' id={21} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange} /></p>
          <p>22. Health <Dropdown2 part='part3' id={22} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange} /></p>
          <p>23. Economies <Dropdown2 part='part3' id={23} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange} /></p>
          <p>24. Culture <Dropdown2 part='part3' id={24} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange} /></p>
          <p>25. Poverty <Dropdown2 part='part3' id={25} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange} /></p>
        </div>
         <h3><strong>Questions 17–20</strong></h3>
        <p>Choose the correct letter <strong>A, B, or C</strong>.</p>
        {questions26to30.map((q)=>(
          <div  key={q.id} className="question-block">
            <p className="mcq-question"><strong>{q.id}.</strong> {q.text}</p>
            {q.options.map((text,index)=>(
              <label
              key={index}
              >
                <input
                type="radio"
                name={`q${q.id}`}
                value={text}
                checked={allAnswers.part3[`q${q.id}`] === text}
                onChange={(e)=>handleAnswerChange('part3', e.target.name, e.target.value)}
                />
                {text}

              </label>
            ))}
          </div>
        ))}
        </div>
         </div>
        
</div>
,
    <div key="part4">
      {/* Listening Part 4 */}
             <div className="ielts-container">
      {/* Left column */}
      <div className="left-column">
        <h2>PART 4</h2>
        <audio controls>
          <source src="/Audio/2L_4.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p style={{ marginTop: "20px" }}>Audioscript</p>
      </div>

      {/* Right column */}
      <div className="right-column">
        <h3>Questions 31-40</h3>
        <p>
          Complete the notes below.<br/> Write <strong>ONE WORD ONLY</strong> for
          each answer.
        </p>

  <div className="notes-box">
  <h2 style={{ textAlign: "center" , marginBottom: "20px"  }}>Developing Food Trends</h2>
      
   <ul><li>The growth in interest in food fashions started with{" "}
    <input
      type="text"
      name="q31"
      value={allAnswers.part4.q31 || ""}
      placeholder="31"
      onChange={(e) =>
        handleAnswerChange("part4", e.target.name, e.target.value)
      }
    />{" "}of food being shared on social media.</li></ul> 
    
  
<ul><li>
   The UK food industry is constantly developing products which are new or
    different.</li>
    <li>Influencers on social media become 'ambassadors' for a brand.{""}
      Sales of{" "}
    <input
      type="text"
      name="q32"
      value={allAnswers.part4.q32 || ""}
      placeholder="32"
      onChange={(e) =>
        handleAnswerChange("part4", e.target.name, e.target.value)
      }
    />{" "}
    food brands have grown rapidly this way.
    </li>
    </ul>
  
<ul><li><p>Supermarkets track demand for ingredients on social media.</p>

  <p>
    Famous{" "}
    <input
      type="text"
      name="q33"
      value={allAnswers.part4.q33 || ""}
      placeholder="33"
      onChange={(e) =>
        handleAnswerChange("part4", e.target.name, e.target.value)
      }
    />{" "}
    are influential.
  </p>
</li></ul>
  
  <h3>Marketing campaigns</h3>
<ul><p>
    The avocado:{" "}</p> <li>
    <input
      type="text"
      name="q34"
      value={allAnswers.part4.q34 || ""}
      placeholder="34"
      onChange={(e) =>
        handleAnswerChange("part4", e.target.name, e.target.value)
      }
    />{" "}
    were invited to visit growers in South Africa.
  </li>
  
  <li><p>
    Advertising focused on its{" "}
    <input
      type="text"
      name="q35"
      value={allAnswers.part4.q34 || ""}
      placeholder="35"
      onChange={(e) =>
        handleAnswerChange("part4", e.target.name, e.target.value)
      }
    />{" "}
    benefits.
  </p>
</li></ul>
  

  
  <p>Oat milk:</p>
  <ul>
    <li>
      A Swedish brand's media campaign received publicity by upsetting
      competitors.
    </li>
    <li>
      Promotion in the USA through{" "}
      <input
        type="text"
        name="q36"
        value={allAnswers.part4.q36 || ""}
        placeholder="36"
        onChange={(e) =>
          handleAnswerChange("part4", e.target.name, e.target.value)
        }
      />{" "}
      shops reduced the need for advertising.
    </li>
    <li>
      It appealed to consumers who are concerned about the{" "}
      <input
        type="text"
        name="q37"
        value={allAnswers.part4.q37 || ""}
        placeholder="37"
        onChange={(e) =>
          handleAnswerChange("part4", e.target.name, e.target.value)
        }
      />
      .
    </li>
  </ul>

  <p>Norwegian skrei:</p>
  <p>
    has helped strengthen the{" "}
    <input
      type="text"
      name="q38"
      value={allAnswers.part4.q38 || ""}
      placeholder="38"
      onChange={(e) =>
        handleAnswerChange("part4", e.target.name, e.target.value)
      }
    />{" "}
    of Norwegian seafood.
  </p>

  <h3>Ethical concerns</h3>
  <p>Quinoa:</p>
  <ul>
    <li>
      Its success led to an increase in its{" "}
      <input
        type="text"
        name="q39"
        value={allAnswers.part4.q39 || ""}
        placeholder="39"
        onChange={(e) =>
          handleAnswerChange("part4", e.target.name, e.target.value)
        }
      />
      .
    </li>
    <li>
      Overuse of resources resulted in poor quality{" "}
      <input
        type="text"
        name="q40"
        value={allAnswers.part4.q40 || ""}
        placeholder="40"
        onChange={(e) =>
          handleAnswerChange("part4", e.target.name, e.target.value)
        }
      />
      .
    </li>
  </ul>
</div>

      </div>
    </div>
    </div>,
  ];

  const handleEndTest = () => {

    let totalScore = 0
    let partScores = {}
    for (let part in correctAnswers){
      let partCorrect =0

      for (let qid in correctAnswers[part]){
        if (allAnswers[part]?.[qid] === correctAnswers[part][qid]){
          partCorrect ++ 
        }
      }
      partScores[part] = partCorrect
      totalScore += partCorrect    
    }

 console.log("Total Score:", totalScore);
  console.log("Part-wise Scores:", partScores);

    console.log(JSON.stringify(allAnswers,null,2));
    console.log(JSON.stringify(totalScore,null,2))
    alert("Test ended! Check console for all collected answers.");
    
  };

  return (
    <div className="ielts-wrapper">
      {/* Scrollable content */}
      <div className="part-content">{parts[currentPart]}</div>


      {/* Part navigation buttons */}
     <div className="bottom-bar">
  <div className="part-buttons">
    {/* Back button */}
  <button
    className="back-btn"
    onClick={handleNavigateBack} // your dashboard route
    style={{
      display: "flex",
      alignItems: "center",
      gap: "6px",
      padding: "8px 16px",
      fontSize: "14px",
      borderRadius: "6px",
      background: "#6c757d",
      color: "white",
      border: "none",
      cursor: "pointer",
      transition: "0.2s",
    }}
  >
    &#8592; Back
  </button>
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
    </div>
  );
};

export default IeltsListeningTest2;
