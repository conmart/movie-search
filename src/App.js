import React, { Component } from 'react';
import styles from './App.css';
import Title from './components/title/Title';
import SearchableMovieTable from './components/searchableMovieTable/SearchableMovieTable';
import CssModules from 'react-css-modules';

class App extends Component {
  render() {
    return (
      <div styleName='app'>
        <Title text="Welcome To Movie Search"/>
        <SearchableMovieTable />
      </div>
    );
  }
}

export default CssModules(App, styles);
