import React from 'react'
import { useSatScore } from '../../hooks/UseSatScore'
import { useNavigate } from 'react-router-dom'

const ResultPage = () => {

    const{scores} = useSatScore
    const navigate = useNavigate()
    if(Object.keys(scores)=== undefined){
     return(
          <div className="results-container">
      <h1>Your SAT Module Results</h1>
      <p>No scores recorded yet.</p>
      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Home
      </button>
    </div>
     )


}

const readingRaw = 
(scores.readingModule1 || 0) +
(scores.readingModule2 || 0) +
(scores['Kaplan-English Module 1'] || 0)+
(scores['Kaplan-English Module 2'] || 0)

const mathRaw = 
(scores.mathModule1 || 0)+
(scores.mathModule2 || 0)+
(scores['Kaplan-Math Module 1'] || 0)+
(scores['Kaplan-Math Module 2'] || 0)

const totalReadingQuestions = 54
const totalMathQuestions = 44

const readingScaleTable = {0: 200, 20: 440, 30: 530, 40: 620, 50: 720, 53: 780, 54: 800};
const mathScaleTable = {0: 200, 10: 330, 20: 450, 30: 590, 40: 610, 42: 780, 44: 800};


const getScaledScore=(raw, table)=>{
    // if raw is a key table[raw]=> object[key] return it exactly
    if(table[raw] !== undefined) return table[raw]

    const keys = Object.keys(table).map(Number).sort((a,b)=>a-b)

    for(i=0; i<keys.length-1;i++){
        if( raw > keys[i] && raw < keys[i+1]){
            const lowRaw = keys[i], highRaw=keys[i+1]
            const lowScaled = table[lowRaw], highScaled= table[highRaw]
            return Math.round(lowScaled + ((raw-lowRaw)/(highRaw-lowRaw)*highScaled-lowScaled)) 
        }
    }
    return table[keys[keys.length-1]]
}

const readingScaled = getScaledScore(readingRaw, readingScaleTable)
const mathScaled = getScaledScore(mathRaw, mathScaleTable)

const totalScore = readingScaled + mathScaled

readingPct = ((readingRaw/totalReadingQuestions)*100).toFixed(1)
mathPct =((mathRaw/totalMathQuestions)*100).toFixed(1)


    return (
    <div className="results-container">
      <h1>Your SAT Results</h1>

      <table className="score-table">
        <thead>
          <tr>
            <th>Section</th>
            <th>Raw Score</th>
            <th>Scaled Score</th>
            <th>Percent Correct</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Reading & Writing</td>
            <td>{readingRaw} / {totalReadingQuestions}</td>
            <td>{readingScaled}</td>
            <td>{readingPct}%</td>
          </tr>
          <tr>
            <td>Math</td>
            <td>{mathRaw} / {totalMathQuestions}</td>
            <td>{mathScaled}</td>
            <td>{mathPct}%</td>
          </tr>
        </tbody>
      </table>

      {/* ✅ Progress Bars */}
      <div className="progress-container">
        <div className="progress-item">
          <label>Reading & Writing</label>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(readingScaled / 800) * 100}%` }}
            >
              {readingScaled}/800
            </div>
          </div>
        </div>

        <div className="progress-item">
          <label>Math</label>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(mathScaled / 800) * 100}%` }}
            >
              {mathScaled}/800
            </div>
          </div>
        </div>

        <div className="progress-item total">
          <label>Total</label>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${(totalScore / 1600) * 100}%` }}
            >
              {totalScore}/1600
            </div>
          </div>
        </div>
      </div>

      <button className="back-button" onClick={() => navigate("/")}>
        ← Back to Home
      </button>
    </div>
  );
};

export default ResultsPage;
