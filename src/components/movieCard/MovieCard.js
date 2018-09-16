import React, { Component } from 'react';

class MovieCard extends Component {

  render(props) {
    return (
      <div className="MovieCard">
        { console.log(this.props)}
        <h4>{ this.props.movieTitle }</h4>
        <img src='https://www.movieartarena.com/imgs/bladerunner2049ff.jpg' />
      </div>
    )
  }
}

export default MovieCard;
