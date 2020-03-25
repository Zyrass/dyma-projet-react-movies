import React, { Component } from "react";
import FavoriElement from "./FavoriElement/FavoriElement";
import StyleList from "./FavoriList.module.scss";

class FavoriList extends Component {

  render() {
    return (
      <div className={ StyleList.favoriList_container }>        
        { this.props.favoris.map( f => (
          <FavoriElement
            key={ f.id }
            favori={ f }
            removeFavori= { this.props.removeFavori }
          />
        ))}
      </div>
    );
  }

}

export default FavoriList;