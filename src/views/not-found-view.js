import {BaseView} from './base-view.js';
import {html} from '@polymer/lit-element';

class NotFoundView extends BaseView {
  render() {
    return html`
      <style>
        .not-found {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          width: 100%;
          height: 100vh;
        }
      </style>

      <div class="not-found">
        <h1>404 Not Found!</h1>
        <p>
          Please check your URL.
        </p>
      </div>
    `;
  }
}

customElements.define('not-found-view', NotFoundView);