import { LitElement, html, css } from 'lit-element/';

import '../components/merch-slider';

import style from "../../styles/components/merch.scss";

class MerchSection extends LitElement {

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
            <div class="merch-container">
                <merch-slider></merch-slider>
                <div class="merch-container__text"> 
                    <h1 class="section__title --display-tablet-up">Merch</h1>
                    Merchandise originale marchiato <strong>Hard Rockolo!</strong> <br><br> 
                    Poster, magliette e gadget con design creativi e ricercati. <br><br>
                    La selezione viene aggiornata ad ogni edizione catturandone lo spirito, per regalarvi <strong>un ricordo del festival piú potente delle Dolomiti!</strong> <br><br>
                    É possibile acquistarlo alle casse durante l'evento o prenotarlo contattandoci sui nostri social. <br><br>
                    <a href="https://www.facebook.com/HardRockolo/">facebook</a> | <a href="https://www.instagram.com/hardrockolo/">instagram</a>
                </div>
            </div>
        `; 
    }
}

customElements.define('merch-section', MerchSection);