import { LitElement, html, css } from 'lit-element/';

import navbar from "../assets/styles/components/navbar.scss";

class AboutView extends LitElement {

  static get styles() {
		return css([navbar]);
	}

  static get properties() {
    return {

    };
  }

  constructor() {
      super();

  }
  
  render() {
    return html`
      <nav class="navbar">
          <div class="navbar__logo">
              <a href="/">
              <img src="./assets/img/logo.png" alt="">
              </a>
          </div>

          <div class="navbar__nav">
              <a class="navbar__btn" href="/">Home</a>
              <a class="navbar__btn" href="/about">About</a>
              <!-- <a class="navbar__btn" href="/merch">Merch</a> -->
              <a class="navbar__btn" href="/timeline">Timeline</a>
          </div>
  </nav>
    `;
  }

  firstUpdated() {
    window.scrollTo(0, 0);

    window.onscroll = () => {
      // console.log(window.pageYOffset); 
      scrollY = window.pageYOffset;
      const nav = this.shadowRoot.querySelector('nav');
      if(scrollY <= 200) nav.className = ''; else nav.className = 'navbar--dark';
    };
  }
  
}

export default () => customElements.define('navbar-view', AboutView);