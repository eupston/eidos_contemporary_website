import * as actionTypes from '../Actions/actionTypes';

export const setCustomerAccessToken = (accessToken) => {
    return {
        type:actionTypes.SET_CUSTOMER_ACCESS_TOKEN,
        customerAccessToken: accessToken
    };
};
