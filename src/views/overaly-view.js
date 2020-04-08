import { LitElement, html, css } from 'lit-element/';

import selectors from "../store/selectors";
import connect from "../store/connect";
import actions from "../store/actions";

import style from "../styles/components/overlay.scss";

class OverlayView extends LitElement {

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

        `; 
    }

    firstUpdated() {

    }
}

const mapStateToProps = (state, ctx) => {
	return {
		lineup: selectors.getLineup(state, ctx.year)
	};
};

const mapDispatchToEvents = dispatch => {
	return {
		initApp: () => dispatch(actions.initApp())
	};
};

customElements.define('overlay-view',  connect(mapStateToProps, mapDispatchToEvents)(OverlayView));