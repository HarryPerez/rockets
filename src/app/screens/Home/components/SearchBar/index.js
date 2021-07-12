import React from "react";

import "./styles.css";

function SearchBar({ onHandleChange }) {
  const handleChange = (e) => onHandleChange(e.target.value);

  return (
    <input
      onChange={handleChange}
      placeholder="Please type a launch name"
      className="search-bar"
    />
  );
}

export default SearchBar;
