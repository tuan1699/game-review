import React from "react";
import "./Filter.css";
import { useSelector, useDispatch } from "react-redux";
import {
  platformFilterChange,
  genreFilterChange,
  alphaBetFilterChange,
} from "./Filter.slice";
import { useState } from "react";

const Filter = () => {
  const dispatch = useDispatch();

  const [platform, setPlatform] = useState("All");
  const [genre, setGenre] = useState("All");
  const [alphaBet, setAlphaBet] = useState("");

  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
    dispatch(platformFilterChange(e.target.value));
  };

  const handleGenreformChange = (e) => {
    setGenre(e.target.value);
    dispatch(genreFilterChange(e.target.value));
  };

  const handleSortAlphaBet = (e) => {
    setAlphaBet(e.target.value);
    dispatch(alphaBetFilterChange(e.target.value));
  };

  return (
    <div className="filter-field d-flex">
      <div className="filter-by">
        <label htmlFor="">Platform:</label>
        <select
          name=""
          id=""
          className="options"
          value={platform}
          onChange={(e) => handlePlatformChange(e)}
        >
          <option value="All">All Platforms</option>
          <option value="PC (Windows)">Windows PC</option>
          <option value="Web Browser">Browser (Web)</option>
        </select>
      </div>

      <div className="filter-by">
        <label htmlFor="">Genre/Tags:</label>
        <select
          name=""
          id=""
          className="options"
          onChange={(e) => handleGenreformChange(e)}
          value={genre}
        >
          <option value="All">All Genre/Tags</option>
          <option value="MMO">MMO</option>
          <option value="MMORPG">MMORPG</option>
          <option value="Shooter">Shooter</option>
          <option value="Strategy">Strategy</option>
          <option value="MOBA">Moba</option>
          <option value="Card Game">Card Games</option>
          <option value="Racing">Racing</option>
          <option value="Sports">Sports</option>
          <option value="Social">Social</option>
          <option value="Fighting">Fighting</option>
        </select>
      </div>

      <div className="filter-by">
        <label htmlFor="">Sort By:</label>
        <select
          name=""
          id=""
          className="options"
          onChange={(e) => handleSortAlphaBet(e)}
          value={alphaBet}
        >
          <option value="AZ">A - Z</option>
          <option value="ZA">Z - A</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
