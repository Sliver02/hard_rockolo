import { LitElement, html, css } from 'lit-element/';

import selectors from "../store/selectors";
import connect from "../store/connect";
import actions from "../store/actions";

import './components/page-header';
import style from "../styles/components/timeline.scss";

class TimelineView extends LitElement {

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

      <page-header 
        img="DSC_0501"
        height="30">
      </page-header>

      <div class="section">
        <h1 class="section__title">Hard Rockolo Timeline</h1>
        <div class="timeline">
            <ul>
              ${this.editions.map( edition => html`
                <li>
                    <div class="timeline__year">
                        <h1>${edition.year}</h1>
                    </div>
                    <div class="timeline__poster">
                        <img src="./assets/images/poster/poster_${edition.year}.jpg"/>
                    </div>
                </li>
              `)}
            </ul>
        </div>
      </div>

    `;
  }

  firstUpdated() {
    
  }
}

const mapStateToProps = (state, ctx) => {
	return {
		editions: selectors.getEditions(state),
	};
};

// const mapDispatchToEvents = dispatch => {
// 	return {
// 		initApp: () => dispatch(actions.initApp())
// 	};
// };

customElements.define('timeline-view', connect(mapStateToProps)(TimelineView));