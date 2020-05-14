import axios from 'axios';
import { setAlert } from './alert';
import {
    GET_TOURNAMENTS,
    TOURNAMENT_ERROR,
    DELETE_TOURNAMENT,
    ADD_TOURNAMENT,
    GET_TOURNAMENT
} from './types';

// Get Tournaments
export const getTournaments = () => async dispatch => {
    try {
        const res = await axios.get('/api/tournaments');
    
        dispatch({
            type: GET_TOURNAMENTS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: TOURNAMENT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Delete tournament
export const deleteTournament = id => async dispatch => {
    try {
        await axios.delete(`/api/tournaments/${id}`);
    
        dispatch({
            type: DELETE_TOURNAMENT,
            payload: id
        });
    
        dispatch(setAlert('Tournament Removed', 'success'));
    } catch (err) {
        dispatch({
            type: TOURNAMENT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

  // Add tournament
export const addTournament = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
  
    try {
        const res = await axios.post('/api/tournaments', formData, config);
    
        dispatch({
            type: ADD_TOURNAMENT,
            payload: res.data
        });
    
        dispatch(setAlert('Tournament Created', 'success'));
    } catch (err) {
        dispatch({
            type: TOURNAMENT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};

// Get tournament
export const getTournament = id => async dispatch => {
    try {
        const res = await axios.get(`/api/tournaments/${id}`);
    
        dispatch({
            type: GET_TOURNAMENT,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: TOURNAMENT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
};