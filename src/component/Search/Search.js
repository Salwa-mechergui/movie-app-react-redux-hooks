import React from "react";
import { searchMovie } from "../../action/Action";
import { connect } from "react-redux";

const Search = (props) => {
  return (
    <form className="search">
      <input onChange={(e)=>props.searchMovie(e.target.value)} />

    </form>
  );
};

  
export default connect(null, {searchMovie})(Search)