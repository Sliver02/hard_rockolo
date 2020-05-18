import { LitElement, html, css } from 'lit-element/';

import './components/page-header';
import style from "../styles/components/about.scss";

class AboutView extends LitElement {

  static get styles() {
		return css([style]);
	}

  static get properties() {
    return {

    };
  }

  constructor() {
      super();

  }
  
  render() {
    return html`

      <page-header 
        img="DSC_0664"
        height="30">
      </page-header>

      
      <div class="section">
        <div class="section__container">
          <h1 class="section__title">About Us</h1>
          
          <div class="about">
            <div class="about__img-wrap">
              <div class="about__img">
                <img src="./assets/images/header/DSC_0003.jpg"/>
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
                <img src="./assets/images/header/cadore-212.jpg"/>
              </div>
            </div>
            <p class="about__desc">
              Hard Rockolo Festival, in collaborazione con la Pro Loco Tiziano, è realizzato interamente da giovani volontari, amanti della musica, e proprio per questo sa come regalarvi vere emozioni.
              <br>
              <br>
              Unitevi a noi nel riaccendere le notti tra le Dolomiti, godetevi il panorama mozzafiato sul Lago centro Cadore e preparatevi a scatenarvi davanti al nostro Palco!
            </p>

          </div>

          <iframe height="300" src="https://www.youtube.com/embed/_ZayLGaoXFY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
      </div>

    `;
  }

  firstUpdated() {
    var window = document.querySelector('html');
    window.scrollTop = 0;
  }
}

customElements.define('about-view', AboutView);