import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar';
import MovieResults from '../movieResults/MovieResults';
import apiToken from './api_token';

class SearchableMovieTable extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchTerm: 'test',
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
    })
  }

  componentDidMount() {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiToken}&query=${this.state.searchTerm}`
    fetch(url)
      .then(results => this.setState({foundMovies: results.data})).catch()
  }

  render() {
    return (
      <div className="SearchableMovieTable">
        <SearchBar
          value={ this.state.searchTerm }
          callBack={ this.updateSearch.bind(this) }/>
        <MovieResults foundMovies={ this.state.testData }/>
      </div>
    );
  }
}

export default SearchableMovieTable;
