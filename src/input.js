import React, { Component } from "react";
class input extends Component {
  render() {
    const searchMovie = async (e) => {
      e.preventDefault();
      const query = "Jurassic";

      const url = `https://api.themoviedb.org/3/search/movie?api_key=de70721a82fd944404b174a37aef7df3&language=en-US&query=${query}&page=1&include_adult=false`;

      //const url2 = `http://www.omdbapi.com/?i=tt3896198&apikey=f1d1c7f9&t=${query}`;
      //Another free movie api but not as useful as the first one as it has more movies
      try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    return (
      <form className="form" onSubmit={searchMovie}>
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
