import { LitElement, html, css } from 'lit-element/';

import style from "../assets/styles/main.scss";

class NotFoundView extends LitElement {

  static get styles() {
		return css([style]);
  }
  
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