import React from "react";
import "../styles/coursecard.css";
import { useNavigate } from "react-router-dom";
const CourseCard = ({
  imageUrl,
  altText = "Diploma image",
  title,
  category,
  level = "BEGINNERS LEVEL",
  duration,
  path,
  learners,
  alsoAvailable = false,
  availableCategory,
  availableTitle,
  onStartLearning,
  level2,
  onShareInfo,
}) => {
  const navigate = useNavigate();

  const handleStartLearning = () => {
    navigate(path); // dynamically navigate to the path
  };

  return (
    <div className="diploma-card" onClick={handleStartLearning}>

      {/* Image */}
      {imageUrl && (
        <div className="card-image">
          <img src={imageUrl} alt={altText} />
        </div>
      )}

      {/* Level Badge (Advanced fixed) */}
      

      {/* Also Available Section */}
      {alsoAvailable && (
        <div className="also-available">
          <div className="section-title">ALSO AVAILABLE IN</div>
          <div className="available-item">
           
            <div className="title">{availableTitle}</div>
             <div className="category">{availableCategory}</div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="card-content">
<div className="level-badge advanced">{level2}</div>
        <div className="title">{title}</div>
      
        <div className="category">{category}</div>


        {/* Info Grid (Duration + Learners) */}
        {(duration || learners) && (
          <div className="info-grid">
            {duration && (
              <InfoItem
                label={duration}
                onStartLearning={onStartLearning}
                onShareInfo={onShareInfo}
              />
            )}

            {learners && (
              <InfoItem
                label={learners}
                onStartLearning={handleStartLearning}
                onShareInfo={onShareInfo}
              />
            )}
          </div>
        )}

        {/* Beginners Section */}
        <div className="beginners-section">
          
          <div className="level-badge beginners" onClick={handleStartLearning}>{level}</div>

          <div className="diploma-tags">
            <span className="diploma-tag">Official Tests</span>
            <span className="diploma-tag">Practice</span>
            <span className="diploma-tag">Resources</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ label, onStartLearning, onShareInfo }) => (
  <div className="info-item">
    {/* <span className="info-value">{label}</span> */}

    <div className="action-buttons">
      <button className="btn primary" onClick={onStartLearning}>
        Start Learning
      </button>
      {/* <button className="btn secondary" onClick={onShareInfo}>
        Share Info
      </button> */}
    </div>
  </div>
);

export default CourseCard;


// give me the css for this component
// import React from "react";
// import '../styles/coursecard.css'

// const CourseCard = ({
//   level,
//   levelColor = "#6c63ff",
//   badgeText = "DIPLOMA",
//   image,
//   category,
//   title,
//   hours,
//   learners,
// }) => {
//   return (
//     <div className="course-card">
//       <div className="card-header">
//         <div className="level-tag" style={{ backgroundColor: levelColor }}>
//           <span className="level-icon">📊</span>
//           {level}
//         </div>
//         <div className="badge">{badgeText}</div>
//       </div>

//       <img src={image} alt={title} className="card-image" />

//       <div className="card-content">
//         <p className="category">{category}</p>
//         <h3 className="title">{title}</h3>

//         <div className="stats">
//           <span className="hours">🕒 {hours}</span>
//           <span className="learners">👥 {learners} learners</span>
//         </div>

//         <div className="buttons">
//           <button className="info-btn">More Info</button>
//           <button className="start-btn">Start Learning</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;
