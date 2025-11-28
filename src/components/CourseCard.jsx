import React from 'react';
import '../styles/coursecard.css';

const DiplomaCard = ({
  imageUrl,
  altText = "Diploma card",
  category,
  title,
  level = "BEGINNERS LEVEL",
  duration,
  learners,
  alsoAvailable = false,
  availableCategory,
  availableTitle,
  onStartLearning,
  onShareInfo
}) => {
  return (
    <div className="diploma-card">
      {/* Image Section */}
      {imageUrl && (
        <div className="card-image">
          <img src={imageUrl} alt={altText} />
        </div>
      )}
      
      {/* Advanced Level Badge */}
      <div className="level-badge advanced">
        ADVANCED LEVEL
      </div>
      
      {/* Also Available Section */}
      {alsoAvailable && (
        <div className="also-available">
          <div className="section-title">ALSO AVAILABLE IN</div>
          <div className="available-item">
            <div className="category">{availableCategory}</div>
            <div className="title">{availableTitle}</div>
          </div>
        </div>
      )}
      
      {/* Main Content */}
      <div className="card-content">
        <div className="category">{category}</div>
        <div className="title">{title}</div>
        
        {/* Duration and Learners Info */}
        <div className="info-grid">
          {duration && (
            <div className="info-item">
              <span className="info-value">{duration}</span>
              <div className="action-buttons">
                <button className="btn primary" onClick={onStartLearning}>
                  Start Learning
                </button>
                <button className="btn secondary" onClick={onShareInfo}>
                  Share Info
                </button>
              </div>
            </div>
          )}
          
          {learners && (
            <div className="info-item">
              <span className="info-value">{learners}</span>
              <div className="action-buttons">
                <button className="btn primary" onClick={onStartLearning}>
                  Start Learning
                </button>
                <button className="btn secondary" onClick={onShareInfo}>
                  Share Info
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Beginners Level Section */}
        <div className="beginners-section">
          <div className="level-badge beginners">
            {level}
          </div>
          <div className="diploma-tags">
            <span className="diploma-tag">DIPLOMA</span>
            <span className="diploma-tag">DIPLOMA</span>
            <span className="diploma-tag">DIPLOMA</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Additional component for the "Also Available In" section
export const AlsoAvailableCard = ({
  category,
  title,
  onStartLearning,
  onShareInfo
}) => {
  return (
    <div className="also-available-card">
      <div className="section-title">ALSO AVAILABLE IN</div>
      <div className="available-content">
        <div className="category">{category}</div>
        <div className="title">{title}</div>
        <div className="action-buttons">
          <button className="btn primary" onClick={onStartLearning}>
            Start Learning
          </button>
          <button className="btn secondary" onClick={onShareInfo}>
            Share Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiplomaCard;