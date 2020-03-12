import {BaseView} from './base-view.js';
import {html} from '@polymer/lit-element';

import './page-header-view';
import './news-view';
import './news-view';

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
      <page-header-view 
        video="background"
        img="DSC_0840"
        title="Hard Rockolo"
        subtitle="La musica che ami nel cuore delle Dolomiti"
        height="800">
      </page-header-view>

      <div id="news" class="section" >
        <div class="section__container">
          <h1 class="section__title">News</h1>

          <div class="section__grid">
            <news-view 
              img="DSC_0020"
              title="Forte Montericco"
              desc="16 Agosto 2019 si terrà un aperitivo con gruppi e dj set nella magnifica cornice di Monte Ricco in cima al nostro splendido Parco Roccolo, non mancate!">
            </news-view>

            <news-view 
              img="DSC_0785"
              title="Socials"
              desc="Per restare sempre aggiornati su Hard Rockolo Festival seguiteci sui nostri social, News, aggiornamenti e tante altre sorprese!">
            </news-view>

            <news-view 
              img="DSC_0035"
              title="Merch 2019"
              desc="Merchindise originale marchiato Hard Rockolo Festival! Poster e magliette con design originali e giovanili.">
            </news-view>
            
            <news-view 
              img="furio"
              title="Line Up 2019"
              desc="Quest’anno vi aspetta una serata straordinaria, il nostro palco sarà solcato da artisti formidabili!">
            </news-view>

            
          </div>

        </div>
      </div>

      <div id="headline" class="section section--dark">
        <div class="section__container">
          <h1 class="section__title">Line Up</h1>
          
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