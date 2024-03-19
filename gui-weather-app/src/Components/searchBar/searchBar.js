// import React from "react";

// function SearchBar() {
//   return <div></div>;
// }

// export default SearchBar;

import React, { useState } from "react";

function SearchBar({ onSubmit }) {
  const [city, setCity] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(city);
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar grid-col-span-4">
      <div className="flex-search">
        <div className="search-logo"></div>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
          className="search-text"
        />
      </div>
      <button type="submit">Get Weather</button>
    </form>
  );
}

export default SearchBar;
