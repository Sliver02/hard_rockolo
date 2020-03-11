import {BaseView} from './base-view.js';
import {html, css} from '@polymer/lit-element';

class NewsView extends BaseView {

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
        this.img = '';
        this.desc = '';
        this.tags = [];
    }
          
    render() {
        return html`
            
            <div class="news">
                ${ this.img === '' ? html`` : html`
                    <div class="news__img-wrap">
                        <div class="news__img">
                            <img src="./assets/img/news/${this.img}.jpg"/>
                        </div>
                    </div>
                `} 

                <h2 class="news__title">
                    ${this.title}
                </h2>

            </div>

            <div class="news__desc">
                ${this.desc}
            </div>
        `;
    }
}

customElements.define('news-view', NewsView);