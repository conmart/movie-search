import React, { Component } from 'react';
import './MovieCard.css';

class MovieCard extends Component {

  render(props) {
    return (
      <div className="MovieCard">
        <img src={ this.props.moviePoster } />
        <h3>{ this.props.movieTitle }</h3>
        <h4>{ this.props.movieYear }</h4>
        <h4>Popularity: { this.props.moviePopularity } </h4>
      </div>
    )
  }
}

export default MovieCard;
