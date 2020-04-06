import './styles/main.scss';
import Navbar from './views/navbar-view';
import Footer from './views/footer-view';
import './views/home-view';
import {Router} from '@vaadin/router';

window.addEventListener('load', () => {
    Navbar();
    Footer();
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