import { LitElement, html, css } from 'lit-element/';

import selectors from "../../store/selectors";
import connect from "../../store/connect";
import actions from "../../store/actions";

import '../components/news-card';
import style from "../../styles/components/news.scss";

import '../overlay-view';

class NewsSection extends LitElement {

  static get styles() {
		return css([style]);
	}

    static get properties() {
        return {
            showOverlay: {type: Boolean},
            currentArticleID: {type: Number},
        };
      }
    
    constructor() {
        super();
        this.currentArticleID = 0;
    }

    updated(oldValue) {
        this.blockScroll();
    }

    handleClick(articleID) {
        this.toggleOverlay();
        this.currentArticleID = articleID;
    }
          
    render() {
        return html`
            ${this.showOverlay ? html`<overlay-view variant="article" currentID="${this.currentArticleID}"></overlay-view>` : html``}

            <div class="news-container">
                ${this.news.map((article, index) => html `
                    <news-card 
                        img="${article.img}" 
                        title="${article.title}" 
                        desc="${article.desc}" 
                        @click="${() => this.handleClick(index)}">
                    </news-card>   
                `)}
            </div>
        `; 
    }

    blockScroll() {
        if (this.showOverlay === true) {
          document.querySelector('html').style.overflowY = 'hidden';
        } else {
          document.querySelector('html').style.overflowY = 'auto';
        }
      }
}

const mapStateToProps = (state, ctx) => {
	return {
        news: selectors.getNews(state),
		showOverlay: selectors.getShowOverlay(state),
	};
};

const mapDispatchToEvents = dispatch => {
	return {
        toggleOverlay: () => dispatch(actions.toggleOverlay()),
	};
};

customElements.define('news-section', connect(mapStateToProps, mapDispatchToEvents)(NewsSection));