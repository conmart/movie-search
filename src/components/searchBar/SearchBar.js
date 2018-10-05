import React from 'react';
import styles from './SearchBar.css';
import CssModules from 'react-css-modules';

const SearchBar = ({value, onSearchChange}) => {
  return (
    <div>
      <input
        placeholder='Search for a movie'
        onChange={event => onSearchChange(event)}
        styleName='searchBar'>
      </input>
    </div>
  )
}

export default CssModules(SearchBar, styles);
