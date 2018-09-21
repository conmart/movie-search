import React, { Component } from 'react';
import './MovieResults.css';
import MovieCard from '../movieCard/MovieCard';

class MovieResults extends Component {

  createMovieCards(props) {
    const cards=[]
    if (props) {
      for (let i=0; i < props.length; i++) {
        cards.push(<MovieCard
          movieTitle={ props[i].title }
          moviePoster={ 'https://image.tmdb.org/t/p/w500' + props[i].poster_path }
          movieYear = { props[i].release_date.slice(0, 4) }
          moviePopularity = { Math.floor(props[i].popularity) }
          key={ props.id }/>)
      }
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

// Wyatt's Solution

// import './MovieResults.css';
// import MovieCard from '../movieCard/MovieCard';
//
//
// const MovieResults = (props) => {
//   return (
//     <div className='movieResults'>
//       this.props.testData.map((movie) => {
//         return (
//           <MovieCard movieTitle={movie.title} moviePoster={movie.poster} key={movie.id} />
//         )
//       })
//     </div>
//   )
// }
//
// export default MovieResults;
