import React from "react";
import FavoriList from "./components/favori-list/FavoriList";
import Loading from "../../components/utils/Loading";

const Favoris = ( props ) => {
  return (
    <div className="d-flex flex-row flex-fill pt-4">
      { 
        // Si il existe un contenu alors je charge ce contenu
        // Sinon, je charge le composant loaded
        props.loaded ? (
          <FavoriList 
            favoris = { props.favoris }
            removeFavori = { props.removeFavori }
          />
        ) : (
          // J'initialise le chargement via ce composant
          <Loading />
        )
      }
    </div>
  )
}

export default Favoris;