import React from "react";
import '../styles/featureCard.css';

const FeatureCard = ({ title, description, imageUrl }) => {
  return (
    <div className="feature-card">
      {imageUrl && (
        <div className="feature-card-image">
          <img src={imageUrl} alt={title} />
        </div>
      )}
      <div className="feature-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
