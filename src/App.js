import React, { Component } from 'react';
import './App.css';
import Title from './components/title/Title';
import SearchableMovieTable from './components/searchableMovieTable/SearchableMovieTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title text="Welcome to Movie Search"/>
        <SearchableMovieTable />
      </div>
    );
  }
}

export default App;
