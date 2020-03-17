import { combineReducers } from 'redux';
import auth from './auth';
import vendors from './vendors'

export default combineReducers({
    auth,
    vendors
});
