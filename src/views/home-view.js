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
      
  }

  updated(oldValue) {
  }
  
  render() {
    return html`

      ${this.showOverlay ? html`<overlay-view></overlay-view>` : html``}
    
      <page-header 
        video="background"
        img="DSC_0840"
        banner="Hard Rockolo"
        subtitle="La musica che ami nel cuore delle Dolomiti"
        height="100"
        scrollDown="true">
      </page-header>

      <div id="news" class="section" >
        <h1 class="section__title">News</h1>
        <div class="section__content">
          <news-section></news-section>
        </div>
      </div>

      <div id="lineup" class="section section--dark">
        <div class="section__content">
          <lineup-section></lineup-section>
        </div>
      </div>

      <div id="merch" class="section">
        <h1 class="section__title">MERCH</h1>
        <div class="section__content section--no-padding">
          <merch-section></merch-section>
        </div>
      </div>
      
      <div id="maps" class="section section--dark">
        <h1 class="section__title">Find Us</h1>
        <div class="section__content section--no-padding">
          <map-section></map-section>
        </div>
      </div>

      <!-- <div id="sponsor" class="section">
        <div class="section__content">
          <h1 class="section__title">Sponsor</h1>
          <sponsor-section></sponsor-section>
        </div>
      </div> -->

      <div id="maps" class="section">
        <h1 class="section__title">Contact us</h1>
        <div class="section__content ">
          <contact-section></contact-section>
        </div>
      </div>
    `;
  }

  firstUpdated() {
    var window = document.querySelector('html');
    window.scrollTop = 0;
  }

  onAfterEnter(location) {
    var window = document.querySelector('html');
    window.scrollTop = 0;
  }
}

const mapStateToProps = (state) => {
	return {
		showOverlay: selectors.getShowOverlay(state),
	};
};

const mapDispatchToEvents = dispatch => {
	return {

	};
};

customElements.define('home-view', connect(mapStateToProps, mapDispatchToEvents)(HomeView));