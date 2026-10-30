import React, { useState } from "react";

import schools from "../data/schools";
import SearchBar from "./SearchBar";
import SchoolCard from "./SchoolCard"


function PartnerSchools() {
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(4);

  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(search.toLowerCase())
  );

  const visibleSchools = filteredSchools.slice(0, visibleCount);

  return (
    <section className="partner-schools" id="partner-schools">
      <div className="partner-container">

        <div className="section-heading">
          <span className="section-label">
           PATNER SCHOOLS 
          </span>

          <h2>Our Partner Schools</h2>

          <p>
           These are schools currently using the Donac Schools Portal.
          </p>
        </div>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      
        <div className="school-results">
          Showing {visibleSchools.length} of{" "}
          {filteredSchools.length} schools
        </div>
          
        <div className="school-grid">
          {visibleSchools.map((school) => (
            <SchoolCard
              key={school.id}
              school={school}
            />
            
          ))}
        </div>

        {filteredSchools.length === 0 && (
          <div className="no-results">
            <h3>No schools found</h3>

            <p>
              Try searching with another school name.
            </p>

            <button
              onClick={() => setSearch("")}
              className="reset-button"
            >
              Show All Schools
            </button>
          </div>
        )}

        {visibleCount < filteredSchools.length && (
          <div className="load-more-container">
            <button
              className="load-more-button"
              onClick={() =>
                setVisibleCount((count) => count + 4)
              }
            >
              Load More Schools
            </button>
          </div>
        )}

      </div>
    </section>
  );
}

export default PartnerSchools;