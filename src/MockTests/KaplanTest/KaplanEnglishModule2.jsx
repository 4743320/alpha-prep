// src/pages/SAT/KaplanEngModule1.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSatScore } from "../../hooks/UseSatScore";
import "../../styles/satenglish.css";
import questions from "../../Data/KaplanTest/eng_module2.json";

const KaplanEnglishModule2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(600);

  const navigate = useNavigate();
  const { saveLocalScores } = useSatScore();

  // ✅ Format time for display
  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  useEffect(()=>{
    const prevAnswer = answers[currentIndex] || null
    setSelectedOption(prevAnswer)
  },[currentIndex, answers])

  // ✅ Timer effect
  useEffect(() => {
    if (timeLeft < 0) {
      handleSubmit();
      return;
    }

    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const currentQuestion = questions[currentIndex];

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const saveAnswer = () => {
    setAnswers((prev) => ({
      ...prev,
      [currentIndex]: selectedOption,
    }));
  };

  const handleNext = () => {
    saveAnswer();
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleBack = () => {
    saveAnswer();
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleSubmit = () => {
    const finalAnswer = {
      ...answers,
      [currentIndex]: selectedOption,
    };

    let calculatedScore = 0;

    questions.forEach((q, index) => {
      if (finalAnswer[index] === q.answer) calculatedScore++;
    });

    saveLocalScores("Kaplan-English Module 2", calculatedScore);
    navigate('/k-break-timer');
  };

  // ✅ Render safely even before data is ready
  if (!currentQuestion) {
    return <div className="loading">Loading questions...</div>;
  }

  return (
    <div className="test-container">
      {/* ===== Header ===== */}
      <div className="test-header">
        <div className="section-info">
          <h2>Kaplan Module 2:</h2>
          <p>Reading and Writing</p>
        </div>

        <div className="timer">🕒 {formatTime(timeLeft)}</div>
      </div>

      {/* ===== Main Test Section ===== */}
      <div className="test-main">
        {/* Left: Passage */}
        <div className="passage">
          {currentQuestion.image && (
            <div className="image-container">
              <img
                src={currentQuestion.image.trim()}
                alt={`Question ${currentIndex + 1} visual`}
                onError={(e) => (e.target.style.display = "none")}
              />
            </div>
          )}

          <p style={{ whiteSpace: "pre-line", fontWeight: "bold" }}>
            {currentQuestion.passage}
          </p>
        </div>

        {/* Right: Question + Options */}
        <div className="question-panel">
          <div className="question-header">
            <span className="question-number">
              Question {currentQuestion.id}
            </span>
          </div>

          <div className="question-text" style={{ fontWeight: "bold" }}>
            {currentQuestion.question}
          </div>

          <div className="options1">
            {Object.entries(currentQuestion.options).map(([letter, text]) => (
              <label key={letter} className="option1">
                <input
                  type="radio"
                  name={`q${currentQuestion.id}`}
                  value={letter}
                  checked={selectedOption === letter}
                  onChange={() => handleOptionChange(letter)}
                />
                <span>
                  {letter}: {text}
                </span>
              </label>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="nav-buttons1">
            <button
              className="btn back1"
              onClick={handleBack}
              disabled={currentIndex === 0}
            >
              Back
            </button>

            <button
              className="btn-next1"
              onClick={() => {
                if (currentIndex === questions.length - 1) {
                  handleSubmit();
                } else {
                  handleNext();
                }
              }}
            >
              {currentIndex === questions.length - 1
                ? "Next Module"
                : "Next"}
            </button>
          </div>

          {/* End Module Early */}
          <div className="end-module-bottom">
            <button className="end-module-btn" onClick={handleSubmit}>
              End Module Early
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KaplanEnglishModule2;
