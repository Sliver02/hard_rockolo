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
            title: String,
            subtitle: String,
            height: Number,
        };
    }

    constructor() {
        super();
        this.video = '';
        this.img = '';
    }
   
    connectedCallback() {
        super.connectedCallback();
    }

    render() {
        return html`

            <style>
                .header {
                    height: ${this.height}px;
                }
            </style>

            <div class="header">

                ${this.video === '' ? 
                    html `
                        <img class="header__img" src="./assets/images/header/${this.img}.jpg"/>
                    `
                    : html `

                        <video class="header__vid" autoplay loop muted poster="./assets/images/header/${this.img}.jpg"> 
                            <source src="../assets/video/${this.video}.mp4" type="video/mp4">
                        </video> 
                    `}
                   
                

                <div class="header__text">
                    <h1 class="header__title">
                        ${this.title}
                    </h1>
                    <p class="header__subtitle">
                        ${this.subtitle}
                    </p>
                </div>
                
            </div>
        `;
    }

    firstUpdated() {
        // this.parallaxEffect();

    }

    // parallaxEffect() {
    //     const header = this.querySelector('.header');
        
    //     const image = header.querySelector('.header__image');
    //     const vid = header.querySelector('video');
    
    //     new simpleParallax(image, {
    //         scale: 1.2
    //     });
    
    //     new simpleParallax(vid, {
    //         scale: 1.2
    //     });

    //     console.log('parallax');
    // }

    

}

customElements.define('page-header', PageHeader);