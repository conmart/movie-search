import React, { Component } from 'react';
import SearchBar from '../searchBar/SearchBar';
import MovieResults from '../movieResults/MovieResults';

class SearchableMovieTable extends Component {

  constructor(props) {
    super(props)
    this.state = {
      searchTerm: ''
    }
  }

  render() {
    return (
      <div className="SearchableMovieTable">
        <SearchBar />
        <MovieResults />
      </div>
    );
  }
}

export default SearchableMovieTable;
