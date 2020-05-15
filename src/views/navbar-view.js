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

  handleClick() {
    this.toggleMenu();
  }
  
  render() {
    return html`
      <i class="burger-menu icon fa-book-navigation" @click="${this.handleClick}"></i>
      
      ${this.showMenu ? html`
        <nav class="navbar">

          <div class="navbar__logo">
            <a href="/">
            <img src="./assets/images/logo.png" alt="">
            </a>
          </div>

          <div class="navbar__nav">
            <a class="navbar__btn" href="/" @click="${this.handleClick}">Home</a>
            <a class="navbar__btn" href="/about" @click="${this.handleClick}">About</a>
            <!-- <a class="navbar__btn" href="/merch">Merch</a> -->
            <a class="navbar__btn" href="/timeline" @click="${this.handleClick}">Timeline</a>
          </div>
        </nav>
      ` : html``}
    `;
  }

  firstUpdated() {
    // window.onscroll = () => {
    //   // console.log(window.pageYOffset); 
    //   scrollY = window.pageYOffset;
    //   const nav = this.shadowRoot.querySelector('nav');
    //   if(scrollY <= 200) nav.className = 'navbar'; else nav.className = 'navbar--dark';
    // };
  }
  
}

const mapStateToProps = (state) => {
	return {
    showMenu: selectors.getShowMenu(state)
	};
};

const mapDispatchToEvents = dispatch => {
	return {
    toggleMenu: () => dispatch(actions.toggleMenu())
	};
};


export default () => customElements.define('navbar-view', connect(mapStateToProps, mapDispatchToEvents)(AboutView));