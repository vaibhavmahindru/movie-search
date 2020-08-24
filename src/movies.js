import React, { Component } from "react";
class movies extends Component {
  styles = {
    height: "250px",
  };
  render() {
    return (
      <div className="card">
        <img
          className="card--image"
          src={
            this.props.movie.poster_path === null
              ? "/images/not-found.png"
              : `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${this.props.movie.poster_path}`
          }
          alt={this.props.movie.title + " poster"}
          style={this.props.movie.poster_path === null ? this.styles : null}
        />
        <div className="card--content">
          <h3 className="card--title">{this.props.movie.title}</h3>
          <p className="release-date">
            <small>Release Date: {this.props.movie.release_date}</small>
          </p>
          <p className="rating">
            <small>Rating: {this.props.movie.vote_average}/10</small>
          </p>
          <p className="card--desc">{this.props.movie.overview}</p>
        </div>
      </div>
    );
  }
}

export default movies;
