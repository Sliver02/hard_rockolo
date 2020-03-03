import {BaseView} from './base-view.js';
import {html} from '@polymer/lit-element';

class PageHeaderView extends BaseView {

    static get properties() {
        return {
            video: String,
            img: String,
            title: String,
            subtitle: String,
        };
    }

    constructor() {
        super();
    }

    render() {
        return html`

            <style>
                .header {
                    display: flex;
                    justify-content: center;
                    flex-direction:column;
                    align-items: center;
                    position: relative;

                    width: 100%;
                    height: 700px;

                    overflow: hidden;
                    background: black;
                }

                    .header__video {

                        position: absolute;

                        min-width: 100%;
                        min-height: 100%;

                        opacity: 0.6;
                    }

                    .header__title, .header__subtitle {
                        z-index: 2;
                    }

                    .header__title {
                        font-family: 'Montserrat', sans-serif;
                        font-size: 6rem;
                        font-weight: 700;
                        
                        text-transform: uppercase;
                        text-align: center;
                        
                        line-height: 1;
                        letter-spacing: -0.5rem;
                    }

                    .header__subtitle {
                        font-size: 1.2rem;
                        letter-spacing: 0.2rem;
                    }
            </style>

            <div class="header">

                <video class="header__video" autoplay loop muted poster="${this.img}"> 
                    <source src="${this.video}.mp4" type="video/mp4">
                </video>    

                <h1 class="header__title">
                    ${this.title}
                </h1>
                <p class="header__subtitle">
                    ${this.subtitle}
                </p>
                
            </div>
        `;
    }
}

customElements.define('page-header-view', PageHeaderView);