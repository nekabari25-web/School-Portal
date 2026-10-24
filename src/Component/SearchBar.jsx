import React from "react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="search-container">
      <span className="search-icon">⌕</span>

      <input
        type="text"
        placeholder="Search for a school..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        aria-label="Search partner schools"
      />

      {search && (
        <button
          className="clear-search"
          onClick={() => setSearch("")}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
}

export default SearchBar;