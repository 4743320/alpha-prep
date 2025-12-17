// import React, { useState, useEffect } from 'react';
// import '../Styles/SatEnglish.css'
// import questions from '../Data/SatEnglishQB/SEC_BOUND_EM.json';

// const SatEnglish = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [answers, setAnswers] = useState({});
//   const [showExplanation, setShowExplanation] = useState(false);

//   const currentQuestion = questions[currentIndex];

//   // Restore previously selected option when navigating
//   useEffect(() => {
//     const prevAnswer = answers[currentIndex] || null;
//     setSelectedOption(prevAnswer);
//     setShowExplanation(false); // reset explanation when moving
//   }, [currentIndex]);

//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//     saveAnswer(option);
//   };

//   const saveAnswer = (option = selectedOption) => {
//     setAnswers(prev => ({
//       ...prev,
//       [currentIndex]: option
//     }));
//   };

//   const handleNext = () => {
//     saveAnswer();
//     if (currentIndex < questions.length - 1) {
//       setCurrentIndex(currentIndex + 1);
//     }
//   };

//   const handleBack = () => {
//     saveAnswer();
//     if (currentIndex > 0) {
//       setCurrentIndex(currentIndex - 1);
//     }
//   };

//   // For option coloring
//   const getOptionClass = (letter) => {
//   if (!selectedOption) return "option";
//   if (selectedOption === letter) {
//     if (letter === currentQuestion.answer) return "option correct"; // changed
//     else return "option wrong";
//   }
//   return "option";
// };
//   return (
//     <div className="test-container">
//       <div className="test-header">
//         <div className="section-info">
//           <h2>Section 1, Module 1:</h2>
//           <p>Reading and Writing</p>
//         </div>
//       </div>

//       <div className="test-main">
//         {/* Left: Passage */}
//         <div className="passage">
//           <p>{currentQuestion.passage}</p>
//           {currentQuestion.image && (
//             <div className="passage-image">
//               <img src={currentQuestion.image} alt="Passage Illustration" />
//             </div>
//           )}
//         </div>

//         {/* Right: Question + Options */}
//         <div className="question-panel">
//           <div className="question-header">
//             <span className="question-number">{currentQuestion.id}</span>
//             <label>
//               <input type="checkbox" /> Mark for Review
//             </label>
//           </div>

//           <div className="question-text">
//             {currentQuestion.question}
//           </div>

//           <div className="options">
//             {Object.entries(currentQuestion.options).map(([letter, text]) => (
//               <label key={letter} className={getOptionClass(letter)}>
//                 <input
//                   type="radio"
//                   name={`q${currentQuestion.id}`}
//                   value={letter}
//                   checked={selectedOption === letter}
//                   onChange={() => handleOptionChange(letter)}
//                 />
//                 <span>{letter}: {text}</span>
//               </label>
//             ))}
//           </div>

//           {/* Explanation dropdown */}
//           <div className="explanation-container">
//             <button 
//               className="btn explanation-btn"
//               onClick={() => setShowExplanation(!showExplanation)}
//             >
//               {showExplanation ? "Hide Explanation" : "Show Explanation"}
//             </button>
//             {showExplanation && (
//               <div className="explanation-text">
//                 {currentQuestion.explanation}
//               </div>
//             )}
//           </div>

//           <div className="nav-buttons">
//             <button
//               className="btn back"
//               onClick={handleBack}
//               disabled={currentIndex === 0}
//             >
//               Back
//             </button>
//             <button
//               className="btn next"
//               onClick={handleNext}
//               disabled={currentIndex === questions.length - 1}
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SatEnglish;

