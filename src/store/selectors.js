
const getAppInit = state => state.init.appInit; 
const getNews = state => state.news || [];
const getEditions = state => state.editions || [];
const getLineup = (state, year) => getEditions(state).find(edition => edition.year == year).lineup;

export default {
    getAppInit,
    getNews,
    getEditions,
    getLineup,
};