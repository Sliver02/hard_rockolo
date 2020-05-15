
// const getAppInit = state => state.init.appInit; 
const getShowOverlay = state => state.init.showOverlay || false;
const getShowMenu = state => state.init.showMenu || false;
const getNews = state => state.news || [];
const getCurrentArticleID = state => state.init.currentArticleID || 0;
const getArticle = (state) => getNews(state)[getCurrentArticleID(state)];
const getEditions = state => state.editions || [];
const getLineup = (state, year) => getEditions(state).find(edition => edition.year == year).lineup;
const getTshirts = (state) => state.merchandise;

export default {
    // getAppInit,
    getShowOverlay,
    getShowMenu,
    getNews,
    getArticle,
    getCurrentArticleID,
    getEditions,
    getLineup,
    getTshirts,
};