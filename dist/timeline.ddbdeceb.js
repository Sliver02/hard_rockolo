(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{29:function(e,t,i){(t=i(1)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/icon?family=Material+Icons);"]),t.push([e.i,"@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css);"]),t.push([e.i,"@-moz-keyframes load{from{-moz-transform:scaleX(100%)}to{-moz-transform:scaleX(1)}}@-webkit-keyframes load{from{-webkit-transform:scaleX(0)}to{-webkit-transform:scaleX(1)}}@keyframes load{from{transform:scaleX(0)}to{transform:scaleX(1)}}@-moz-keyframes slide-left{from{-moz-transform:translate(100%)}to{-moz-transform:translate(0)}}@-webkit-keyframes slide-left{from{-webkit-transform:translate(100%)}to{-webkit-transform:translate(0)}}@keyframes slide-left{from{transform:translate(100%)}to{transform:translate(0)}}@-moz-keyframes slide-right{from{-moz-transform:translate(-100%)}to{-moz-transform:translate(0)}}@-webkit-keyframes slide-right{from{-webkit-transform:translate(-100%)}to{-webkit-transform:translate(0)}}@keyframes slide-right{from{transform:translate(-100%)}to{transform:translate(0)}}*{box-sizing:border-box;margin:0;padding:0}a{color:white;text-decoration:none;outline:0}a:hover{color:white;text-decoration:none}a:active,a:focus{outline:0;border:none;-moz-outline-style:none}h1,h2,h3{font-family:'Montserrat', sans-serif;text-transform:uppercase;font-weight:600}h1{font-size:4rem;line-height:0.8;letter-spacing:-0.2rem;margin-bottom:30px}h2{line-height:0.8}ul{list-style-type:none}hr{margin:30px 0}span{font-size:0.8rem}nav{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;position:fixed;width:100%;z-index:10;padding:20px 40px;transition:background 0.4s ease-out}.btn{cursor:pointer;display:inline-block;padding:0.8rem 1.5rem;transition:all 0.3s;text-transform:uppercase}.btn--active,.btn:hover,.btn:active{color:#333;background:white}.btn--active:hover,.btn:hover:hover,.btn:active:hover{background:white}.section{display:flex;align-items:center;justify-content:center;flex-direction:column;width:100%;padding:60px 20px;padding-bottom:100px}.section__container{width:80%}.section--dark{background:#333;color:#ddd}.section__news{display:grid;grid-template-columns:repeat(4, 1fr);grid-gap:1rem}.section__merch{display:flex;flex-wrap:wrap}.section__merch .section__text{padding-left:60px;max-width:550px}.section__merch .section__text a{color:#db5461}.section__container{display:flex;position:relative}.timeline{max-width:800px;position:relative}.timeline:before{content:'';position:absolute;left:50%;width:5px;height:100%;background:#db5461;border-radius:3px}.timeline ul{display:flex;flex-direction:column}.timeline ul li{position:relative;display:flex;flex-direction:column;list-style:none;width:50%;padding:40px 40px}.timeline ul li:hover::before{transform:scale(1.5);box-shadow:0 0 0 6px rgba(219,84,97,0.4)}.timeline ul li:before{content:'';position:absolute;width:25px;height:25px;border-radius:50%;background:#db5461;box-shadow:0 0 0 8px rgba(219,84,97,0.4);transition:transform 0.5s, box-shadow 0.5s}.timeline ul li:nth-child(odd){align-items:flex-end}.timeline ul li:nth-child(odd):before{right:-15px}.timeline ul li:nth-child(odd) .timeline__year{right:-180px}.timeline ul li:nth-child(odd) .timeline__poster:hover{transform:translateX(-20px)}.timeline ul li:nth-child(even){text-align:right;align-self:flex-end;align-items:flex-start}.timeline ul li:nth-child(even):before{left:-10px}.timeline ul li:nth-child(even) .timeline__year{left:-175px}.timeline ul li:nth-child(even) .timeline__poster:hover{transform:translateX(20px)}.timeline__year{position:absolute;margin-top:-15px;color:#db5461}.timeline__poster{cursor:pointer;display:flex;transition:transform 0.5s}.timeline__poster img{max-width:550px;max-height:600px}\n",""]),e.exports=t},31:function(e,t,i){"use strict";i.r(t);var r=i(0),n=i(4),o=i(5),a=(i(3),i(22),i(29)),s=i.n(a);class l extends r.a{static get styles(){return Object(r.b)([s.a])}static get properties(){return{}}constructor(){super()}render(){return r.c`

      <page-header 
        img="DSC_0501"
        height="300">
      </page-header>

      <div class="section">
        <div class="timeline">
            <ul>
              ${this.editions.map(e=>r.c`
                <li>
                    <div class="timeline__year">
                        <h1>${e.year}</h1>
                    </div>
                    <div class="timeline__poster">
                        <img src="./assets/img/poster/poster_${e.year}.jpg"/>
                    </div>
                </li>
              `)}
            </ul>
        </div>
      </div>

    `}firstUpdated(){window.scrollTo(0,0)}}customElements.define("timeline-view",Object(o.a)((e,t)=>({editions:n.a.getEditions(e)}))(l))}}]);
//# sourceMappingURL=timeline.ddbdeceb.js.map