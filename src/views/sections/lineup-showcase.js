import {BaseView} from '../base-view.js';
import {html} from '@polymer/lit-element';

class LineupShowcase extends BaseView {

    static get properties() {
        return {
            lineup: Array,
            days: Array,
            selected: Number,
        };
      }
    
    constructor() {
        super();
        this.lineup = [
            {
                name: 'Fuoriology',
                url: 'https://www.youtube.com/embed/gJjew3vnZ6k'
            },
            {
                name: 'Earth Beat Movement',
                url: 'https://www.youtube.com/embed/IaqKXbKAOeU'
            },
            {
                name: 'Mole Moonwalktet',
                url: 'https://www.youtube.com/embed/JzCIUPWVTEI'
            },
            {
                name: 'Gold Miners NightClub',
                url: 'https://www.youtube.com/embed/V15vRciah-s'
            },
            {
                name: 'Dolomhate',
                url: 'https://www.youtube.com/embed/sw9OatbbsIU'
            },
            {
                name: 'Elena Mazzon',
                url: 'https://www.youtube.com/embed/CmqaF7_X_P4'
            },
            {
                name: 'Da Quagga',
                url: 'https://www.youtube.com/embed/Pi7kWRtcTCQ'
            },
            {
                name: 'Untamed Sound System',
                url: 'https://www.youtube.com/embed/n0FGhAP_mCw'
            }
        ];
        this.days = [];
        this.selected = 0;
    }
          
    render() {
        return html`
            
            <div class="lineup__names">
                ${this.lineup.map((band, index) => html `
                    <div id="${index}" class="lineup__tag ${this.selected === index ? 'is-active' : ''}" @click="${(e) => this.selected = index}">
                        ${band.name}
                    </div>
                `)}
            </div>

            <div class="lineup__content">
                <iframe class="lineup__video" 
                    src="${this.lineup[this.selected].url}" 
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        `;
    }

    firstUpdated() {
        // this.selectContent();
    }

    // selectContent(ev) {
        
    //     const id = ev.target.id;
        
    //     if (id != this.selected) {
    //         this.selected = id;
    //     }
    // }
}

customElements.define('lineup-showcase', LineupShowcase);