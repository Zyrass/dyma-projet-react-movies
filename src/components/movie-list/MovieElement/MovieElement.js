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
        <div className="card mb-5">
          <img 
            src={ this.props.movie.img }
            alt={ "image du film : " + this.props.movie.title }
            className="img-fluid"
            style={
              { 
                maxWidth: "450px",
                minHeight: "200px",
                maxHeight: "200px"
              }
            }
          />
          <div className="card-body">
            <h5 className="card-title">{ this.props.movie.title }</h5>
            <p className="card-text">
              { this.props.movie.details }
            </p>
          </div>
        </div>
      </div>
    );
  }

}