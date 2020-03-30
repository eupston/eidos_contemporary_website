import * as actionTypes from '../Actions/actionTypes';
import axios from 'axios';

export const getVendorInformation = () => {
    return dispatch => {
        axios.get('/api/v1/shopify_admin/vendor_product_types')
            .then(response => {
                if(response.data.success){
                    console.log("yup")
                    dispatch(setVendorInformationSuccess(response.data.data));
                }
                else{
                    dispatch(setVendorInformationFailed(response.data.error));
                }
            })
            .catch(error => {
                dispatch(setVendorInformationFailed(error))
            });
    };
};

export const setVendorInformationSuccess = (vendors) => {
    return {
        type:actionTypes.SET_VENDORS_INFORMATION_SUCCESS,
        vendors: vendors
    };
};

export const setVendorInformationFailed = (error) => {
    return {
        type:actionTypes.SET_VENDORS_INFORMATION_FAILED,
        errors: error
    };
};
