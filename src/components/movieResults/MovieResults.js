import React from 'react';
import './MovieResults.css';
import MovieCard from '../movieCard/MovieCard';

const MovieResults = ({foundMovies}) =>
  <div className="MovieResults">
    {foundMovies.map((movie) => {
      return (
        <MovieCard
          movie={ movie }
          key={ movie.id }/>
        )
      })}
  </div>

export default MovieResults;
