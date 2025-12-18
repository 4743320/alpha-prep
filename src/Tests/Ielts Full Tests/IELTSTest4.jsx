import React, { useState } from "react";
import '../../styles/IeltsTest/ieltstest.css'
import { useNavigate } from "react-router-dom";
import BlankInput from "../../components/IeltsFullTestComponents/BlankInput";

const IELTSTest = () => {
  const navigate = useNavigate();

  // State to track section and part
  const [section, setSection] = useState("listening"); // listening, reading, writing
  const [part, setPart] = useState(1);

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
          <source src="/Audio/L_1.mp3" type="audio/mpeg" />
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
                <h2>PART 3</h2>
                <audio controls>
                  <source src="/Audio/L_1.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <p style={{ marginTop: "20px" }}>Audioscript</p>
              </div>
         <div className="right-column">
              {/* Right column */}
             
                <h3><strong>Questions 21-26</strong></h3>
                <p>Choose the correct letter <strong>A, B, or D</strong>.</p>
                 {questions21to26.map((q)=>(
                <div key={q} className="question-block">
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
                     
                <div className="meowx">
                  <h3><strong>Questions 27–30</strong></h3>
                  <p>
                    What comment is made about the programme for each of the following shows?
                    Choose the correct letter, <strong>A–F</strong>, next to Questions 27-30.
                  </p>
                </div>
                <div className="center-containerx">
                  <div className="question-blockx">
                    <h4>List of options</h4>
                    <p><strong>A.</strong> Its origin is somewhat controversial.</p>
                    <p><strong>B.</strong> It is historically significant for a country.</p>
                    <p><strong>C.</strong> It was effective at attracting audiences.</p>
                    <p><strong>D.</strong> It is included in a recent project.</p>
                    <p><strong>E.</strong> It contains insights into the show.</p>
                    <p><strong>F.</strong> It resembles an artwork.</p>
                  </div>
                </div>
        
                <div className="dropdown-blockx">
                  <p>27. Ruy Blas <DropDown2 section='listening' part='part3' id={27} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
                  <p>28. Man of La Mancha <DropDown2 section='listening' part='part3' id={28} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
                  <p>29. The Tragedy of Jane Shore <DropDown2 section='listening' part='part3' id={29} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
                  <p>30. The Sailors' Festival<DropDown2 section='listening' part='part3' id={30} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
                  
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
                  <source src="/Audio/L_1.mp3" type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
                <p style={{ marginTop: "20px" }}>Audioscript</p>
              </div>
         <div className="right-column">
              {/* Right column */}
             
                <h3><strong>Questions 21-26</strong></h3>
                <p>Choose the correct letter <strong>A, B, or D</strong>.</p>
                 {questions21to26.map((q)=>(
                <div key={q} className="question-block">
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
                     
                <div className="meowx">
                  <h3><strong>Questions 27–30</strong></h3>
                  <p>
                    What comment is made about the programme for each of the following shows?
                    Choose the correct letter, <strong>A–F</strong>, next to Questions 27-30.
                  </p>
                </div>
                <div className="center-containerx">
                  <div className="question-blockx">
                    <h4>List of options</h4>
                    <p><strong>A.</strong> Its origin is somewhat controversial.</p>
                    <p><strong>B.</strong> It is historically significant for a country.</p>
                    <p><strong>C.</strong> It was effective at attracting audiences.</p>
                    <p><strong>D.</strong> It is included in a recent project.</p>
                    <p><strong>E.</strong> It contains insights into the show.</p>
                    <p><strong>F.</strong> It resembles an artwork.</p>
                  </div>
                </div>
        
                <div className="dropdown-blockx">
                  <p>27. Ruy Blas <DropDown2 section='listening' part='part3' id={27} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
                  <p>28. Man of La Mancha <DropDown2 section='listening' part='part3' id={28} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
                  <p>29. The Tragedy of Jane Shore <DropDown2 section='listening' part='part3' id={29} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
                  <p>30. The Sailors' Festival<DropDown2 section='listening' part='part3' id={30} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
                  
                </div>
         </div>
          
                   
        </div>
           </div>
           
      </div>,
      <div key="listening-part4">
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
      <div key="reading-part1">Reading Part 1</div>,
      <div key="reading-part2">Reading Part 2</div>,
      <div key="reading-part3">Reading Part 3</div>,
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
          onClick={handleNavigateBack} >
           Back
        </button>
{/* section = listening by defaiult and part is 1 by default */}
        {/* Sections & Parts  ['listening', 4] */} 
        {Object.entries(testStructure).map(([sec, totalParts])=>(
          <div key={sec} className="bottom-section">
            <button 
            className={`section-btn${section=== sec ? "active ":"" }`}
            onClick={()=>{
              setSection(sec)
              setPart(1)
            }}

            >{sec.charAt(0).toUpperCase()+ sec.slice(1)}</button>
            {/* Part buttons */}
            {[...Array(totalParts)].map((_,i)=>{
              const p = i+1
              return(
                <button key={i}
                className={`part-btn${section===sec & part===p ? "active":""}`}
                onClick={()=>{
                  setSection(sec)
                  setPart(p)
                }}>
                  {p}
                </button>
              )
            })}
          </div>
          
        ))}
        {/* End test button */}
        <button className="end-btn" onClick={() => alert("End Test!")}>
          End Test
        </button>
      </div>
    </div>
  );
};

export default IELTSTest;
