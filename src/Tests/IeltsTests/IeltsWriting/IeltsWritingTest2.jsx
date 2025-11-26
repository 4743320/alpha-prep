import React, { useState } from "react";
import "../../../styles/ielts.css";
import myImage from '../../../assets/Pics/propmt1.png'
import myImage2 from '../../../assets/Pics/Prompt2.png'
import "../../../styles/ielts.css";

const IeltsWritingTest2 = () => {
  const [currentPart, setCurrentPart] = useState(0);
  const [allAnswers, setAllAnswers] = useState({
    part1: {},
    part2: {},
    
  });
const navigate = useNavigate()
  const handleNavigateBack = () => {
  if (window.confirm("All progress will be lost if you leave this page. Are you sure?")) {
    navigate("/ielts-dash");
  }
};


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
        <div className="ielts-container">
            <div className="left-column">
                 <h2>Task 1.</h2>
      <h3>
        You should spend about 20 minutes on <strong>Task-1</strong>
      </h3>
      <img
        src={myImage}
        alt="Writing Task 1"
        style={{ width: "100%", height: "auto", borderRadius: "8px" }}
      />
            </div>
            <div className="right-column">
                <textarea
                value={allAnswers.part1?.writing1 || ''}
                onChange={(e)=>handleAnswerChange('part1', 'writing1', e.target.value)}
                placeholder="Write your Response here"
        style={{
          width: "100%",
          height: "100%",
          padding: "10px",
          fontSize: "16px",
          borderRadius: "6px",
          border: "1px solid #ccc",
          resize: "none",
        }}
                />
            </div>
        </div>


    </div>,
        <div key="part2">
                <div className="ielts-container">
      <div className="left-column">
        <h2>Task 2.</h2>
        <br />
        <h3>You should spend about 40 minutes on <strong>Task-2</strong></h3>
        <br />
        <h4>Write about the following Topic.</h4>
        <img
          src={myImage2}
          alt="Writing Task 2"
          style={{ width: "100%", height: "auto", borderRadius: "8px" }}
        />
        <div>
          <h4>
            Give reasons for your answer and include any relevant examples from your own knowledge or experience.
            <br />
            Write at least 250 words.
          </h4>
        </div>
      </div>

      <div className="right-column">

            <textarea
                value={allAnswers.part2?.writing2 || ''}
                onChange={(e)=>handleAnswerChange('part2', 'writing2', e.target.value)}
                placeholder="Write your Response here"
          style={{
            width: "100%",
            height: "100%",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            resize: "none"
          }}
        />
      </div>
    </div>
    </div>,
  ];

  const handleEndTest = () => {

    // let totalScore = 0
    // let partScores = {}
    // for (let part in correctAnswers){
    //   let partCorrect =0

    //   for (let qid in correctAnswers[part]){
    //     if (allAnswers[part]?.[qid] === correctAnswers[part][qid]){
    //       partCorrect ++ 
    //     }
    //   }
    //   partScores[part] = partCorrect
    //   totalScore += partCorrect    
    // }

//  console.log("Total Score:", totalScore);
//   console.log("Part-wise Scores:", partScores);

    console.log(JSON.stringify(allAnswers,null,2));
    // console.log(JSON.stringify(totalScore,null,2))
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
    {[0, 1].map((i) => (
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

export default IeltsWritingTest2;
