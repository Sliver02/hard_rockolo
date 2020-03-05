import {BaseView} from './base-view.js';
import {html} from '@polymer/lit-element';

// import simpleParallax from 'simple-parallax-js';

class PageHeaderView extends BaseView {

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
    }
   
    connectedCallback() {
        super.connectedCallback();

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
                    height: ${this.height}px;

                    overflow: hidden;
                    text-align: center;
                }

                    .header__video, .header__image {

                        position: absolute;

                        min-width: 100%;
                        min-height: 100%;

                        opacity: 0.6;
                        top: 0;
                    }

                    .header__text {
                        z-index: 2;
                        position: absolute;
                        top: 45%;
                    }
                        .header__title {
                            font-family: 'Montserrat', sans-serif;
                            font-size: 6rem;
                            font-weight: 700;
                            
                            text-transform: uppercase;
                            
                            line-height: 0.8;
                            letter-spacing: -0.5rem;
                        }

                        .header__subtitle {
                            margin-top: 10px;
                            line-height: 2;
                            font-size: 1.2rem;
                            letter-spacing: 0.2rem;
                        }
            </style>

            <div class="header">

                <video class="header__video" autoplay loop muted poster="${this.img}.jpg"> 
                    <source src="../assets/vid/${this.video}.mp4" type="video/mp4">
                </video>    
                
                <!-- <img class="header__image" src="./assets/img/DSC_0930.jpg"/> -->

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

customElements.define('page-header-view', PageHeaderView);