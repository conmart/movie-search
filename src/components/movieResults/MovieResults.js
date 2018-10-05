import React from 'react';
import styles from './MovieResults.css';
import MovieCard from '../movieCard/MovieCard';
import CssModules from 'react-css-modules';

const MovieResults = ({foundMovies}) =>
  <div styleName='movieResults'>
    {foundMovies.map((movie) => {
      return (
        <MovieCard
          movie={ movie }
          key={ movie.id }/>
        )
      })}
  </div>

export default CssModules(MovieResults, styles);
