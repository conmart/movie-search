import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar';
import MovieResults from '../movieResults/MovieResults';
import apiToken from './api_token';

class SearchableMovieTable extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchTerm: '',
      foundMovies: [],
      testData: [
        {
          title: 'Blade Runner 2049',
          poster: 'https://www.movieartarena.com/imgs/bladerunner2049ff.jpg'
        },
        {
          title: 'Fight Club',
          poster: 'https://images-na.ssl-images-amazon.com/images/I/51OsUdPrjoL.jpg'
        },
        {
          title: 'Black Panther',
          poster: 'https://images-na.ssl-images-amazon.com/images/I/81H8e4B8SlL._SY717_.jpg'
        }
      ]
    }
  }

  updateSearch(event){
    this.setState({
      searchTerm: event.target.value
    }, () => {
      clearInterval(this.timeID)
      if (this.state.searchTerm.length >= 3) {
        this.delayedQuery()
      } else {
        this.getPopularMovies()
      }
    })
  }

  delayedQuery() {
    this.timeID = setInterval(
      () => this.getNewMovies(),
      400
    )
  }

  componentDidMount() {
    this.getPopularMovies()
  }

  getPopularMovies() {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiToken}&language=en-US&page=1`
    fetch(url)
      .then((results) => {
        return results.json()
      })
      .then((json) => {
        this.setState({
          foundMovies: json.results
        })
      })
  }

  getNewMovies() {
    console.log('ran new movies')
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiToken}&query=${this.state.searchTerm}`
    fetch(url)
      .then((results) => {
        return results.json()
      })
      .then((json) => {
        this.setState({
          foundMovies: json.results
        })
        clearInterval(this.timeID)
      })
  }

  render() {
    return (
      <div className="SearchableMovieTable">
        <SearchBar
          value={ this.state.searchTerm }
          callBack={ this.updateSearch.bind(this) }/>
        <MovieResults foundMovies={ this.state.foundMovies }/>
      </div>
    );
  }
}

export default SearchableMovieTable;
