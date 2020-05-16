import { LitElement, html, css } from 'lit-element/';

import selectors from "../store/selectors";
import connect from "../store/connect";
import actions from "../store/actions";

import style from "../styles/components/overlay.scss";

class OverlayView extends LitElement {

    static get styles() {
        return css([style]);
	}

    static get properties() {
        return {
            variant: {type: String},
            currentID: {type: Number},
        };
    }
    
    constructor() {
        super();
        this.currentID = 0;
    }

    handleClick() {
        this.toggleOverlay();
    }
          
    render() {
        return html`
            <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/icon?family=Material+Icons">

            <div class="overlay__close" @click="${this.handleClick}">
                <i class="icon fa-times-circle"></i>
            </div>
            
            <div class="overlay__container">
                <h1 class="overlay__title">
                    ${this.title()}
                    ${this.variant === 'edition' ?
                        html`
                            <br>
                            <!-- <h2 class='overlay__subtitle'> -->
                                August ${this.edition.days.toString().replace(',','-')}
                            <!-- </h2> -->
                        `
                        : html``
                    }
                </h1>

                
                <div class="overlay__img-wrap">
                    <div class="overlay__img"> 
                        ${this.cover()}
                    </div>
                </div>

                <div class="overlay__content">
                    ${this.description() == '' || this.description() === undefined ?
                        html`
                            <p class="overlay__desc">
                                ${this.description()}
                            </p>
                        `
                        : html``
                    }

                    ${this.variant === 'edition' ?
                        html`
                            <div class="overlay__lineup">
                                <h2>Line Up</h2>
                                <ul>
                                    ${this.edition.lineup.map(band => {
                                        return html`
                                            <li>${band.name}</li>
                                        `;
                                    })}
                                </ul>
                            </div>
                        `
                        : html``
                    }
                </div>
            </div>
        `; 
    }

    firstUpdated() {

    }

    title() {
        switch (this.variant) {
            case 'article': {
                return this.article.title;
            }
            case 'edition': {
                return 'Year ' + this.edition.year;
            }
        }
    }

    cover() {
        switch (this.variant) {
            case 'article': {
                return html`<img src="./assets/images/news/${this.article.img}.jpg"/>`;
            }
            case 'edition': {
                return html`<img src="./assets/images/poster/poster_${this.edition.year}.jpg"/>`;
            }
        }
    }

    description() {
        switch (this.variant) {
            case 'article': {
                return this.article.desc;
            }
            case 'edition': {
                return this.edition.desc;
            }
        }
    }
}

const mapStateToProps = (state, ctx) => {
    return {
        article: selectors.getArticle(state, ctx.currentID),
        edition: selectors.getEdition(state, ctx.currentID),
    };
};

const mapDispatchToEvents = dispatch => {
	return {
        toggleOverlay: () => dispatch(actions.toggleOverlay())
	};
};

customElements.define('overlay-view',  connect(mapStateToProps, mapDispatchToEvents)(OverlayView));