import React from 'react';
import styles from './MovieCard.css';
import CssModules from 'react-css-modules';

const MovieCard = ({ movie }) =>
  <div styleName='card'>
    <img styleName='moviePoster' src={ 'https://image.tmdb.org/t/p/w500' + movie.poster_path } alt={movie.title}/>
    <h3 styleName='movieTitle'>{ movie.title}</h3>
    <h4 styleName='movieSubTitle'>{ movie.release_date.slice(0, 4) }</h4>
    <h4 styleName='movieSubTitle'>Popularity: { Math.floor(movie.popularity) } </h4>
  </div>

export default CssModules(MovieCard, styles);
