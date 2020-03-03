import {BaseView} from './base-view.js';
import {html} from '@polymer/lit-element';

class NotFoundView extends BaseView {
  render() {
    return html`
      <h1>404 Not Found!</h1>
      <p>
        Please check your URL.
      </p>
    `;
  }
}

customElements.define('not-found-view', NotFoundView);