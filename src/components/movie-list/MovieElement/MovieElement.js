import React, { Component } from "react";
import StyleElement from "./MovieElement.module.scss";

export default class MovieElement extends Component {

  handleMovieClick = () => {
    this.props.updateSelectedMovie(this.props.movie.title)
  }

  render() {
    return (
      <div 
        onClick={ this.handleMovieClick }
        className={ StyleElement.container }
      >
        <div className={ "card " + StyleElement.card_style }>
          <img 
            src={ this.props.movie.img }
            alt={ "image du film : " + this.props.movie.title }
            className="img-fluid"
            style={
              { 
                border: "3px solid #333",
                maxWidth: "200px",
                minHeight: "300px",
                maxHeight: "300px",
                filter: "grayscale(100%)"
              }
            }
          />
          <div className="card-body">
            <h5 className="card-title text-center">
              { this.props.movie.title }
            </h5>
            <hr className="w-80" />
            <p className="card-text text-center">
              { this.props.movie.details }
            </p>
          </div>
        </div>
      </div>
    );
  }

}