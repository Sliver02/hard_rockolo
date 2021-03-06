import { LitElement, html, css } from 'lit-element/';

import style from "../../styles/components/newsCard.scss";

class NewsCard extends LitElement {

    static get styles() {
		return css([style]);
	}

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
            <div class="news-card">
                ${ this.img === '' ? html`` : html`
                    <div class="news-card__img-wrap">
                        <div class="news-card__img">
                            <img src="./assets/images/news/${this.img}.jpg"/>
                        </div>
                    </div>
                `} 

                <h2 class="news-card__title">
                    ${this.title}
                </h2>

            </div>

            <div class="news-card__desc">
                ${this.desc}
            </div>
        `;
    }
}

customElements.define('news-card', NewsCard);