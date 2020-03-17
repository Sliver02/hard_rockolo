import {BaseView} from './base-view.js';
import {html} from '@polymer/lit-element';

import './sections/page-header';
import './sections/news-card';
import './sections/lineup-showcase';

class HomeView extends BaseView {

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
            <news-card 
              img="DSC_0020"
              title="Forte Montericco"
              desc="16 Agosto 2019 si terrà un aperitivo con gruppi e dj set nella magnifica cornice di Monte Ricco in cima al nostro splendido Parco Roccolo, non mancate!">
            </news-card>

            <news-card 
              img="DSC_0785"
              title="Socials"
              desc="Per restare sempre aggiornati su Hard Rockolo Festival seguiteci sui nostri social, News, aggiornamenti e tante altre sorprese!">
            </news-card>

            <news-card 
              img="DSC_0035"
              title="Merch 2019"
              desc="Merchindise originale marchiato Hard Rockolo Festival! Poster e magliette con design originali e giovanili.">
            </news-card>
            
            <news-card 
              img="furio"
              title="Line Up 2019"
              desc="Quest’anno vi aspetta una serata straordinaria, il nostro palco sarà solcato da artisti formidabili!">
            </news-card>

            
          </div>

        </div>
      </div>

      <div id="headline" class="section section--dark">
        <div class="section__container">
          <h1 class="section__title">Line Up</h1>
          
          <lineup-showcase>
            
          </lineup-showcase>
        </div>
      </div>

      <div id="merch" class="section">
        <div class="section__container">
          <h1 class="section__title">Merch</h1>
          
        </div>
      </div>
      
      <div id="maps" class="section section--dark">
        <div class="section__container">
          <h1 class="section__title">Find Us</h1>
          
        </div>
      </div>

      <div id="sponsor" class="section">
        <div class="section__container">
          <h1 class="section__title">Sponsor</h1>
          
        </div>
      </div>
    `;
  }
}

customElements.define('home-view', HomeView);