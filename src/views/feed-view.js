import {BaseView} from './base-view.js';
import {html, css} from '@polymer/lit-element';

class FeedView extends BaseView {

    static get properties() {
        return {
            img: String,
            title: String,
            desc: String,
            tags: Array,
        };
      }
    
    constructor() {
        super();
        this.desc = '';
        this.tags = [];
    }
          
    render() {
        return html`
        ${ this.img ? 
            html` 
                <style>
                    feed-view {
                        background: url('../assets/img/instagram/${this.img}.jpg') no-repeat center center/cover;
                    }
                </style>
            ` : 
            html `
                <style>
                    feed-view {
                        background: #333;
                    }
                </style>
            `
        } 

            <h2 class="feed__title">
                ${this.title}
            </h2>

            <div class="feed__text">
                <div class="feed__desc">
                    ${this.desc}
                </div>

                <div class="feed__tag-container">
                    ${this.tags.map(tag => html`
                        <a class="feed__tag">
                            #${tag}
                        </a>
                    `)}
                </div>
            </div>
        `;
    }
}

customElements.define('feed-view', FeedView);