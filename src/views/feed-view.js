import {BaseView} from './base-view.js';
import {html} from '@polymer/lit-element';

class FeedView extends BaseView {

    static get properties() {
        return {
    
        };
      }
    
    constructor() {
        super();

    }

    render() {
        return html`
            
        `;
    }
}

customElements.define('feed-view', FeedView);