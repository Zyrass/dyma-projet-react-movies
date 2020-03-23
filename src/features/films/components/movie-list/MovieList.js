import React, { Component } from "react";
import MovieElement from "./MovieElement/MovieElement";

import StyleList from "./MovieList.module.scss";
export default class MovieList extends Component {

  render() {
    return (
      <div 
        className={ StyleList.movieList_container }>
        
        { this.props.movies.map( ( currentMovie, index ) => (
          <MovieElement
            key={ currentMovie.id + index }
            movie={ currentMovie }
            updateSelectedMovie={() => {this.props.updateSelectedMovie(index)}}
          />
        ))}
      </div>
    );
  }

}