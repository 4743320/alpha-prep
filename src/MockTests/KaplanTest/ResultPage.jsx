
import { useLocation, useNavigate } from "react-router-dom";
import '../../styles/resultpage.css';
import { useSatScore } from "../../hooks/UseSatScore";
import { useEffect } from "react";
import { account } from "../../lib/appwrite";
import { saveSatScore } from "../../lib/helpers/saveSatScore";

const ResultsPage = () => {
  const { scores } = useSatScore();
  const navigate = useNavigate();
  const location = useLocation()
  if (Object.keys(scores).length === 0) {
    return (
      <div className="results-container">
        <h1>Your SAT Module Results</h1>
        <p>No scores recorded yet.</p>
        <button className="back-button" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>
    );
  }


 
  // ✅ Raw scores
  const readingRaw =
    (scores.readingModule1 || 0) +
    (scores.readingModule2 || 0) +
    (scores["Kaplan-English Module 1"] || 0) +
    (scores["Kaplan-English Module 2"] || 0);

  const mathRaw =
    (scores.mathModule1 || 0) +
    (scores.mathModule2 || 0) +
    (scores["Kaplan-Math Module 1"] || 0) +
    (scores["Kaplan-Math Module 2"] || 0);

  // ✅ Totals
  const totalReadingQuestions = 54;
  const totalMathQuestions = 44;

  // ✅ Lookup tables
  const readingScaleTable = {
    0: 200, 20: 440, 30: 530, 40: 620, 50: 720, 53: 780, 54: 800,
  };
  const mathScaleTable = {
    0: 200, 10: 330, 20: 450, 30: 590, 40: 610, 42: 780, 44: 800,
  };

  const getScaledScore = (raw, table) => {
    if (table[raw] !== undefined) return table[raw];
    const keys = Object.keys(table).map(Number).sort((a, b) => a - b);
    for (let i = 0; i < keys.length - 1; i++) {
      if (raw > keys[i] && raw < keys[i + 1]) {
        const lowRaw = keys[i], highRaw = keys[i + 1];
        const lowScaled = table[lowRaw], highScaled = table[highRaw];
        return Math.round(
          lowScaled +
            ((raw - lowRaw) / (highRaw - lowRaw)) * (highScaled - lowScaled)
        );
      }
    }
    return table[keys[keys.length - 1]];
  };

  // ✅ Scaled scores
  const readingScaled = getScaledScore(readingRaw, readingScaleTable);
  const mathScaled = getScaledScore(mathRaw, mathScaleTable);
  const totalScore = readingScaled + mathScaled;

  // ✅ Percentages
  const readingPct = ((readingRaw / totalReadingQuestions) * 100).toFixed(1);
  const mathPct = ((mathRaw / totalMathQuestions) * 100).toFixed(1);

 useEffect(()=>{
    if (!location.state?.testName) return;
    const saveResults = async()=>{
      try {
        const user = await account.get()
        const testName = location.state?.testName
        const scoreData={

        readingModule1: scores.readingModule1 || 0,
          readingModule2: scores.readingModule2 || 0,
          mathModule1: scores.mathModule1 || 0,
          mathModule2: scores.mathModule2 || 0,
          readingScaled,
          mathScaled,
          readingPercent: parseFloat(readingPct),
          mathPercent:parseFloat(mathPct),
          totalScore,
        }
        await saveSatScore(user.$id, testName,scoreData)
         console.log("✅ Test results saved successfully!");

      } catch (error) {
         console.error("❌ Error saving SAT results:", error);
      }
    }
    saveResults()

  },[])


  return (
    <div className="results-container">
      <h1>Your SAT {location.state.testName} Results</h1>

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
