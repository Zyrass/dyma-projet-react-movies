import React, { Component } from "react";

export default class MovieElement extends Component {

  render() {
    return (
      <div className="w-50 border p-1">
        <div className="card">
          {/* 
            https://www.cinemagrenierasel.com/evenement/gladiator1.jpg
          */ }

          <img src="https://www.premiere.fr/sites/default/files/styles/scale_crop_1280x720/public/2018-09/g.jpg"alt="image d'un film" className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">Gladiator</h5>
            <p className="card-text">
            Gladiator revisite le genre du péplum, dont les derniers films majeurs avaient été réalisés dans les années 1960. Le film ne se fonde pas sur des événements réels mais reprend les noms et certains traits de personnalité de l'empereur Marc Aurèle et de ses enfants Commode et Lucilla.
            </p>
          </div>
        </div>
      </div>
    );
  }

}