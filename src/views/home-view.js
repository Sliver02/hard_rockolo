import {BaseView} from './base-view.js';
import {html} from '@polymer/lit-element';

import './sections/page-header';
import './sections/news-card';
import './sections/lineup-showcase';
import './sections/merch-slider';
import './sections/custom-map';
import './sections/contact-form';

class HomeView extends BaseView {

  static get properties() {
    return {

    };
  }

  constructor() {
      super();
      this.news = [
        {
            img: 'DSC_0020',
            title: 'Forte Montericco',
            desc: '16 Agosto 2019 si terrà un aperitivo con gruppi e dj set nella magnifica cornice di Monte Ricco in cima al nostro splendido Parco Roccolo, non mancate!'
        },
        {
          img: 'DSC_0785',
          title: 'Socials',
          desc: 'Per restare sempre aggiornati su Hard Rockolo Festival seguiteci sui nostri social, News, aggiornamenti e tante altre sorprese!'
        },
        {
          img: 'DSC_0035',
          title: 'Merch 2019',
          desc: 'Merchindise originale marchiato Hard Rockolo Festival! Poster e magliette con design originali e giovanili.'
        },
        {
          img: 'furio',
          title: 'Line Up 2019',
          desc: 'Quest’anno vi aspetta una serata straordinaria, il nostro palco sarà solcato da artisti formidabili!'
        },
    ];
  }
  
  render() {
    return html`
      <page-header 
        video="background"
        img="DSC_0840"
        title="Hard Rockolo"
        subtitle="La musica che ami nel cuore delle Dolomiti"
        height="800">
      </page-header>

      <div id="news" class="section" >
        <div class="section__container">
          <h1 class="section__title">News</h1>

          <div class="section__grid">
            ${this.news.map(article => html `
              <news-card img="${article.img}" title="${article.title}" desc="${article.desc}">
              </news-card>   
            `)}
          </div>

        </div>
      </div>

      <div id="lineup" class="section section--dark">
        <div class="section__container">
          <h1 class="section__title">Line Up</h1>

          <lineup-showcase></lineup-showcase>
        </div>
      </div>

      <div id="merch" class="section">
        <div class="section__container">
          <h1 class="section__title">Merch</h1>
          <merch-slider></merch-slider>
        </div>
      </div>
      
      <div id="maps" class="section section--dark">
        <div class="section__container">
          <h1 class="section__title">Find Us</h1>
          
          <custom-map></custom-map>
        </div>
      </div>

      <div id="sponsor" class="section">
        <div class="section__container">
          <h1 class="section__title">Sponsor</h1>
          
        </div>
      </div>

      <div id="maps" class="section section--dark">
        <div class="section__container">
          <h1 class="section__title">Contact us</h1>
          
          <contact-form></contact-form>
        </div>
      </div>
    `;
  }
}

customElements.define('home-view', HomeView);