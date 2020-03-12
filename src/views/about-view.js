import {BaseView} from './base-view.js';
import {html} from '@polymer/lit-element';

import './page-header-view';

class AboutView extends BaseView {

  static get properties() {
    return {

    };
  }

  constructor() {
      super();

  }
  
  render() {
    return html`

      <style>
        .section__container {
          display: flex;
          /* width: 60%; */
          position: relative;
        }
      </style>

      <page-header-view 
        img="DSC_0664"
        height="300">
      </page-header-view>

      
      <div class="section">
        <div class="section__container">
        <h1 class="about__title">About Us</h1>
        <div class="about__img-wrap">
          <div class="about__img">
            <img src="./assets/img/header/DSC_0003.jpg"/>
          </div>
        </div>

          <p class="about__desc">
          Hard Rockolo è un festival musicale che prende vita a Pieve di Cadore, in un luogo magico situato in mezzo alle Dolomiti Bellunesi, patrimonio dell'Unesco. 
          <br>
          <br>
          Il nostro obbiettivo è quello di portare della buona musica, vissuta nella maniera più autentica e genuina del festival, promuovendo gli artisti locali e regalando un'esperienza indeterminable a chi la ama.
          </p>
          

        <div class="about__img-wrap">
          <div class="about__img">
            <img src="./assets/img/header/cadore-212.jpg"/>
          </div>
        </div>
        <p class="about__desc">
          Hard Rockolo Festival, in collaborazione con la Pro Loco Tiziano, è realizzato interamente da giovani volontari, amanti della musica, e proprio per questo sa come regalarvi vere emozioni.
          <br>
          <br>
          Unitevi a noi nel riaccendere le notti tra le Dolomiti, godetevi il panorama mozzafiato sul Lago centro Cadore e preparatevi a scatenarvi davanti al nostro Palco!
        </p>
      </div>
      </div>

    `;
  }
}

customElements.define('about-view', AboutView);