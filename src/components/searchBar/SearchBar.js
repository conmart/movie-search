import React from 'react';
import './SearchBar.css';

const SearchBar = ({value, onSearchChange}) => {
  return (
    <div className='SearchBar'>
      <input
        placeholder='Search for a movie'
        onChange={event => onSearchChange(event)}>
      </input>
    </div>
  )
}

export default SearchBar;
