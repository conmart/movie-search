import React, { Component } from 'react';
import './MovieResults.css';
import MovieCard from '../movieCard/MovieCard';

class MovieResults extends Component {

  createMovieCards(props) {
    let cards=[]
    for (let i=0; i < props.length; i++) {
      cards.push(<MovieCard movieTitle={ props[i].title } moviePoster={ props[i].poster } key={i}/>)
    }
    return cards
  }

  render() {
    let movies = this.createMovieCards(this.props.foundMovies);
    return (
      <div className='MovieResults'>
        { movies }
      </div>
    )
  }
}

export default MovieResults;
