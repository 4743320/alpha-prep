// components/PTECard.jsx
import React from "react";

export default function PTECard({
  title,
  desc,
  onClick,
  ctaText = "Practice Now →",
  disabled = false
}) {
  return (
    <div
      className={`pte-topic-card ${disabled ? "pte-card-disabled" : ""}`}
      onClick={!disabled ? onClick : undefined}
      role="button"
      tabIndex={0}
    >
      <div>
        <h3 className="pte-topic-title">{title}</h3>
        <p className="pte-topic-desc">{desc}</p>
      </div>

      {!disabled && (
        <span
          className="pte-practice-link"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
        >
          {ctaText}
        </span>
      )}
    </div>
  );
}
