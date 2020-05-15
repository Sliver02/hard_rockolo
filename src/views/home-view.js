import { LitElement, html, css } from 'lit-element/';

import selectors from "../store/selectors";
import connect from "../store/connect";
import actions from "../store/actions";

// import main from "../styles/main.scss";
import style from "../styles/components/home.scss";

import './components/page-header';
import './sections/news-section';
  import './components/news-card';
import './sections/lineup-section';
import './sections/merch-section';
  import './components/merch-slider';
import './sections/map-section';
import './sections/contact-section';
import './overaly-view';

class HomeView extends LitElement {

  static get styles() {
		return css([style]);
	}

  static get properties() {
    return {
      showOverlay: {type: Boolean}
    };
  }

  constructor() {
      super();
      // this.showOverlay = true;
  }
  
  render() {
    return html`

      ${this.showOverlay ? html`<overlay-view></overlay-view>` : html``}
    
      <page-header 
        video="background"
        img="DSC_0840"
        title="Hard Rockolo"
        subtitle="La musica che ami nel cuore delle Dolomiti"
        height="100">
      </page-header>

      <div id="news" class="section" >
        <div class="section__container">
          <h1 class="section__title">News</h1>
          <news-section></news-section>
        </div>
      </div>

      <div id="lineup" class="section section--dark">
        <div class="section__container">
          <lineup-section></lineup-section>
        </div>
      </div>

      <div id="merch" class="section">
        <div class="section__container">
          <merch-section></merch-section>
        </div>
      </div>
      
      <div id="maps" class="section section--dark">
        <div class="section__container">
          <h1 class="section__title">Find Us</h1>
          <map-section></map-section>
        </div>
      </div>

      <!-- <div id="sponsor" class="section">
        <div class="section__container">
          <h1 class="section__title">Sponsor</h1>
          <sponsor-section></sponsor-section>
        </div>
      </div> -->

      <div id="maps" class="section">
        <div class="section__container">
          <h1 class="section__title">Contact us</h1>
          <contact-section></contact-section>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    window.scrollTo(0, 0);
		// this.initApp();

    console.log(this.showOverlay);
  }

  blockScroll(newValue) {
    // console.log(newValue);
    if (this.showOverlay === true) {
        document.querySelector('html').style.overflowY = 'hidden';
    } else {
        document.querySelector('html').style.overflowY = 'auto';
    }
  }
}

const mapStateToProps = (state) => {
	return {
		showOverlay: selectors.getShowOverlay(state)
	};
};

const mapDispatchToEvents = dispatch => {
	return {

	};
};

customElements.define('home-view', connect(mapStateToProps, mapDispatchToEvents)(HomeView));