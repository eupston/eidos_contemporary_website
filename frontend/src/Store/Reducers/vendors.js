import * as actionTypes from '../Actions/actionTypes'

const initialState = {
    vendors: {
        "Gordon Lawrie": {
            "Product Types": ["Rings", "Necklaces"]
            },
        "Deborah Alexander" : {
            "Product Types": ["Rings", "Necklaces"]
            }
    },
    errors: null
};

const reducer = (state= initialState, action) => {

    switch (action.type) {
        case actionTypes.SET_VENDORS_INFORMATION_SUCCESS:
            return {
                ...state,
                vendors: action.vendors
            };
        case actionTypes.SET_VENDORS_INFORMATION_FAILED:
            return {
                ...state,
                errors: action.errors
            };
        default:
            return {...state};
    }
};

export default reducer;