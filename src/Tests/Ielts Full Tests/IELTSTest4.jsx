import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

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

  // Skeleton parts content
  const partsContent = {
    listening: [
      <div key="listening-part1">Listening Part 1</div>,
      <div key="listening-part2">Listening Part 2</div>,
      <div key="listening-part3">Listening Part 3</div>,
      <div key="listening-part4">Listening Part 4</div>,
    ],
    reading: [
      <div key="reading-part1">Reading Part 1</div>,
      <div key="reading-part2">Reading Part 2</div>,
      <div key="reading-part3">Reading Part 3</div>,
    ],
    writing: [
      <div key="writing-part1">Writing Part 1</div>,
      <div key="writing-part2">Writing Part 2</div>,
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
          style={{
          
          }}
        >
          &#8592; Back
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
