import React from "react";
import schools from "../data/schools";

function SchoolCarousel() {
  // Duplicate the schools to create a seamless loop
  const allSchools = [...schools, ...schools];

  return (
    <section className="carousel-section">
      <div className="carousel-heading">
        <span>PATNER SCHOOLS</span>
        <h2>Our Partner Schools</h2>
        <p>
          These are schools currently using the Schools Portal.
        </p>
      </div>

      <div className="carousel-container">
        <div className="carousel-track">
          {allSchools.map((school, index) => (
            <div
              className="carousel-card"
              key={`${school.id}-${index}`}
            >
              <div className="carousel-logo">
                <img
                  src={school.logo}
                  alt={`${school.name} logo`}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                    event.currentTarget.nextElementSibling.style.display =
                      "flex";
                  }}
                />

                <div className="logo-fallback">
                  {school.name.charAt(0)}
                </div>
              </div>

              <h3>{school.name}</h3>

              <p>{school.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SchoolCarousel;