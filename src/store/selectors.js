
const getAppInit = state => state.init.appInit; 
const getEditions = state => state.editions || [];

const getEdition = (state, year) => getEditions(state).find(edition => edition.year == year);

export default {
    getAppInit,
    getEdition,
};