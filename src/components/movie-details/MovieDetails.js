import React, { Component } from "react";

export default class MovieDetails extends Component {

  render() {
    return (
      <div className="d-flex w-25 p-1 mr-4 ">
        <div className="border p-2">
          <h4>{ this.props.movie.title }</h4>
          <hr className="w-80" />
          <img 
            src={ this.props.movie.affiche }
            alt={ "Affiche du film :" + this.props.movie.title }
            className="img-fluid"
          />
          <hr className="w-80" />
          <ul>
            <li>Durée : { this.props.movie.duree }</li>
          </ul>
          <p>
            { this.props.movie.description }
          </p>
        </div>
      </div>
    )
  }

}