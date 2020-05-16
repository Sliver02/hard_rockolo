
// const getAppInit = state => state.init.appInit; 
const getShowOverlay = state => state.init.showOverlay || false;
const getShowMenu = state => state.init.showMenu || false;
const getNews = state => state.news || [];
const getArticle = (state, currentID) => getNews(state)[currentID];
const getEditions = state => state.editions || [];
const getEdition = (state, currentID) => getEditions(state)[currentID];
const getLineup = (state, year) => getEditions(state).find(edition => edition.year == year).lineup;
const getTshirts = (state) => state.merchandise;

export default {
    // getAppInit,
    getShowOverlay,
    getShowMenu,
    getNews,
    getArticle,
    getEditions,
    getEdition,
    getLineup,
    getTshirts,
};