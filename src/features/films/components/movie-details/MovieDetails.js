import React, { Component } from "react";

export default class MovieDetails extends Component {

  render() {
    return (
      <div className="d-flex w-15 p-1 mr-4 fixed-right">
        <div className="border p-2 bg-dark">
          <h4 className="text-center text-warning p-2">{ this.props.movie.title }</h4>
          <img 
            src={ this.props.movie.cover }
            alt={ "Affiche du film : " + this.props.movie.title }
            className="img-fluid py-3 px-5"
            width="400"
          />
          <p className="lead p-4 text-muted">
            { this.props.movie.description }
          </p>
        </div>
      </div>
    )
  }

}