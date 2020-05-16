import { LitElement, html, css } from 'lit-element/';

import selectors from "../../store/selectors";
import connect from "../../store/connect";
import actions from "../../store/actions";

import style from "../../styles/components/lineup.scss";

class LineupSection extends LitElement {

    static get styles() {
		return css([style]);
	}

    static get properties() {
        return {
            edition: {attribute: false},
            year: {type: Number},
            days: {type: Array},
            bandIndex: {type: Number},
            nextTimer: {type: Number},
            player: {type: Object},
            done: {type: Boolean}
        };
    }
    
    constructor() {
        super();
        this.year = '2019',
        this.days = [];
        this.bandIndex = 0;
        this.nextTimer = 0;
        this.sliderPause = false;
        this.player = undefined;
    }
          
    render() {
        return html`

            <style>
                .lineup__tag.is-next::before {
                    -webkit-animation: loadbar ${this.nextTimer}s linear; /* Safari 4+ */
                    -moz-animation:    loadbar ${this.nextTimer}s linear; /* Fx 5+ */
                    -o-animation:      loadbar ${this.nextTimer}s linear; /* Opera 12+ */
                    animation:         loadbar ${this.nextTimer}s linear; /* IE 10+, Fx 29+ */
                }
            </style>

            <div class="lineup__bands">            
                <ul class="lineup__tag-list">
                    ${this.lineup.map((band, index, arr) => html `
                        <li class="lineup__tag 
                                ${this.bandIndex === index ? 'is-active' : ''} 
                                ${this.bandIndex +1 === index || this.bandIndex +1 === arr.length && index === 0 ? 'is-next' : ''}" 
                                @click="${(e) => this.selectBand(index)}">
                                ${band.name}
                        </li>
                    `)}
                </ul>
            </div>

            <div class="lineup__content">
                <div id="player" class="lineup__video"></div>
            </div>
        `; 
    }

    firstUpdated() {
        this.loadPlayer();
    }

    startSlider() {
        // console.log('start slider');
        this.nextTimer = 8;
        this.sliderPause = false;

        this.timer = setInterval(() => {
            const totalBands = this.lineup.length - 1;

            if (this.bandIndex < totalBands) {
                this.bandIndex += 1;
                this.switchBand();
            } else {
                // console.log('band reset');
                this.bandIndex = 0;
                this.switchBand();
            }
        }, this.nextTimer * 1000);

    }

    stopSlider() {
        // console.log('stop slider');
        this.nextTimer = 0;
        clearInterval(this.timer);
    }

    selectBand(selectedId) {
        if (!this.sliderPause){
            this.stopSlider();
        }
        
        this.bandIndex = selectedId;
        this.switchBand();
    }

    switchBand() {
        this.player.loadVideoById({videoId: this.lineup[this.bandIndex].youtubeKey});
        this.player.stopVideo();
    }

    loadPlayer() { 
        // this.onYouTubePlayer();
        var element = this;

        if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined') {
      
            var tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            
            window.onYouTubePlayerAPIReady = function() {
                // element.startSlider();
                element.onYouTubePlayer();
            };
        } else {
            element.onYouTubePlayer();
        }
    }

    onYouTubePlayer() {
        this.player = new YT.Player(this.shadowRoot.querySelector('#player'), {
            height: '490',
            width: '880',
            videoId: this.lineup[this.bandIndex].youtubeKey,
            playerVars: { controls:1, showinfo: 0, rel: 0, showsearch: 0, iv_load_policy: 3 },
            events: {
            'onReady': (e) => this.startSlider(),
            'onStateChange': (e) => this.onPlayerStateChange(e),
            'onError': this.catchError,
            }
        });

    }

    onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !this.sliderPause) {
            // setTimeout(stopVideo, 6000);
            // console.log('play');
            this.sliderPause = true;
            this.stopSlider();

        } else if (event.data == YT.PlayerState.ENDED && this.sliderPause) {
            // location.reload();
            this.startSlider();
        }
    }

    catchError(event) {
        if(event.data == 100) console.log("Non funge il video");
    }
}

const mapStateToProps = (state, ctx) => {
	return {
		lineup: selectors.getLineup(state, ctx.year)
	};
};

// const mapDispatchToEvents = dispatch => {
// 	return {
// 		initApp: () => dispatch(actions.initApp())
// 	};
// };

customElements.define('lineup-section',  connect(mapStateToProps)(LineupSection));