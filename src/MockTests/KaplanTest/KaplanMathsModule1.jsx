import React, { useState, useEffect, useContext } from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import questions from '../../Data/KaplanTest/math_module1.json';
import { useNavigate } from "react-router-dom";
import { useSatScore } from "../../hooks/UseSatScore";
import '../../styles/satmath.css';

const KaplanMathsModule1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const [timeLeft, setTimeLeft] = useState(20 * 60); // ⏱ 20 min timer
  const navigate = useNavigate();

    const { saveLocalScores } = useSatScore();
  const currentQuestion = questions[currentIndex];
  const isMultipleChoice =
    currentQuestion.options && Object.keys(currentQuestion.options).length > 0;

  // Restore selected option when navigating
  useEffect(() => {
    const prevAnswer = answers[currentIndex] || null;
    setSelectedOption(prevAnswer);
  }, [currentIndex, answers]);

  // ⏲ Timer effect
  useEffect(() => {
    if (timeLeft <= 0) {
      handleSubmit(); // Auto-submit when time runs out
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleOptionChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    saveAnswer(value);
  };

  const saveAnswer = (value) => {
    setAnswers((prev) => ({
      ...prev,
      [currentIndex]: value,
    }));
  };

  const goToNext = () => {
    if (isMultipleChoice) saveAnswer(selectedOption);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const goToPrev = () => {
    if (isMultipleChoice) saveAnswer(selectedOption);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = () => {
    const finalAnswers = {
      ...answers,
      [currentIndex]: isMultipleChoice ? selectedOption : answers[currentIndex],
    };

    let calculatedScore = 0;
    questions.forEach((q, index) => {
      const correctAnswer = q.answer?.toString().trim();
      const userAnswer = finalAnswers[index]?.toString().trim();
      if (correctAnswer && userAnswer && correctAnswer === userAnswer) {
        calculatedScore++;
      }
    });

    saveLocalScores("Kaplan-Math Module 1", calculatedScore);

    // 🚀 After submit, go to Module 2
    navigate("/kap-m-m2");
  };

  const getOptionClass = (key) => {
    if (!selectedOption) return "";
    if (key === currentQuestion.answer) return "correct-option";
    if (key === selectedOption) return "wrong-option";
    return "";
  };

  // ✅ Multiple Choice View
  const renderMultipleChoice = () => (
    <div className="sat-wrapper full-width">
      <div className="sat-header">
        <div className="left-info">
          <h3>Kaplan Math Module 1</h3>
          <p className="directions">Select the best answer to each question.</p>
        </div>

        {/* Timer */}
        <div className="center-timer">
          🕒 {formatTime(timeLeft)}
        </div>

        <div className="right-tools">
          <span>Calculator</span>
          <span>Help</span>
        </div>
      </div>

      <div className="question-box">
        <span className="question-num">Question {currentIndex + 1}</span>
        <div className="question-text">
          {currentQuestion.image && <div className="image-container">
           <img src={currentQuestion.image.trim()} alt="{`Question ${currentIndex+1} visual}"
           onError={(e)=>(e.target.style.display = "none")} />
          </div>
}
          <BlockMath math={currentQuestion.question.replace(/\\\(|\\\)/g, "")} />
        </div>
        

        <div className="options-list">
          {Object.entries(currentQuestion.options).map(([letter, text]) => (
            // <label
            //   key={letter}
            //   className={`option-button ${getOptionClass(letter)}`}
            // >
            //   <input
            //     type="radio"
            //     name={`question-${currentIndex}`}
            //     value={letter}
            //     checked={selectedOption === letter}
            //     onChange={handleOptionChange}
            //   />
            //   <span>
            //     <strong>{letter}:</strong>{" "}
            //     <InlineMath math={text.replace(/\\\(|\\\)/g, "")} />
            //   </span>
            // </label>
<label key={letter} className="option-button">
  <input
    type="radio"
    name={`question-${currentIndex}`}
    value={letter}
    checked={selectedOption === letter}
    onChange={handleOptionChange}
  />
  <span>
    <strong>{letter}:</strong>{" "}
    <InlineMath math={text.replace(/\\\(|\\\)/g, "")} />
  </span>
</label>            
          ))}
        </div>

        <div className="bottom-controls">
          <button className="btn" onClick={goToPrev} disabled={currentIndex === 0}>
            Previous
          </button>
          <button className="btn" onClick={goToNext}>
            {currentIndex === questions.length - 1 ? "Submit" : "Next"}
          </button>
        </div>

        {/* ✅ End Module Button */}
        <div className="end-module-bottom">
          <button className="end-module-btn" onClick={handleSubmit}>
            End Module Early
          </button>
        </div>
      </div>
    </div>
  );

  // ✅ Free Response View
  const renderStudentResponse = () => (
    <div className="sat-container">
      <div className="sat-header">
        <h2>Kaplan Math Module 1: Student-Produced Response</h2>
        <div className="center-timer">🕒 {formatTime(timeLeft)}</div>
        <div className="right-tools"><span>Calculator</span><span>Help</span></div>
      </div>

      <div className="sat-main">
        <div className="sat-left">
     <h3>Student-produced response directions</h3>
        <ul>
          <li>Enter only <b>one correct answer</b>, even if there are multiple correct answers.</li>
          <li>You can enter up to 5 characters for a positive answer and up to 6 characters for a negative answer (including negative sign).</li>
          <li>If your answer is a fraction but it doesn’t fit, enter the decimal equivalent instead.</li>
          <li>If your answer is a decimal but it doesn’t fit, round it to 4 digits.</li>
          <li>If your answer is a mixed number (such as 5 1/2), enter it as an improper fraction (11/2) or decimal (5.5).</li>
          <li>Don’t enter symbols such as percent sign, comma, or dollar sign.</li>
        </ul>

        {/* Examples table */}
        <h4 className="mt-2">Examples</h4>
        <table className="examples-table">
          <thead>
            <tr>
              <th>Answer</th>
              <th>Acceptable answers</th>
              <th>Unacceptable answers (no credit)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>3.5</td>
              <td>3.5<br />3.50<br />7/2</td>
              <td>31/2<br />3 1/2</td>
            </tr>
            <tr>
              <td>2/3</td>
              <td>2/3<br />.6666<br />.6667<br />.666</td>
              <td>.66<br />.67<br />.667</td>
            </tr>
          </tbody>
        </table>
      </div>

        <div className="sat-right">
          <div className="question-box">
            <span className="question-num">Question {currentIndex + 1}</span>
           {currentQuestion.image && <div className="image-container">
           <img src={currentQuestion.image.trim()} alt="{`Question ${currentIndex+1} visual}"
           onError={(e)=>(e.target.style.display = "none")} />
          </div>
}
            <BlockMath math={currentQuestion.question.replace(/\\\(|\\\)/g, "")} />
            <label className="answer-label">Your answer</label>
            <input
              type="text"
              className="answer-input"
              placeholder="Enter answer"
              value={answers[currentIndex] || ""}
              onChange={(e) => saveAnswer(e.target.value)}
            />
          </div>

          <div className="nav-buttons">
            <button className="sat-btn" onClick={goToPrev} disabled={currentIndex === 0}>
              Back
            </button>
            <button className="sat-btn next-btn" onClick={goToNext}>
              {currentIndex === questions.length - 1 ? "Submit" : "Next"}
            </button>
          </div>

          {/* ✅ End Module Button */}
          <div className="end-module-bottom">
            <button className="end-module-btn" onClick={handleSubmit}>
              End Module Early
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return isMultipleChoice ? renderMultipleChoice() : renderStudentResponse();
};

export default KaplanMathsModule1;
