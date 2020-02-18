import React, { Component } from "react";

export default class MovieElement extends Component {

  mouseEnter = () => {
    this.props.updateSelectedMovie(this.props.movie.title)
  }

  render() {
    return (
      <div onMouseEnter={ this.mouseEnter } className="w-50  p-1">
        <div className="card">

          <img 
            src={ this.props.movie.image }
            alt={ "image du film : " + this.props.movie.title }
            className="card-img-top"
            height="200"
          />
          <div className="card-body">
            <h5 className="card-title">{ this.props.movie.title }</h5>
            <p className="card-text">
              { this.props.movie.duree }
            </p>
          </div>
        </div>
      </div>
    );
  }

}