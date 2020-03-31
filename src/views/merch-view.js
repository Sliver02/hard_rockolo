import {BaseView} from './base-view.js';
import {html} from '@polymer/lit-element';

import './sections/page-header';
import './sections/merch-slider';

class MerchView extends BaseView {

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
        img="DSC_0035"
        height="300">
      </page-header>

      <merch-slider></merch-slider>
    `;
  }
}

customElements.define('merch-view', MerchView);