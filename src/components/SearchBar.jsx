import React from "react";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <div className="searchForms">
      <div className="sortOptions">
        <button className="sortBtn" type="submit">
          Best Match
        </button>
        <button className="sortBtn" type="submit">
          Highest Rated
        </button>
        <button className="sortBtn" type="submit">
          Most Reviewed
        </button>
      </div>
      <div className="searchbars">
        <form>
          <input
            type="text"
            placeholder="Search Business"
            name="search"
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
