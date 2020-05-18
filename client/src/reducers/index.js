import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import tournament from './tournament';
import profile from './profile';


export default combineReducers({
    alert,
    auth,
    profile,
    tournament
});