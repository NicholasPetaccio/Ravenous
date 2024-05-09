import React, { useState, useRef } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [activeSort, setActiveSort] = useState("Best Match");
  const sortRefs = {
    "Best Match": useRef(null),
    "Highest Rated": useRef(null),
    "Most Reviewed": useRef(null),
  };

  const handleSortClick = (sortType) => {
    setActiveSort(sortType);
  };

  const handleSearchChange = (event) => {
    setName(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    console.log(
      `Searching Yelp with ${name}, in ${location}, by ${activeSort}`
    );
  };

  const activeStyle = {
    left: sortRefs[activeSort].current
      ? sortRefs[activeSort].current.offsetLeft + "px"
      : "0px",
    width: sortRefs[activeSort].current
      ? sortRefs[activeSort].current.offsetWidth + "px"
      : "0px",
  };

  return (
    <div className="searchForms">
      <form onSubmit={handleSearch}>
        <div className="sortOptions">
          {["Best Match", "Highest Rated", "Most Reviewed"].map((sortType) => (
            <button
              ref={sortRefs[sortType]}
              className={`sortBtn ${activeSort === sortType ? "active" : ""}`}
              onClick={() => handleSortClick(sortType)}
              type="button"
            >
              {sortType}
            </button>
          ))}
          <div className="underline" style={activeStyle}></div>
        </div>
        <div className="searchbars">
          <input
            type="text"
            placeholder="Search Business"
            name="search"
            value={name}
            onChange={handleSearchChange}
          />
          <input
            type="text"
            placeholder="Where?"
            name="location"
            value={location}
            onChange={handleLocationChange}
          />
        </div>
        <div className="buttonDiv">
          <button type="submit">Let's go!</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
