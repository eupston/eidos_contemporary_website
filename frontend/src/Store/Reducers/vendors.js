import * as actionTypes from '../Actions/actionTypes'

const initialState = {
    vendors: {
        "Gordon Lawrie": {
            "Product Types": ["Rings", "Necklaces"]
            },
        "Deborah Alexander" : {
            "Product Types": ["Rings", "Necklaces"]
            }
    }
};

const reducer = (state= initialState, action) => {

        return state;

};

export default reducer;