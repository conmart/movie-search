import React from 'react';
import './SearchBar.css';

const SearchBar = ({value, callBack}) => {
  return (
    <div className='SearchBar'>
      <input
        placeholder='Search for a movie'
        onChange={event => callBack(event)}>
      </input>
    </div>
  )
}

export default SearchBar;
