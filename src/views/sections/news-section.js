import { LitElement, html, css } from 'lit-element/';

import selectors from "../../store/selectors";
import connect from "../../store/connect";
import actions from "../../store/actions";

import '../components/news-card';
import style from "../../styles/main.scss";

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
          
    render() {
        return html`
            <div class="section__news">
                ${this.news.map(article => html `
                    <news-card img="${article.img}" title="${article.title}" desc="${article.desc}">
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

// const mapDispatchToEvents = dispatch => {
// 	return {
// 		initApp: () => dispatch(actions.initApp())
// 	};
// };

customElements.define('news-section', connect(mapStateToProps)(NewsSection));