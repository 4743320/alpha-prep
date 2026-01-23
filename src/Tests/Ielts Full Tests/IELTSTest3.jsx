import React, { useState } from "react";
import '../../styles/IeltsTest/ieltstest.css'
// import '../../styles/ieltsListening.css'
import { useNavigate } from "react-router-dom";
import BlankInput from "../../components/IeltsFullTestComponents/BlankInput";
import IELTSLogo from "../../assets/ieltslogo2.png";
import '../../styles/ielts.css'
import '../../styles/misc.css'
import DropDown from "../../components/IeltsFullTestComponents/DropDown";
import DropDown2 from "../../components/IeltsFullTestComponents/DropDown2"
import DropDown5 from '../../components/IeltsFullTestComponents/DropDown5'
import DropDown6 from '../../components/IeltsFullTestComponents/DropDown6'
import DropDown7 from '../../components/IeltsFullTestComponents/DropDown7'
import { account } from "../../lib/appwrite";
import { saveIeltsTest } from "../../lib/helpers/ieltsScoreHelper";
import ResultModal from "../../components/IeltsFullResultModal";
import Overlay from "../../components/Overlay";

// ① ② ③ ④ ⑤ ⑥ ⑦ ⑧ ⑨ ⑩
const IELTSTest3 = () => {
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
/**
 * Sends essay text to FastAPI /HF Spaces endpoint and returns the score/feedback
 * @param {string} essayText - The essay text to score
 * @returns {Promise<object>} - The response from FastAPI (score, feedback, etc.)
 */
const scoreWritingTask = async (essayText) => {
  if (!essayText.trim()) {
    console.log("⚠️ Essay is empty, skipping scoring.");
    return null;
  }

  try {
    const response = await fetch("https://alpha-prep-fast-api-hfs-paces.vercel.app/score-essay", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ essay: essayText }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("📝 HF Spaces Response:", data);
    return data; // whatever FastAPI returns (score, feedback, etc.)
  } catch (error) {
    console.error("❌ Error scoring essay:", error);
    return null;
  }
};

const scoreWritingTask1 = async (essayText) => {
  if (!essayText.trim()) {
    console.log("⚠️ Essay is empty, skipping scoring.");
    return null;
  }

  try {
    const response = await fetch("https://alpha-prep-fast-api-hfs-paces.vercel.app/score_task1", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ essay: essayText }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("📝 HF Spaces Response1:", data);
    return data; // whatever FastAPI returns (score, feedback, etc.)
  } catch (error) {
    console.error("❌ Error scoring essay:", error);
    return null;
  }
};

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

// await scoreWritingTask(writingTask2)
let writingTask2Score = null;
if (writingTask2.trim()) {
  try {
    writingTask2Score = await scoreWritingTask(writingTask2);
    console.log("✏️ Writing Task 2 HF Score:", writingTask2Score);
  } catch (err) {
    console.error("❌ Error scoring essay:", err);
  }
}
let writingTask1Score = null;
if(writingTask1.trim()){
  try {
    writingTask1Score = await scoreWritingTask1(writingTask1)
    console.log("✏️ Writing Task 1 HF Score:", writingTask1Score);
  } catch (err) {
    console.error("❌ Error scoring essay:", err);
  }
}
await saveIeltsTest({
      userId: currectUser.$id,
      testName: `IELTS FULL Test ${testId}`,
      listeningScore,
      readingScore,
      writingTask1,
      writingTask2,
      band:overallBand,
      task2Score: writingTask2Score.score, // optional: just the "score" object
      task1Score: writingTask1Score.score // optional: just the "score" object

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

// const essay = allAnswers.writing.part2.response
  // Test structure for bottom bar
  const testStructure = {
    listening: 4,
    reading: 3,
    writing: 2,
  };
const questions11to16 = [
  {
    id: 11,
    text: 'Who was responsible for starting the community project?',
    options: [
      'the castle owners',
      'a national charity',
      'the local council',
    ],
  },
  {
    id: 12,
    text: 'How was the gold coin found?',
    options: [
      'Heavy rain had removed some of the soil.',
      'The ground was dug up by wild rabbits.',
      'A person with a metal detector searched the area.',
    ],
  },
  {
    id: 13,
    text: 'What led the archaeologists to believe there was an ancient village on this site?',
    options: [
      'the lucky discovery of old records',
      'the bases of several structures visible in the grass',
      'the unusual stones found near the castle',
    ],
  },
  {
    id: 14,
    text: 'What are the team still hoping to find?',
    options: [
      'everyday pottery',
      'animal bones',
      'pieces of jewellery',
    ],
  },
  {
    id: 15,
    text: 'What was found on the other side of the river to the castle?',
    options: [
      'the remains of a large palace',
      'the outline of fields',
      'a number of small huts',
    ],
  },
  {
    id: 16,
    text: 'What do the team plan to do after work ends this summer?',
    options: [
      'prepare a display for a museum',
      'take part in a television programme',
      'start to organise school visits',
    ],
  },
];
const questions21to26 = [
  {
    id: 21,
    text: 'Finn was pleased to discover that their topic',
    options: [
      'was not familiar to their module leader.',
      'had not been chosen by other students.',
      'did not prove to be difficult to research.',
    ],
  },
  {
    id: 22,
    text: 'Maya says a mistaken belief about theatre programmes is that',
    options: [
      'theatres pay companies to produce them.',
      'few theatre-goers buy them nowadays.',
      'they contain far more adverts than previously.',
    ],
  },
  {
    id: 23,
    text: 'Finn was surprised that, in early British theatre, programmes',
    options: [
      'were difficult for audiences to obtain.',
      'were given out free of charge.',
      'were seen as a kind of contract.',
    ],
  },
  {
    id: 24,
    text: 'Maya feels their project should include an explanation of why companies of actors',
    options: [
      'promoted their own plays.',
      'performed plays outdoors.',
      'had to tour with their plays.',
    ],
  },
  {
    id: 25,
    text: 'Finn and Maya both think that, compared to nineteenth-century programmes, those from the eighteenth century',
    options: [
      'were more original.',
      'were more colourful.',
      'were more informative.',
    ],
  },
  {
    id: 26,
    text: 'Maya doesn\'t fully understand why, in the twentieth century,',
    options: [
      'very few theatre programmes were printed in the USA.',
      'British theatre programmes failed to develop for so long.',
      'theatre programmes in Britain copied fashions from the USA.',
    ],
  },
];

const questions8to13 = [
  {
    id: 8,
    text: "The ice transportation business made some Boston ship owners very wealthy in the early 1800s.",
  },
  {
    id: 9,
    text: "A disadvantage of the freezing process invented in Australia was that it affected the taste of food.",
  },
  {
    id: 10,
    text: "Clarence Birdseye travelled to Labrador in order to learn how the Inuit people froze fish.",
  },
  {
    id: 11,
    text: "Swanson Foods invested a great deal of money in the promotion of the TV Dinner.",
  },
  {
    id: 12,
    text: "Swanson Foods developed a new style of container for the launch of the TV Dinner.",
  },
  {
    id: 13,
    text: "The US frozen food industry is currently the largest in the world.",
  },
];
const questions37to40 = [
  {
    id: 37,
    text: "What point does Richardson make about fear of machines?",
    options: [
      "It has grown alongside the development of ever more advanced robots.",
      "It is the result of our inclination to attribute human characteristics to non-human entities.",
      "It has its origins in basic misunderstandings about how inanimate objects function.",
      "It demonstrates a key difference between human intelligence and machine intelligence."
    ]
  },
  {
    id: 38,
    text: "What potential advance does Rees see as a cause for concern?",
    options: [
      "robots outnumbering people",
      "robots having abilities which humans do not",
      "artificial intelligence developing independent thought",
      "artificial intelligence taking over every aspect of our lives"
    ]
  },
  {
    id: 39,
    text: "What does Wolpert emphasise in his response to the question about science fiction?",
    options: [
      "how science fiction influences our attitudes to robots",
      "how fundamental robots are to the science fiction genre",
      "how the image of robots in science fiction has changed over time",
      "how reactions to similar portrayals of robots in science fiction may vary"
    ]
  },
  {
    id: 40,
    text: "What is Richardson doing in her comment about reality and fantasy?",
    options: [
      "warning people not to confuse one with the other",
      "outlining ways in which one has impacted on the other",
      "recommending a change of approach in how people view them",
      "explaining why scientists have a different perspective on them from other people"
    ]
  },
];

const multiSelectQuestion20_21 = {
  id: "20_21",
  text: "Which TWO of these causes of damage to coral reefs are mentioned by the writer of the text?",
  options: {
    A: "a rising number of extreme storms",
    B: "the removal of too many fish from the sea",
    C: "the contamination of the sea from waste",
    D: "increased disease among marine species",
    E: "alterations in the usual flow of water in the seas",
  },
};
const multiSelectQuestion22_23 = {
  id: "22_23",
  text: "Which TWO of the following statements are true of the researchers at London Zoo?",
  options: {
    A: "They are hoping to expand the numbers of different corals being bred in laboratories.",
    B: "They want to identify corals that can cope well with the changed sea conditions.",
    C: "They are looking at ways of creating artificial reefs that corals could grow on.",
    D: "They are trying out methods that would speed up reproduction in some corals.",
    E: "They are investigating materials that might protect reefs from higher temperatures.",
  },
};



  // Skeleton parts content
  const partsContent = {
    listening: [
      <div key="listening-part1">
                  {/* Listening Part 1 */}
             <div>
                <div className="ielts-container">
      {/* Left column */}
      <div className="left-column">
        <h2>PART 1</h2>
        <audio controls>
          <source src="/Audio/test3_p1.mp3" type="audio/mpeg" />
          {/* Your browser does not support the audio element. */}
        </audio>
        <p style={{ marginTop: "20px" }}>Audioscript</p>
      </div>

     {/* Right column */}
      <div className="right-column">
        <h3>Questions 1-10</h3>
        <p>Complete the table below.</p>
        <p>
          Write <strong>ONE WORD AND/OR A NUMBER</strong> for each answer.  </p>
<table className="listening-table">
  <thead>
    <tr>
      <th>Name of company</th>
      <th>Information about costs</th>
      <th>Additional notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Peak Rentals</td>
      <td>
        Prices range from $105 to 
        $ <BlankInput
        section='listening'
        part='part1'
        id={1}
        placeholder='1'
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>
{" "}
        per room per month
      </td>
      <td>
        • The furniture is very<BlankInput
        section='listening'
        part='part1'
        id={2}
        placeholder='2'
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>
       {" "}
        <br />
        • Delivers in 1-2 days
        <br />
        • Special offer: free
       <BlankInput
        section='listening'
        part='part1'
        id={3}
        placeholder='3'
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>{" "}
        with every living room set
       <BlankInput
        section='listening'
        part='part1'
        id={4}
        placeholder='4'
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>{" "}
        and Oliver
        <br />
        Mid-range prices 12% monthly fee for
       <BlankInput
        section='listening'
        part='part1'
        id={5}
        placeholder='5'
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>
        <br />
        Also offers a cleaning service
      </td>
    </tr>

    <tr>
      <td>Larch Furniture</td>
      <td>
        Offers cheapest prices for renting furniture and
       <BlankInput
        section='listening'
        part='part1'
        id={6}
        placeholder='6'
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>{" "}
        items
        <br />
        • Must have own
       <BlankInput
        section='listening'
        part='part1'
        id={7}
        placeholder='7'
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>
        <br />
         • Minimum contract length: six months
        <BlankInput
        section='listening'
        part='part1'
        id={8}
        placeholder="8"
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>
      </td>
      <td>
        See the
        <BlankInput
        section='listening'
        part='part1'
        id={9}
        placeholder='9'
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>{" "}
        for the most up-to-date prices
        <br />
        <BlankInput
        section='listening'
        part='part1'
        id={10}
        placeholder='10'
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>{" "}
        are allowed within 7 days of delivery
      </td>
    </tr>
  </tbody>
</table>

      
      </div>
    
    </div>
  
   </div>


      </div>,
      <div key="listening-part2">
        {/* Listening Part 2 */}
             <div>
                <div className="ielts-container">
      {/* Left column */}
      <div className="left-column">
        <h2>PART 2</h2>
        <audio controls>
          <source src="/Audio/test3_p2.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p style={{ marginTop: "20px" }}>Audioscript</p>
      </div>

      {/* Right column */}
      <div className="right-column">
     <h3><strong>Questions 11-16</strong></h3>
        <p>Choose the correct letter <strong>A, B, C, or D</strong>.</p>
      <h3><strong>Bidcaster Community Archaeology Project</strong></h3>
      {questions11to16.map((q)=>(
        <div key={q} className="question-block">
          <p className="mcq-question"><strong>{q.id}.</strong> {q.text}</p>
          {q.options.map((text,index)=>(
            <label key={index}>
              <input type="radio"
              name={`q${q.id}`}
              value={text}
              checked={allAnswers.listening.part2[`q${q.id}`]=== text}
              onChange={(e)=>{handleAnswerChange('listening', 'part2' ,e.target.name, e.target.value)}}
               />
               {text}
            </label>
          ))}
        </div>
      ))}
      {/* Labling Map */}
        <div className="meowx">
          <h3><strong>Questions 17-20</strong></h3>
          <p>Label the map below.</p>
          <p>
            Choose the correct letter, <strong>A–G</strong>, next to Questions 17-20..
          </p>
        </div>

        <div className="center-containerx">
          <img src='' alt="" />
        </div>

        <div className="dropdown-blockx">
          <p>17.bridge foundations<DropDown section='listening' part='part2' id={17} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/> </p>
          <p>18.rubbish pit<DropDown section='listening' part='part2' id={18} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/>  </p>
          <p>19.meeting hall<DropDown section='listening' part='part2' id={19} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/>  </p>
          <p>20.fish pond <DropDown section='listening' part='part2' id={20} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/>  </p>
        </div>
    </div>
   </div>
   </div>
      </div>,
      <div key="listening-part3">        {/* Listening Part 1 */}
             <div>
                <div className="ielts-container">
      {/* Left column */}
      <div className="left-column">
        <h2>PART 3</h2>
        <audio controls>
          <source src="/Audio/test3_p3.mp3" type="audio/mpeg" />
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
      <div key="listening-part4">        {/* Listening Part 1 */}
             <div>
                <div className="ielts-container">
      {/* Left column */}
      <div className="left-column">
        <h2>PART 4</h2>
        <audio controls>
          <source src="/Audio/test3_p4.mp3" type="audio/mpeg" />
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
  <h4>Inclusive Design</h4>

  <strong>Definition</strong>
  <ul>
    <li>
      Designing products that can be accessed by a diverse range of people without the need for any{" "}
    <BlankInput
        section='listening'
         part='part4'
        id={31}
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>.
    </li>
    <li>
      Not the same as universal design: that is design for everyone, including catering for people with{" "}
      <BlankInput
        section='listening'
         part='part4'
        id={32}
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/> problems.
    </li>
  </ul>

  <strong>Examples of inclusive design</strong>
  <ul>
    <li>
     <BlankInput
        section='listening'
         part='part4'
        id={33}
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/> which are adjustable, avoiding back or neck problems
    </li>
    <li>
     <BlankInput
        section='listening'
         part='part4'
        id={34}
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/> in public toilets which are easier to use
    </li>
    <li>
      To assist the elderly: designers avoid using{" "}
      <BlankInput
        section='listening'
         part='part4'
        id={35}
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/> in interfaces
    </li>
    <li>
      People can make commands using a mouse, keyboard or their{" "}
     <BlankInput
        section='listening'
         part='part4'
        id={36}
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>.
    </li>
  </ul>

  <strong>Impact of non-inclusive designs</strong>
  <ul>
    <li>
      Seatbelts are especially problematic for{" "}
    <BlankInput
        section='listening'
         part='part4'
        id={37}
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>.
    </li>
    <li>
      PPE jackets are often unsuitable because of the size of women's{" "}
      <BlankInput
        section='listening'
         part='part4'
        id={38}
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>.
    </li>
    <li>
      PPE for female{" "}
      <BlankInput
        section='listening'
        part='part4'
        id={39}
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/> officers dealing with emergencies is the worst.
    </li>
    <li>
      The{" "}
      <BlankInput
        section='listening'
        part='part4'
        id={40} 
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/> in offices is often too low for women.
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
    Complete the notes below.<br />
    Write <strong>ONE WORD AND/OR A NUMBER</strong> from the passage for each answer.
  </p>
  <p>Write your answers in boxes 1-7 on your answer sheet.</p>

  <div className="notes-box">
    <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
      The history of frozen food
    </h2>
    <div className="reading-passage">
      <ul>
        <li>
          2,000 years ago, South America — People conserved the nutritional value of{" "}
          <BlankInput
            section="reading"
            part="part1"
            id={1}
            allAnswers={allAnswers}
            handleAnswerChange={handleAnswerChange}
          />{" "}
          using a method of freezing then drying.
        </li>

        <li>
          1851, USA —{" "}
          <BlankInput
            section="reading"
            part="part1"
            id={2}
            allAnswers={allAnswers}
            handleAnswerChange={handleAnswerChange}
          />{" "}
          was kept cool by ice during transportation in specially adapted trains.
        </li>

        <li>
          1880, Australia — Two kinds of{" "}
          <BlankInput
            section="reading"
            part="part1"
            id={3}
            allAnswers={allAnswers}
            handleAnswerChange={handleAnswerChange}
          />{" "}
          were the first frozen foods shipped to England.
        </li>

        <li>
          1917 onwards, USA — Clarence Birdseye introduced innovations including quick-freezing methods, so that{" "}
          <BlankInput
            section="reading"
            part="part1"
            id={4}
            allAnswers={allAnswers}
            handleAnswerChange={handleAnswerChange}
          />{" "}
          did not spoil.
        </li>

        <li>
          Packaging products with{" "}
          <BlankInput
            section="reading"
            part="part1"
            id={5}
            allAnswers={allAnswers}
            handleAnswerChange={handleAnswerChange}
          />, so the product was visible.
        </li>

        <li>
          Early 1940s, USA — Frozen food became popular because of a shortage of{" "}
          <BlankInput
            section="reading"
            part="part1"
            id={6}
            allAnswers={allAnswers}
            handleAnswerChange={handleAnswerChange}
          />.
        </li>

        <li>
          1950s, USA — A large number of homes now had a{" "}
          <BlankInput
            section="reading"
            part="part1"
            id={7}
            allAnswers={allAnswers}
            handleAnswerChange={handleAnswerChange}
          />.
        </li>
      </ul>
    </div>
  </div>
<br/>
   <h3><strong>Questions 8-13</strong></h3><br />
        <p>
          Do the following statements agree with the information given in Reading Passage 1?
          <br />
          Write your answers in boxes 1-6 .
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

      </div>

      {/* RIGHT COLUMN */}
      <div className="right-column">
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Procrastination</h2>
          <h2><strong>Questions 14–19</strong></h2><br />
        <p>
          Reading Passage 2 has six sections, A–F </p>.  
          <p>Choose the correct heading for each section from the list of headings below. 
          Choose the correct number,<strong>i-vii</strong> , in boxes 14-19 on your answer sheet.</p>  
        {/* <p> <br /><strong>NB:</strong> You may use any letter more than once.<br/></p> 
         */}
     
        <div className="center-containerx">
          <div className="question-blockx">
            <h4>List of Headings</h4>
            <p><strong>i.</strong> Tried and tested solutions.</p>
            <p><strong>ii.</strong> Cooperation beneath the waves.</p>
            <p><strong>iii.</strong> Working to lessen the problems.</p>
            <p><strong>iv.</strong> Disagreement about the accuracy of a certain phrase.</p>
            <p><strong>v.</strong> Two clear educational goals.</p>
            <p><strong>vi.</strong> Promoting hope.</p>
            <p><strong>vii.</strong> A warning of further trouble ahead .</p>
          </div>
        </div>

        <div className="dropdown-blockx">
          <p>14. Section A  <DropDown7 section='reading' part='part2' id={14} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
          <p>15. Section B  <DropDown7 section='reading' part='part2' id={15} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
          <p>16. Section C  <DropDown7 section='reading' part='part2' id={16} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
          <p>17. Section D  <DropDown7 section='reading' part='part2' id={17} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
          <p>18. Section E  <DropDown7 section='reading' part='part2' id={18} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
          <p>19. Section F  <DropDown7 section='reading' part='part2' id={19} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
          
        </div>
         <h3 style={{  marginTop: "10px", marginBottom:'10px'}}>Questions 20 and 21 </h3>
 <h4 style={{  marginTop: "10px", marginBottom:'10px'}}>Choose TWO letters, A-E.</h4>
{multiSelectQuestion20_21 && (
  <div className="question-block">
    <p>
      <strong>{multiSelectQuestion20_21.id.replace("_", " - ")}</strong>.{" "}
      {multiSelectQuestion20_21.text}
    </p>

    {Object.entries(multiSelectQuestion20_21.options).map(([letter, text]) => {
      const selected =
        allAnswers.reading.part2[multiSelectQuestion20_21.id] || [];

      return (
        <label key={letter}>
          <input
            type="checkbox"
            name={multiSelectQuestion20_21.id}
            value={letter}
            checked={selected.includes(letter)}
            onChange={(e) => {
              const prev =
                allAnswers.reading.part2[multiSelectQuestion20_21.id] || [];

              if (e.target.checked) {
                handleAnswerChange(
                  "reading",
                  "part2",
                  multiSelectQuestion20_21.id,
                  [...prev, e.target.value]
                );
              } else {
                handleAnswerChange(
                  "reading",
                  "part2",
                  multiSelectQuestion20_21.id,
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
)}
   
                <h3 style={{  marginTop: "10px", marginBottom:'10px'}}>Questions 22 and 23 </h3>
 <h4 style={{  marginTop: "10px", marginBottom:'10px'}}>Choose TWO letters, A-E.</h4>
{multiSelectQuestion22_23 && (
  <div key={multiSelectQuestion22_23.id} className="question-block">
    <p>
      <strong>{multiSelectQuestion22_23.id.replace("_", " - ")}</strong>.{" "}
      {multiSelectQuestion22_23.text}
    </p>

    {Object.entries(multiSelectQuestion22_23.options).map(
      ([letter, text]) => {
        const selected =
          allAnswers.reading.part2[multiSelectQuestion22_23.id] || [];

        return (
          <label key={letter}>
            <input
              type="checkbox"
              name={multiSelectQuestion22_23.id}
              value={letter}
              checked={selected.includes(letter)}
              onChange={(e) => {
                const prev =
                  allAnswers.reading.part2[
                    multiSelectQuestion22_23.id
                  ] || [];

                if (e.target.checked) {
                  handleAnswerChange(
                    "reading",
                    "part2",
                    multiSelectQuestion22_23.id,
                    [...prev, e.target.value]
                  );
                } else {
                  handleAnswerChange(
                    "reading",
                    "part2",
                    multiSelectQuestion22_23.id,
                    prev.filter((v) => v !== e.target.value)
                  );
                }
              }}
            />{" "}
            {letter}. {text}
          </label>
        );
      }
    )}
  </div>
)}
   

      <h2><strong>Questions 24-26</strong></h2><br />
        
          <p>Complete the sentences below.
          Choose<strong>ONE WORD ONLY</strong>  from the passage for each answer.</p>  
          <p>Write your answers in boxes 24-26 on your answer sheet.</p>
        {/* <p> <br /><strong>NB:</strong> You may use any letter more than once.<br/></p> 
         */}
            <div className="question-block">
<p>24. Corals have a number of<BlankInput
        section='reading'
        part='part2'
        id={24}
        placeholder='24'
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/>which they use to collect their food. </p>
<p>25. Algae gain <BlankInput
        section='reading'
        part='part2'
        id={25}
        placeholder='25'
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/> from being inside the coral.</p>
<p>26. Increases in the warmth of the sea water can remove the <BlankInput
        section='reading'
        part='part2'
        id={26}
        placeholder='26'
        allAnswers={allAnswers}
        handleAnswerChange={handleAnswerChange}/> from coral.</p>
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
                
            <h3><strong>Questions 27-33</strong></h3>
    
          <p>  Look at the following statements (Questions 27-33) and the list of experts below. 
            <br/>Match each statement with the correct person, A-C. 
           Choose the correct letter , <strong> A-C</strong>,next to <strong> Questions 27-33.</strong>
          </p>
          
      <div className="center-containerx">
                  <div className="question-blockx">
                   <h4>List of People</h4>
            <p><strong>A.</strong>  Martin Rees.</p>
            <p><strong>B.</strong> Daniel Wolpert.</p>
            <p><strong>C.</strong> Kathleen Richardson.</p>
          

                  </div>
                </div>
 <div className="dropdown-blockx">
 <p>27.For our own safety, humans will need to restrict the abilities of robots..<DropDown5 section='reading' part='part3' id={27} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
              <p>28.The risk of robots harming us is less serious than humans believe it to be. <DropDown5 section='reading' part='part3' id={28} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
          <p>29. It will take many decades for robot intelligence to be as imaginative as human intelligence.<DropDown5 section='reading' part='part3' id={29} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
         <p>30.We may have to start considering whether we are treating robots fairly.<DropDown5 section='reading' part='part3' id={30} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
         <p>31.Robots are probably of more help to us on Earth than in space..<DropDown5 section='reading' part='part3' id={31} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
         <p>32.The ideas in high-quality science fiction may prove to be just as accurate as those found in the work of mediocre scientists.<DropDown5 section='reading' part='part3' id={32} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
         <p>33.There are those who look forward to robots developing greater intelligence.<DropDown5 section='reading' part='part3' id={33} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
                          
 </div>
             <p>
            <h3><strong>Questions 34-36</strong></h3>
    
             
            <br/>Complete each sentence with the correct ending, A-D. 
           Choose the correct letter , <strong> A-D</strong>,next to <strong> Questions 34-36.</strong>
          </p>
          <div className="center-containerx">

                  <div className="question-blockx">
                   <h4>List of People</h4>
            <p><strong>A.</strong>  robots to explore outer space..</p>
            <p><strong>B.</strong> changes made to other planets for our own benefit.</p>
            <p><strong>C.</strong> the harm already done by artificial intelligence.</p>
              <p><strong>D.</strong> the harm already done by artificial intelligence.</p>
          

                  </div>
                </div>
 <div className="dropdown-blockx">
                      <p>34.Richardson and Rees express similar views regarding the ethical aspect of.<DropDown6  section='reading' part='part3' id={34} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
              <p>35.Rees and Wolpert share an opinion about the extent of <DropDown6 section='reading' part='part3' id={35} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
          <p>36.Wolpert disagrees with Richardson on the question of.<DropDown6 section='reading' part='part3' id={36} allAnswers={allAnswers} handleAnswerChange={handleAnswerChange}/></p>
                           
                </div>
  <h3><strong>Questions 37-40</strong></h3>
        <p>Choose the correct letter <strong>A, B, C, or D</strong>.</p>
      <h3><strong>Bidcaster Community Archaeology Project</strong></h3>
      {questions37to40.map((q)=>(
        <div key={q} className="question-block">
          <p className="mcq-question"><strong>{q.id}.</strong> {q.text}</p>
          {q.options.map((text,index)=>(
            <label key={index}>
              <input type="radio"
              name={`q${q.id}`}
              value={text}
              checked={allAnswers.reading.part3[`q${q.id}`]=== text}
              onChange={(e)=>{handleAnswerChange('reading', 'part3' ,e.target.name, e.target.value)}}
               />
               {text}
            </label>
          ))}
        </div>
      ))}

         
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
        <button className="end-btn" onClick={()=>endFullTest("IELTS_AC_20_2025_TEST3")}>
          End Test
        </button>
      </div>
      {/* It sits OUTSIDE main UI but inside component */} 
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

export default IELTSTest3;
