import React, { Component } from "react";
import StyleElement from "./FavoriElement.module.scss";

class FavoriElement extends Component {

  render() {
    return (
      <div className={ StyleElement.container }>
        <div className={ "card " + StyleElement.card_style }>
          <img 
            src={ this.props.favori.img }
            alt={ "image du film : " + this.props.favori.title }
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
          <div className="card-body flex-fill d-flex flex-column p-3">
            <h5 className="card-title text-center">
              { this.props.favori.title }
            </h5>
            <hr className="w-80" />
            <p className="card-text text-center flex-fill">
              { this.props.favori.details }
            </p>
            <div className="d-flex flex-row justify-content-end">
              <button
                className="btn btn-small btn-danger"
                onClick={()=>{this.props.removeFavori(this.props.favori.title)}}
              >Supprimer</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default FavoriElement;