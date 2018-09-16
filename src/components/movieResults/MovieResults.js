import React, { Component } from 'react';
import MovieCard from '../movieCard/MovieCard';

class MovieResults extends Component {

  render() {
    return (
      <div className="MovieResults">
        movie results to go here
        <MovieCard movieTitle='Blade Runner 2049'/>
      </div>
    )
  }
}

export default MovieResults;
