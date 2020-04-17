import { LitElement, html, css } from 'lit-element/';

import selectors from "../../store/selectors";
import connect from "../../store/connect";
import actions from "../../store/actions";

import '../components/news-card';
import style from "../../assets/styles/main.scss";

class NewsSection extends LitElement {

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

    handleClick(articleID) {
        this.changeOverlay();
    }
          
    render() {
        return html`
            <div class="section__news">
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
}

const mapStateToProps = (state, ctx) => {
	return {
		news: selectors.getNews(state)
	};
};

const mapDispatchToEvents = dispatch => {
	return {
		changeOverlay: () => dispatch(actions.changeOverlay()),
	};
};

customElements.define('news-section', connect(mapStateToProps, mapDispatchToEvents)(NewsSection));