import React, { Component } from "react";
import MovieElement from "./MovieElement/MovieElement";

export default class MovieList extends Component {

  render() {
    return (
      <div className="d-flex w-75 flex-flow flex-row flex-wrap align-center justify-content-space-evenly mx-4">
        
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