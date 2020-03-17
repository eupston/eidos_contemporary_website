import * as actionTypes from '../Actions/actionTypes'

const initialState = {
    vendors: {
        "Gordon Lawrie": {
            "Product Types": ["Ring", "Necklace"]
            },
        "Deborah Alexander" : {
            "Product Types": ["Ring", "Necklace"]
            }
    }
};

const reducer = (state= initialState, action) => {

        return state;

};

export default reducer;