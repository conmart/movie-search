import React, { Component } from 'react';
import './MovieCard.css';

class MovieCard extends Component {

  render(props) {
    return (
      <div className="MovieCard">
        <img src={ this.props.moviePoster } />
        <h4>{ this.props.movieTitle }</h4>
      </div>
    )
  }
}

export default MovieCard;
