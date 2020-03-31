import {BaseView} from '../base-view.js';
import {html} from '@polymer/lit-element';

import '../components/news-card';

class NewsSection extends BaseView {

    static get properties() {
        return {
        };
      }
    
    constructor() {
        super();
        this.news = [
            {
                img: 'DSC_0020',
                title: 'Forte Montericco',
                desc: '16 Agosto 2019 si terrà un aperitivo con gruppi e dj set nella magnifica cornice di Monte Ricco in cima al nostro splendido Parco Roccolo, non mancate!'
            },
            {
              img: 'DSC_0785',
              title: 'Socials',
              desc: 'Per restare sempre aggiornati su Hard Rockolo Festival seguiteci sui nostri social, News, aggiornamenti e tante altre sorprese!'
            },
            {
              img: 'DSC_0035',
              title: 'Merch 2019',
              desc: 'Merchindise originale marchiato Hard Rockolo Festival! Poster e magliette con design originali e giovanili.'
            },
            {
              img: 'furio',
              title: 'Line Up 2019',
              desc: 'Quest’anno vi aspetta una serata straordinaria, il nostro palco sarà solcato da artisti formidabili!'
            },
        ];
    }
          
    render() {
        return html`
            <div class="section__news">
                ${this.news.map(article => html `
                    <news-card img="${article.img}" title="${article.title}" desc="${article.desc}">
                    </news-card>   
                `)}
            </div>
        `; 
    }
}

customElements.define('news-section', NewsSection);