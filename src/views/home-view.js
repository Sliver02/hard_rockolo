import {BaseView} from './base-view.js';
import {html} from '@polymer/lit-element';

import './page-header-view';

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
        video="../assets/vid/background"
        img="https://images.squarespace-cdn.com/content/v1/5c7eb8717980b32cf9247bd9/1554808046592-HN0YK4YZG0XWXDWSFLEX/ke17ZwdGBToddI8pDm48kCDnvzZDSTqrZYB0qToMReZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0psyQQR5KrxgIm8QcotvsYtvUHnJsni5ivcu2RP0UO8zWN1uCXtq4fHLhtl5lYmmpQ/DSC_0930.jpg?format=1000w"
        title="Hard Rockolo"
        subtitle="La musica che ami nel cuore delle Dolomiti">
      </page-header-view>
    `;
  }
}

customElements.define('home-view', HomeView);