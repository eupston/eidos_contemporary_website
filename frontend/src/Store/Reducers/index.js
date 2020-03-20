import { combineReducers } from 'redux';
import authReducer from './auth';
import vendorsReducer from './vendors'

export default combineReducers({
    auth:authReducer,
    vendors:vendorsReducer
});
