import React from "react";
import "./Search.css";

const Search = props =>  (
  <form className="form">
    <label>Article Search: </label>
    <input onChange={props.handleUserInput} type="text" name="article-search" />
    <label>Start Year: </label>
    <input onChange={props.handleStartYear} type="text" name="start-year" />
    <label>End Year: </label>
    <input onChange={props.handleEndYear} type="text" name="end-year" />
    <button onClick={props.getArticles} type="submit">Submit</button>
  </form>
);

export default Search;
