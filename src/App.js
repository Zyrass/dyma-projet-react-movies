import React, { Component } from 'react';

import { Header, MovieList, MovieDetails } from './components';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          title: 'Gladiator',
          affiche: 'https://www.cinemagrenierasel.com/evenement/gladiator1.jpg',
          image: 'https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-09/g.jpg',
          duree: '175 min',
          description: "Gladiator revisite le genre du péplum, dont les derniers films majeurs avaient été réalisés dans les années 1960. Le film ne se fonde pas sur des événements réels mais reprend les noms et certains traits de personnalité de l'empereur Marc Aurèle et de ses enfants Commode et Lucilla."
        },
        {
          title: "Des hommes d'honneur",
          affiche: 'https://media.senscritique.com/media/000015960563/source_big/Des_hommes_d_honneur.jpg',
          image: 'https://images.justwatch.com/backdrop/8727859/s1440/des-hommes-dhonneur.jpg',
          duree: '138 min',
          description: "Deux enquêteurs sont envoyés sur une base de l'US Marine Corps à Guantánamo pour un meurtre. Ils se trouvent face à un mur de silence ou d'obéissance, relatif à une sorte de bizutage qui a mal tourné. Tout le monde couvre tout le monde, dans l'honneur, mais pas dans le respect de la justice…"
        },
        {
          title: "Full Metal Jacket",
          affiche: 'https://fr.web.img5.acsta.net/medias/nmedia/18/65/57/12/19254508.jpg',
          image: 'https://static.lexpress.fr/medias_1255/w_480,h_270,c_fill,g_north/v1381929961/full-metal-jacket-1_643028.jpg',
          duree: '116 min',
          description: "La guerre du Vietnam vu à travers les yeux du Marine américain J.T. Davis, de son entraînement jusqu'aux affrontements contre le Vietcong."
        },
        {
          title: "La Ligne verte",
          affiche: 'https://media.senscritique.com/media/000009568130/source_big/La_Ligne_verte.jpg',
          image: 'https://ondemand.nostalgie.be/Images/Nostalgie/Full/54822.jpg',
          duree: '189 min',
          description: "Paul est gardien de prison pour condamnés à mort. L'arrivée de John Coffey, qui a un incroyable don, lui donne des doutes sur sa culpabilité."
        },
        {
          title: "Il faut sauver le soldat Ryan",
          affiche: 'https://studiocapitale-enseignement.com/wp-content/uploads/2018/09/Analyse-du-film-sauver-le-soldat-ryan-707x1024.jpg',
          image: 'https://i.f1g.fr/media/eidos/orig/2019/06/06/XVM05e90ffc-c904-11e5-b7be-713f5c23fd93.jpg',
          duree: '169 min',
          description: "Nous sommes en Normandie le 6 juin 1944. Le débarquement est en cours et les troupes américaines font face à la redoutable 352ème division allemande."
        },
        {
          title: "Le Cinquième Élément",
          affiche: 'https://images-na.ssl-images-amazon.com/images/I/91hce0c6wsL._AC_SY606_.jpg',
          image: 'https://i.f1g.fr/media/figaro/orig/2017/04/11/XVMd9bd96de-1e82-11e7-b270-36daf8b68907.jpg',
          duree: '126 min',
          description: "23ème siècle. Le Mal à l'intention de détruire la Terre et seul l'être suprême peut le repousser. Korben, ancien agent secret, doit sauver l'humanité."
        },
        {
          title: "Interstellar",
          affiche: 'https://images-na.ssl-images-amazon.com/images/I/918jo-FzhtL._AC_SY741_.jpg',
          image: 'https://hd-report.com/wp-content/uploads/2015/03/interstellar-promo-graphic.jpg',
          duree: '189 min',
          description: "Un groupe d'explorateurs exploite une faille dans l'espace-temps afin de parcourir des distances incroyables dans le but de sauver l'humanité."
        }
      ],
      selectedMovie: 0
    }
  }

  updateSelectedMovie = ( title ) => {

    /**
     * La méthode findIndex prends un callback en paramètre.
     * Le paramètre va correspondre à chacun des éléments de l'array movies
     * 
     */
    const index = this.state.movies.findIndex( ( iteratorMovie ) => {
      return title === iteratorMovie.title;
    });
    this.setState({
      selectedMovie: index
    });
  }

  render() {
    return (
      <div className="App d-flex flex-column">
          <Header />
        
        { /* flex-fill permet de prendre toute la hauteur restante */ }
        <div className="d-flex flex-row flex-fill pt-4">
          
          <MovieList 
            movies={ this.state.movies }
            updateSelectedMovie={ this.updateSelectedMovie }
          />
          
          <MovieDetails
            movie={ this.state.movies[ this.state.selectedMovie ] }
          />
        </div>
      </div>
    );
  }
}

export default App;
