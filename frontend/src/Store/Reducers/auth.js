import * as actionTypes from '../Actions/actionTypes'

const initialState = {
        customerAccessToken: "",
        isLoggedIn: false
};

const reducer = (state= initialState, action) => {

    switch (action.type) {
        case actionTypes.SET_CUSTOMER_ACCESS_TOKEN:
            return {
                ...state,
                customerAccessToken: action.customerAccessToken,
                isLoggedIn: true
            };
        case actionTypes.CUSTOMER_LOGOUT:
            return {
                ...state,
                customerAccessToken: "",
                isLoggedIn: false
            };
        default:
            return {...state};
    }
};

export default reducer;