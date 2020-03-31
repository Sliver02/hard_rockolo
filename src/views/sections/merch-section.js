import {BaseView} from '../base-view.js';
import {html} from '@polymer/lit-element';

import '../components/merch-slider';

class MerchSection extends BaseView {

    static get properties() {
        return {
        };
      }
    
    constructor() {
        super();

    }
          
    render() {
        return html`
            <div class="section__merch">
                <merch-slider></merch-slider>
                <div class="section__text"> 
                    <h1 class="section__title">MERCH</h1>

                    Merchandise originale marchiato <strong>Hard Rockolo!</strong> <br> Poster, magliette e gadget con design creativi e ricercati. <br>
                    La selezione viene aggiornata ad ogni edizione catturandone lo spirito, per regalarvi <strong>un ricordo del festival piú potente delle Dolomiti!</strong> <br>
                    É possibile acquistarlo alle casse durante l'evento o prenotarlo contattandoci sui nostri social. <br> <br>
                    <a href="https://www.facebook.com/HardRockolo/">facebook</a> | <a href="https://www.instagram.com/hardrockolo/">instagram</a>
                </div>
            </div>
        `; 
    }
}

customElements.define('merch-section', MerchSection);