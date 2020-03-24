import React, { Component } from "react";
import MovieElement from "./MovieElement/MovieElement";

import StyleList from "./MovieList.module.scss";
export default class MovieList extends Component {

  render() {
    return (
      <div 
        className={ StyleList.movieList_container }>
        
        { this.props.movies.map( ( m, index ) => (
          <MovieElement
            key={ m.id }
            movie={ m }

            isFavori= { this.props.favoris.includes(m.title) }
            addFavori= { this.props.addFavori }
            removeFavori= { this.props.removeFavori }
            
            updateSelectedMovie={() => {this.props.updateSelectedMovie(index)}}
          />
        ))}
      </div>
    );
  }

}