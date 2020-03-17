import {BaseView} from './base-view.js';
import {html} from '@polymer/lit-element';

import './sections/page-header';

class TimelineView extends BaseView {

  static get properties() {
    return {

    };
  }

  constructor() {
      super();

  }
  
  render() {
    return html`

      <style>
        .section__container {
          display: flex;
          position: relative;
        }
      </style>

      <page-header 
        img="DSC_0501"
        height="300">
      </page-header>

      <div class="section">
        <div class="timeline">
            <ul>
                <li>
                    <div class="timeline__year">
                        <h1>2019</h1>
                    </div>
                    <div class="timeline__poster">
                        <img src="./assets/img/poster/2019.jpg"/>
                    </div>
                </li>
                <li>
                    <div class="timeline__year">
                        <h1>2018</h1>
                    </div>
                    <div class="timeline__poster">
                        <img src="./assets/img/poster/2018.jpg"/>
                    </div>
                </li>
                <li>
                    <div class="timeline__year">
                        <h1>2017</h1>
                    </div>
                    <div class="timeline__poster">
                        <img src="./assets/img/poster/2017.jpg"/>
                    </div>
                </li>
                <li>
                    <div class="timeline__year">
                        <h1>2015</h1>
                    </div>
                    <div class="timeline__poster">
                        <img src="./assets/img/poster/2015.jpg"/>
                    </div>
                </li>
                <li>
                    <div class="timeline__year">
                        <h1>2014</h1>
                    </div>
                    <div class="timeline__poster">
                        <img src="./assets/img/poster/2014.jpg"/>
                    </div>
                </li>
            </ul>
        </div>
      </div>

    `;
  }
}

customElements.define('timeline-view', TimelineView);