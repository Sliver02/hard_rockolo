import { LitElement, html, css } from 'lit-element/';

import style from "../../styles/components/header.scss";

// import simpleParallax from 'simple-parallax-js';

class PageHeader extends LitElement {

    static get styles() {
		return css([style]);
	}

    static get properties() {
        return {
            video: String,
            img: String,
            banner: String,
            subtitle: String,
            height: Number,
            scrollDown: Boolean,
        };
    }

    constructor() {
        super();
        // this.video = '';
        // this.img = '';
    }
   
    connectedCallback() {
        super.connectedCallback();
    }

    handleClick() {
        this.scrollDownNow();
    }

    render() {
        return html`

            <style>
                .header {
                    height: ${this.height}vh;
                }
            </style>

            <div class="header">

                ${this.video === '' || this.video === undefined ? 
                    html `
                        <img class="header__img" src="./assets/images/header/${this.img}.jpg"/>
                    `
                    : html `
                        <video class="header__vid" autoplay loop muted poster="./assets/images/header/${this.img}.jpg"> 
                            <source src="../assets/video/${this.video}.mp4" type="video/mp4">
                        </video> 
                    `}

                <div class="header__content">
                    <h1 class="header__title">
                        ${this.banner}
                    </h1>
                    <p class="header__subtitle">
                        ${this.subtitle}
                    </p>
                </div>
                

                ${this.scrollDown != undefined ?
                    html`
                        <i class="scroll-down icon fa-chevron-down" @click="${this.handleClick}"></i>
                    `
                    : html``            
                }
               
            </div>
        `;
    }

    firstUpdated() {


    }

    scrollDownNow() {
        // document.querySelector('html').scrollTop = 100;
        var window = document.querySelector('html');
        var news = window.querySelector('home-view').shadowRoot.querySelector('#news');

        news.scrollIntoView();
    }

}

customElements.define('page-header', PageHeader);