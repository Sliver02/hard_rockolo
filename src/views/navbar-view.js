import { LitElement, html, css } from 'lit-element/';

import selectors from "../store/selectors";
import connect from "../store/connect";
import actions from "../store/actions";

import navbar from "../styles/components/navbar.scss";

class AboutView extends LitElement {

  static get styles() {
		return css([navbar]);
	}

  static get properties() {
    return {
      showMenu: {type: Boolean}
    };
  }

  constructor() {
      super();

  }

  updated(oldValue) {
    this.blockScroll();
  }

  handleClick() {
    this.toggleMenu();
  }
  
  render() {
    return html`
      
      
    <div class="navbar">
    
      <div class="navbar__logo">
        <a href="/">
          <img src="./assets/images/logo.png" alt="">
        </a>
      </div>

      <i class="burger-menu icon fa-book-navigation" @click="${this.handleClick}"></i>

      ${this.showMenu ? html`
        <div class="navbar__nav">
          <a class="navbar__btn" href="/" @click="${this.handleClick}">Home</a>
          <a class="navbar__btn" href="/about" @click="${this.handleClick}">About</a>
          <!-- <a class="navbar__btn" href="/merch">Merch</a> -->
          <a class="navbar__btn" href="/timeline" @click="${this.handleClick}">Timeline</a>
        </div>
      ` : html``}

    </div>
    `;
  }

  firstUpdated() {
    this.reduceNavbar();
  }

  blockScroll() {
    if (this.showMenu === true) {
      document.querySelector('html').style.overflowY = 'hidden';
    } else {
      document.querySelector('html').style.overflowY = 'auto';
    }
  }

  reduceNavbar() {
    window.onscroll = () => {
      scrollY = window.pageYOffset;
      const nav = this.shadowRoot.querySelector('.navbar');
      if(scrollY >= 200) {
        nav.classList.add('navbar--small');
      } else {
        nav.classList.remove('navbar--small');
      } 
    };
  }
  
}

const mapStateToProps = (state) => {
	return {
		showOverlay: selectors.getShowOverlay(state),
		showMenu: selectors.getShowMenu(state),
	};
};

const mapDispatchToEvents = dispatch => {
	return {
    toggleMenu: () => dispatch(actions.toggleMenu())
	};
};


export default () => customElements.define('navbar-view', connect(mapStateToProps, mapDispatchToEvents)(AboutView));