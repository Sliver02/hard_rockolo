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
        };
    }
    
    constructor() {
        super();
    }

    handleClick() {
        this.changeOverlay();
    }
          
    render() {
        return html`
            <div class="overlay__close" @click="${this.handleClick}">
                <i class="fas fa-times-circle"></i>
            </div>
            <div class="overlay__container">
                <h1 class="overlay__title">
                    ${this.article.title}
                </h1>
                <div class="overlay__img-wrap">
                    <div class="overlay__img"> 
                        <img src="./assets/images/news/${this.article.img}.jpg"/>
                    </div>
                </div>
                <p class="overlay__desc">
                    ${this.article.desc}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    
                    Iusto, rerum, non similique vitae nobis libero nulla odio suscipit harum cupiditate aperiam ad distinctio doloremque facilis quaerat reprehenderit dolores ullam temporibus quos atque maiores sit architecto! Earum, dolorum aspernatur debitis quia dignissimos sit consectetur totam, cum nemo deserunt vitae atque velit quibusdam cupiditate quisquam, saepe soluta quis.

                </p>
            </div>
        `; 
    }

    firstUpdated() {

    }
}

const mapStateToProps = (state, ctx) => {
	return {
        article: selectors.getArticle(state),
	};
};

const mapDispatchToEvents = dispatch => {
	return {
        changeOverlay: () => dispatch(actions.changeOverlay())
	};
};

customElements.define('overlay-view',  connect(mapStateToProps, mapDispatchToEvents)(OverlayView));