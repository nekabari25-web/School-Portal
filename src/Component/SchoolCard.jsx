import React, { useState } from "react";

function SchoolCard({ school }) {
  const [showDetails, setShowDetails] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <article className="school-card">
      <div className="school-image-container">
        {!imageError && school.logo ? (
          <img
            src={school.logo}
            alt={`${school.name} logo`}
            className="school-logo"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="school-logo-fallback">
            {school.name.charAt(0).toUpperCase()}
          </div>
        )}
      </div>

      <div className="school-card-content">
        <h3>{school.name}</h3>

        <p className="school-location">
          📍 {school.location}
        </p>

        <button
          className="school-details-button"
          onClick={() => setShowDetails(!showDetails)}
          aria-expanded={showDetails}
        >
          {showDetails ? "Hide Details" : "View Details"}
        </button>

        {showDetails && (
          <div className="school-details">
            <p>{school.description}</p>
          </div>
        )}
      </div>
    </article>
  );
}

export default SchoolCard;