import {BaseView} from '../base-view.js';
import {html} from '@polymer/lit-element';

class LineupShowcase extends BaseView {

    static get properties() {
        return {
            lineup: {type: Array},
            days: {type: Array},
            bandIndex: {type: Number},
            nextTimer: {type: Number},
            player: {type: Object},
            done: {type: Boolean}
        };
      }
    
    constructor() {
        super();
        this.lineup = [
            {
                name: 'Fuoriology',
                url: 'gJjew3vnZ6k'
            },
            {
                name: 'Earth Beat Movement',
                url: 'IaqKXbKAOeU'
            },
            {
                name: 'Mole Moonwalktet',
                url: 'JzCIUPWVTEI'
            },
            {
                name: 'Gold Miners NightClub',
                url: 'V15vRciah-s'
            },
            {
                name: 'Dolomhate',
                url: 'sw9OatbbsIU'
            },
            {
                name: 'Elena Mazzon',
                url: 'CmqaF7_X_P4'
            },
            {
                name: 'Da Quagga',
                url: 'Pi7kWRtcTCQ'
            },
            {
                name: 'Untamed Sound System',
                url: 'n0FGhAP_mCw'
            }
        ];
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
                    -webkit-animation: load ${this.nextTimer}s linear; /* Safari 4+ */
                    -moz-animation:    load ${this.nextTimer}s linear; /* Fx 5+ */
                    -o-animation:      load ${this.nextTimer}s linear; /* Opera 12+ */
                    animation:         load ${this.nextTimer}s linear; /* IE 10+, Fx 29+ */
                }
            </style>
            
            <ul class="lineup__names">
                ${this.lineup.map((band, index, arr) => html `
                    <li class="lineup__tag 
                            ${this.bandIndex === index ? 'is-active' : ''} 
                            ${this.bandIndex +1 === index || this.bandIndex +1 === arr.length && index === 0 ? 'is-next' : ''}" 
                            @click="${(e) => this.selectBand(index)}">
                            ${band.name}
                    </li>
                `)}
            </ul>

            <div class="lineup__content">
                <!-- <iframe class="lineup__video" 
                    src="${this.lineup[this.bandIndex].url}"
                    
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe> -->
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

    stopSlider(event) {
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

    switchBand(event) {
        this.player.loadVideoById({videoId: this.lineup[this.bandIndex].url});
        this.player.stopVideo();
    }

    loadPlayer() { 
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
        this.player = new YT.Player('player', {
            height: '490',
            width: '880',
            videoId: this.lineup[this.bandIndex].url,
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

customElements.define('lineup-showcase', LineupShowcase);