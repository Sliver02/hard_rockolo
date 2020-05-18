import { LitElement, html, css } from 'lit-element/';

import selectors from "../store/selectors";
import connect from "../store/connect";
import actions from "../store/actions";

import './components/page-header';
import style from "../styles/components/timeline.scss";

import './overlay-view';

class TimelineView extends LitElement {

  static get styles() {
		return css([style]);
	}

  static get properties() {
    return {
      showOverlay: {type: Boolean},
      currentEditionID: {type: Number},
    };
  }

  constructor() {
    super();
    this.currentEditionID = 0;
  }

  updated(oldValue) {
    this.blockScroll();
  }

  handleClick(currentID) {
    this.toggleOverlay();
    this.currentEditionID = currentID;
  }
  
  render() {
    return html`

      ${this.showOverlay ? html`<overlay-view variant="edition" currentID="${this.currentEditionID}"></overlay-view>` : html``}

      <page-header 
        img="DSC_0501"
        height="30">
      </page-header>

      <div class="section">
        <div class="section__container">
          <h1 class="section__title">Hard Rockolo Timeline</h1>
          <div class="timeline">
              <ul>
                ${this.editions.map( (edition, index) => html`
                  <li>
                      <div class="timeline__year">
                          <h1>${edition.year}</h1>
                      </div>
                      <div class="timeline__poster" @click="${() => this.handleClick(index)}">
                          <img src="./assets/images/poster/poster_${edition.year}.jpg"/>
                      </div>
                  </li>
                `)}
              </ul>
          </div>
        </div>
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
    editions: selectors.getEditions(state),
    showOverlay: selectors.getShowOverlay(state),
	};
};

const mapDispatchToEvents = dispatch => {
	return {
    toggleOverlay: () => dispatch(actions.toggleOverlay()),
	};
};

customElements.define('timeline-view', connect(mapStateToProps,mapDispatchToEvents)(TimelineView));