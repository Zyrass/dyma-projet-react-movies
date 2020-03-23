import React, { Fragment } from 'react';

// J'importe des composants en rapport avec les films
import { MovieList, MovieDetails, SearchBar } from "./components";

// J'importe le composant traitant le chargement...
import Loading from "../../components/utils/Loading";

// J'importe le style CSS
import Styles from "./index.module.scss";

// Compostant fonctionnel : Dans App.js, il se nomme Films
export default ( props ) => {

  // Affichage dans un console log du contenu des props sur ce composant.
  console.log( "films/index.js", props );

  return (
    <Fragment>
      <div 
        // J'utilise ici une concaténation d'une classe Bootstrap native avec
        // l'utilisation d'une classe searchBar__container
        className={ "container-fluid " + Styles.searchBar__container } 
      >
        <SearchBar 

          // Je passe la méthode qui permet la mise à jour de la liste des films
          updateMovies={ props.updateMovies }
        />
      </div>

      <div className="d-flex flex-row flex-fill pt-4">
        { 
          // Si il existe un contenu alors je charge ce contenu
          // Sinon, je charge le composant loaded
          props.loaded ? (
            <Fragment>
              <MovieList
                
                // ici je passe la liste des films récupérer via les props de
                // <Films />
                movies={ props.movies }
                
                // ici je passe la méthode qui permet de mettre à jour un film
                // lors du clic sur celui-ci. Elle est créée dans le fichier
                // App.js
                updateSelectedMovie={ props.updateSelectedMovie }
              />

              <MovieDetails

                // Je passe un film via son emplacement dans l"array de movie
                // récupéré via les props de <Films />
                movie={ props.movies[ props.selectedMovie ] }
              />
            </Fragment>
          ) : (
            // J'initialise le chargement via ce composant
            <Loading />
          )
        }
      </div>
    </Fragment>
  )
}
