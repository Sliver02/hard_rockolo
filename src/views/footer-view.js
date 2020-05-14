import { LitElement, html, css } from 'lit-element/';

import style from "../styles/components/footer.scss";

class AboutView extends LitElement {

  static get styles() {
		return css([style]);
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
        <div class="footer">
            <div class="footer__container">
                <div class="footer__info">
                <ul>
                    <li>Pieve di Cadore, 32044, BL</li>
                    <li>Localita' Parco Roccolo</li>
                    <li>hardrockolofestival@gmail.com</li>
                </ul>
                <div class="footer__social">
                    <div class="footer__social__title">Follow Us</div>
                    <div>
                    <a href="https://www.facebook.com/HardRockolo/" target="_blank"><i class="fab fa-facebook-square"></i></a>
                    <a href="https://www.instagram.com/hardrockolo/" target="_blank"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                </div>
                <hr>
                <span>Copyright© 2020 - Jacopo Panzera - <a href="https://jacpan-portfolio.netlify.com/">jac.pan</a></span>
            </div>
        </div>
    `;
  }

  firstUpdated() {
    window.scrollTo(0, 0);
  }
}

export default () => customElements.define('footer-view', AboutView);