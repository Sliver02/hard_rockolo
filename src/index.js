import './scss/main.scss';
import './views/home-view';
import {Router} from '@vaadin/router';

window.addEventListener('load', () => {
    initRouter();
    // registerSW();
});

function initRouter() {
    const router = new Router(document.querySelector('main'));
    
    router.setRoutes([
        {
            path: '/',
            component: 'home-view'
        },
        {
            path: '/about',
            component: 'about-view',
            action: () => import(/* webpackChunkName: "about" */ './views/about-view')
        },
        {
            path: '/merch',
            component: 'merch-view',
            action: () => import(/* webpackChunkName: "merch" */ './views/merch-view')
        },
        {
            path: '/timeline',
            component: 'timeline-view',
            action: () => import(/* webpackChunkName: "timeline" */ './views/timeline-view')
        },
        {
            path: '(.*)',
            component: 'not-found-view',
            action: () => import(/* webpackChunkName: "not-found-view" */ './views/not-found-view')
        }
    ]);

    console.log("router init");
}

window.onscroll = () => {
    // console.log(window.pageYOffset); 
    scrollY = window.pageYOffset;
    const nav = document.querySelector('nav');
    if(scrollY <= 200) nav.className = ''; else nav.className = 'navbar--dark';
};
