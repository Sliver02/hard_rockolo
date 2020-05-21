import { LitElement, html, css } from 'lit-element/';

import selectors from "../../store/selectors";
import connect from "../../store/connect";
import actions from "../../store/actions";

import style from "../../styles/components/slider.scss";

class MerchSlider extends LitElement {

    static get styles() {
		return css([style]);
	}

    static get properties() {
        return {
            imgIndex: {type: Number},
        };
      }
    
    constructor() {
        super();
        this.merch = [
            {
                year: '2019',
                url: '01',
            },
            {
                year: '2019',
                url: '03',
            },
            {
                year: '2017',
                url: '02',
            },
            {
                year: '2016',
                url: '04',
            },
        ];
        this.imgIndex = 0;
        this.imgTotal = this.merch.length - 1;
        this.imgPrev = this.imgTotal;
        this.nextTimer = 4;
        this.timer = undefined;
        this.sliderPause = false;
    }

    slidingHandler(index, arr) {
        if (this.imgPrev === index) {
            return 'is-prev';
        }
        else if (this.imgIndex === index) {
            return 'is-active';
        } else {
            return '';
        }
        
        
    }
          
    render() {
        return html`
<!-- 
            ${this.imgPrev < this.imgIndex || this.imgPrev === this.imgTotal && this.imgIndex === 0 ?
                html`
                    <style>
                        .slider__slide.is-active {
                            
                            -webkit-animation: slide-left 0.5s  ease-in-out; /* Safari 4+ */
                            -moz-animation:    slide-left 0.5s  ease-in-out; /* Fx 5+ */
                            -o-animation:      slide-left 0.5s  ease-in-out; /* Opera 12+ */
                            animation:         slide-left 0.5s  ease-in-out; /* IE 10+, Fx 29+ */
                        }
                    </style>
                `
                :
                html`
                    <style>
                        .slider__slide.is-active {
                            -webkit-animation: slide-right 0.5s  ease-in-out; /* Safari 4+ */
                            -moz-animation:    slide-right 0.5s  ease-in-out; /* Fx 5+ */
                            -o-animation:      slide-right 0.5s  ease-in-out; /* Opera 12+ */
                            animation:         slide-right 0.5s  ease-in-out; /* IE 10+, Fx 29+ */
                        };
                    </style>
                `
            } -->

            
            <style>
                .slider__point.is-next::before {
                    -webkit-animation: loadbar ${this.nextTimer}s linear; /* Safari 4+ */
                    -moz-animation:    loadbar ${this.nextTimer}s linear; /* Fx 5+ */
                    -o-animation:      loadbar ${this.nextTimer}s linear; /* Opera 12+ */
                    animation:         loadbar ${this.nextTimer}s linear; /* IE 10+, Fx 29+ */
                }
            </style>
            

            <div class="slider">
                ${ this.merch.map((product, index, arr) => html `
                    <div class="slider__slide ${this.slidingHandler(index,arr)}">

                        <div class="slider__mask ${this.slidingHandler(index,arr)}">
                            <div class="slider__img-wrap">
                                <img src="./assets/images/merch/slider/slide_${product.url}.jpg" />
                            </div>
                        </div>
                    </div>
                `)}

                
                <div class="slider__btn slider__btn--left" @click="${() => this.prevSlide()}">
                    <i class="icon fa-chevron-left"></i>
                </div>
                <div class="slider__btn slider__btn--right" @click="${() => this.nextSlide()}">
                    <i class="icon fa-chevron-right"></i>
                </div>
            </div>

            
            <div class="slider__point-wrap">
                ${ this.merch.map((product, index, arr) => html `
                    <div class="slider__point  ${this.slidingHandler(index,arr)}
                    ${this.imgIndex + 1 === index || this.imgIndex + 1 === arr.length && index === 0 ? 'is-next' : ''}"
                        @click="${(e) => this.selectSlide(index)}"></div>
                `)}
            </div>
            
        `; 
    }

    firstUpdated() {
        this.startSlide(4);
    }

    startSlide(newTime) {
        this.nextTimer = newTime;
        this.sliderPause = false;

        this.timer = setInterval(() => {
            if (this.imgIndex < this.imgTotal) {
                this.updatePrev();
                this.imgIndex += 1;
            } else {
                this.updatePrev();
                this.imgIndex = 0;
            }
        }, this.nextTimer * 1000);
    }

    stopSlide() {
        this.nextTimer = 0;
        clearInterval(this.timer);

        this.timer = setTimeout(() => {
            this.startSlide(4);
        }, 10 * 1000);
    }

    prevSlide() {
        if (this.imgIndex > 0) {
            this.updatePrev();
            this.imgIndex -= 1;
        } else {
            this.updatePrev();
            this.imgIndex = this.imgTotal;
        }
    }

    nextSlide() {
        if (this.imgIndex < this.imgTotal) {
            this.updatePrev();
            this.imgIndex += 1;
        } else {
            this.updatePrev();
            this.imgIndex = 0;
        }
    } 

    selectSlide(selectedId) {
        this.updatePrev();
        this.stopSlide();
        this.imgIndex = selectedId;
    }

    updatePrev() {
        clearInterval(this.timer);
        this.startSlide(4);
        this.imgPrev = this.imgIndex;
    }
    
}

const mapStateToProps = (state) => {
	return {
		tshirts: selectors.getTshirts(state)
	};
};

const mapDispatchToEvents = dispatch => {
	return {

	};
};

customElements.define('merch-slider', connect(mapStateToProps, mapDispatchToEvents)(MerchSlider));