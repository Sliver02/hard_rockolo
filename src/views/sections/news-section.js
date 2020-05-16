import { LitElement, html, css } from 'lit-element/';

import selectors from "../../store/selectors";
import connect from "../../store/connect";
import actions from "../../store/actions";

import '../components/news-card';
import style from "../../styles/components/news.scss";

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
        this.toggleOverlay('articleID');
    }
          
    render() {
        return html`
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
}

const mapStateToProps = (state, ctx) => {
	return {
		news: selectors.getNews(state)
	};
};

const mapDispatchToEvents = dispatch => {
	return {
		toggleOverlay: () => dispatch(actions.toggleOverlay()),
	};
};

customElements.define('news-section', connect(mapStateToProps, mapDispatchToEvents)(NewsSection));