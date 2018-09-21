import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) =>
  <div className="MovieCard">
    <img src={ 'https://image.tmdb.org/t/p/w500' + movie.poster_path } alt={movie.title}/>
    <h3>{ movie.title}</h3>
    <h4>{ movie.release_date.slice(0, 4) }</h4>
    <h4>Popularity: { Math.floor(movie.popularity) } </h4>
  </div>

export default MovieCard;
