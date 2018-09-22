import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar';
import MovieResults from '../movieResults/MovieResults';
import apiToken from './api_token';
import fetchApi from '../../services/fetchApi'

class SearchableMovieTable extends Component {

  constructor(props) {
    super(props)
    this.state = {
      foundMovies: []
    }
    this.updateSearch = this.updateSearch.bind(this)
  }

  updateSearch(event){
    clearTimeout(this.timeID)
    this.setState({
      searchTerm: event.target.value
    })
    if (event.target.value.length) {
      this.delayedQuery(event.target.value)
    }
  }

  delayedQuery(query) {
    this.timeID = setTimeout(
      () => this.queryMovieDB(query),
      400
    )
  }

  componentDidMount() {
    this.popularMovies()
  }

  popularMovies() {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiToken}&language=en-US&page=1`
    fetchApi(url)
      .then(({results}) => {
        this.setState({
          foundMovies: results
        })
      })
  }

  queryMovieDB(query) {
    let url = `https://api.themoviedb.org/3/search/movie?api_key=${apiToken}&query=${query}`
    fetchApi(url)
      .then(({results}) => {
        this.setState({
          foundMovies: results
        })
      })
  }

  render() {
    return (
      <div className="SearchableMovieTable">
        <SearchBar
          callBack={ this.updateSearch }/>
        <MovieResults foundMovies={ this.state.foundMovies }/>
      </div>
    );
  }
}

export default SearchableMovieTable;
