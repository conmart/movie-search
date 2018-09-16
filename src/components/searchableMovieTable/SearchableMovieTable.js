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

  updateSearch(event){
    this.setState({
      searchTerm: event.target.value
    })
    console.log(this.state.searchTerm)
  }

  render() {
    return (
      <div className="SearchableMovieTable">
        <SearchBar
          value={ this.state.searchTerm }
          callBack={ this.updateSearch.bind(this) }/>
        <MovieResults />
      </div>
    );
  }
}

export default SearchableMovieTable;
