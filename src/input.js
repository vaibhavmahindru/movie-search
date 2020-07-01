import React, { Component } from "react";
class input extends Component {
  render() {
    return (
      <form className="form">
        <input
          className="input"
          placeholder="Search any movie"
          name="query"
          type="text"
        />
        <button type="submit" className="button">
          <span role="img" aria-label="search">
            {" "}
            🔍
          </span>
        </button>
      </form>
    );
  }
}

export default input;
