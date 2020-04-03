import { 

} from "./actions.js";
import { createSelector } from "reselect";

export const VisibilityFilters = {

};

const initial_state = {
    editions: [
        {
            year: `2019`,
            stages: ['main', 'forte'],
            days: ['16/08', '17/08'],
            poster: ``,
            urlGallery: ``,
            desc: ``,
            lineup: [
                {
                    name: `Fuoriology`,
                    youtubeKey: `gJjew3vnZ6k`,
                    urlSocial1: ``,
                    urlSocial2: ``,
                    stage: 1,
                    day: 2,
                },
                {
                    name: `Earth Beat Movement`,
                    youtubeKey: `IaqKXbKAOeU`,
                    urlSocial1: ``,
                    urlSocial2: ``,
                    stage: 1,
                    day: 2,
                },
                {
                    name: `Mole Moonwalktet`,
                    youtubeKey: `JzCIUPWVTEI`,
                    urlSocial1: ``,
                    urlSocial2: ``,
                    stage: 1,
                    day: 2,
                },
                {
                    name: `Gold Miners NightClub`,
                    youtubeKey: `V15vRciah-s`,
                    urlSocial1: ``,
                    urlSocial2: ``,
                    stage: 1,
                    day: 2,
                },
                {
                    name: `Dolomhate`,
                    youtubeKey: `sw9OatbbsIU`,
                    urlSocial1: ``,
                    urlSocial2: ``,
                    stage: 1,
                    day: 2,
                },
                {
                    name: `Elena Mazzon`,
                    youtubeKey: `CmqaF7_X_P4`,
                    urlSocial1: ``,
                    urlSocial2: ``,
                    stage: 2,
                    day: 1,
                },
                {
                    name: `Da Quagga`,
                    youtubeKey: `Pi7kWRtcTCQ`,
                    urlSocial1: ``,
                    urlSocial2: ``,
                    stage: 2,
                    day: 1,
                },
                {
                    name: `Untamed Sound System`,
                    youtubeKey: `n0FGhAP_mCw`,
                    urlSocial1: ``,
                    urlSocial2: ``,
                    stage: 2,
                    day: 1,
                },
            ],
            merch: [
                {
                    product: `t-shirt`,
                    name: `vojage`,
                    desc: ``,
                    imgs: [],
                },
                {
                    product: `t-shirt`,
                    name: `calm`,
                    desc: ``,
                    imgs: [],
                },
            ],
        }
    ],
    news: [
        {
            title: ``,
            article: ``,
            link: ``,
            cover: ``,
        },
    ],
    sponsor: [
        {
            name: ``,
            tier: ``,
            urlWebsite: ``,
            logo: ``,
        }
    ]
};

export const reducer = (state = initial_state, action) => {
    switch(action.type) {
        
        default:
            return state;
    }
};
