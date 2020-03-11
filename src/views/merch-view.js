import {BaseView} from './base-view.js';
import {html} from '@polymer/lit-element';

import './page-header-view';

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
      <page-header-view 
        img="DSC_0035"
        height="300">
      </page-header-view>

    `;
  }
}

customElements.define('merch-view', MerchView);