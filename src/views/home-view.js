import {BaseView} from './base-view.js';
import {html} from '@polymer/lit-element';

import './page-header-view';
import './feed-view';

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
        img="DSC_0930"
        title="Hard Rockolo"
        subtitle="La musica che ami nel cuore delle Dolomiti"
        height="800">
      </page-header-view>

      <div id="insta" class="section section--light" >
        <div class="section__container">
          <h1 class="section__title">Insta Feed</h1>

          <div class="section__grid">
            <feed-view 
              img="asd"
              title="Know your Drugs"
              desc="I drug myself">
            </feed-view>
            <feed-view 
              img="asd"
              title="Know your Drugs"
              desc="I drug myself">
            </feed-view>
          </div>

        </div>
      </div>

      <div id="headline" class="section">
        <div class="section__container">
          <h1 class="section__title">Headline</h1>
          
        </div>
      </div>

      <div id="merch" class="section section--light">
        <div class="section__container">
          <h1 class="section__title">Merch</h1>
          
        </div>
      </div>
      
      <div id="maps" class="section">
        <div class="section__container">
          <h1 class="section__title">Find Us</h1>
          
        </div>
      </div>

      <div id="sponsor" class="section section--light">
        <div class="section__container">
          <h1 class="section__title">Sponsor</h1>
          
        </div>
      </div>
    `;
  }
}

customElements.define('home-view', HomeView);