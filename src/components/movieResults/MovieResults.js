import React, { Component } from 'react';
import './MovieResults.css';
import MovieCard from '../movieCard/MovieCard';

class MovieResults extends Component {

  render() {
    return (
      <div className='MovieResults'>
        <MovieCard
          movieTitle='Blade Runner 2049'
          moviePoster='https://www.movieartarena.com/imgs/bladerunner2049ff.jpg'/>
        <MovieCard
          movieTitle='Fight Club'
          moviePoster='https://images-na.ssl-images-amazon.com/images/I/51OsUdPrjoL.jpg' />
        <MovieCard
          movieTitle='Black Panther'
          moviePoster='https://images-na.ssl-images-amazon.com/images/I/81H8e4B8SlL._SY717_.jpg' />
      </div>
    )
  }
}

export default MovieResults;
