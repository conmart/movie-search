import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {

  render() {
    return (
      <div className='SearchBar'>
        <input
          placeholder='Search for a movie'
          value={ this.props.value }
          onChange={event => this.props.callBack(event)}></input>
      </div>
    )
  }
}

export default SearchBar;
