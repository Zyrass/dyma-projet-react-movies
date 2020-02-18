import React, { Component } from "react";
import MovieElement from "./MovieElement";

export default class MovieList extends Component {

  render() {
    return (
      <div className="d-flex w-75 flex-flow flex-row flex-wrap align-center justify-content-space-evenly mx-4">
        
        <MovieElement 
          movie={ this.props.movies[0] }
          updateSelectedMovie={ this.props.updateSelectedMovie }
        />

        <MovieElement 
          movie={ this.props.movies[1] }
          updateSelectedMovie={ this.props.updateSelectedMovie }
        />

        <MovieElement 
          movie={ this.props.movies[2] }
          updateSelectedMovie={ this.props.updateSelectedMovie }
        />

        <MovieElement 
          movie={ this.props.movies[3] }
          updateSelectedMovie={ this.props.updateSelectedMovie }
        />

        <MovieElement 
          movie={ this.props.movies[4] }
          updateSelectedMovie={ this.props.updateSelectedMovie }
        />

        <MovieElement 
          movie={ this.props.movies[5] }
          updateSelectedMovie={ this.props.updateSelectedMovie }
        />

        <MovieElement 
          movie={ this.props.movies[6] }
          updateSelectedMovie={ this.props.updateSelectedMovie }
        />
      </div>
    );
  }

}