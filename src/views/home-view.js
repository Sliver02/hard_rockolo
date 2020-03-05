import {BaseView} from './base-view.js';
import {html} from '@polymer/lit-element';

import './page-header-view';
import './section-view';
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

      <section-view  class="section section--light"
      title="News">
        <feed-view></feed-view>
      </section-view>
    `;
  }
}

customElements.define('home-view', HomeView);