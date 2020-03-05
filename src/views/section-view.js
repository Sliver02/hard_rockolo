import {BaseView} from './base-view.js';
import {html} from '@polymer/lit-element';

class SectionView extends BaseView {

    static get properties() {
        return {
    
        };
      }
    
    constructor() {
        super();

    }

    render() {
        return html`
            <div class="section__container">
                <div class="section__title">
                    ${this.title}
                </div>
                <main></main>
            </div>
        `;
    }
}

customElements.define('section-view', SectionView);