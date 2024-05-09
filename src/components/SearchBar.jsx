import React, { useState, useRef } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [name, setName] = useState("");
  const [activeSort, setActiveSort] = useState("Best Match");
  const sortRefs = {
    "Best Match": useRef(null),
    "Highest Rated": useRef(null),
    "Most Reviewed": useRef(null),
  };

  const handleSortClick = (sortType) => {
    setActiveSort(sortType);
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
        <form>
          <input
            type="text"
            placeholder="Search Business"
            name="search"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </form>
        <input type="text" placeholder="Where?" name="where"></input>
      </div>
      <div className="buttonDiv">
        <button type="submit">Let's go!</button>
      </div>
    </div>
  );
};

export default SearchBar;
