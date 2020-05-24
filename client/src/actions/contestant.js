import axios from 'axios';
import { setAlert } from './alert';

import {
    GET_CONTESTANT,
    GET_CONTESTANTS,
    CONTESTANT_ERROR,
    ADD_CONTESTANT,
    DELETE_CONTESTANT,
    UPDATE_CONTESTANT,
    CLEAR_CONTESTANT
} from './types';

// Get contestants
export const getContestants = () => async dispatch => {
    try {
      const res = await axios.get('/api/contestants');
  
      dispatch({
        type: GET_CONTESTANTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: CONTESTANT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
};

  // Get contestant
export const getContestant = id => async dispatch => {
    try {
      const res = await axios.get(`/api/contestants/${id}`);
  
      dispatch({
        type: GET_CONTESTANT,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: CONTESTANT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
};

// Add contestant
export const addContestant = formData => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    try {
      const res = await axios.post('/api/contestants', formData, config);
  
      dispatch({
        type: ADD_CONTESTANT,
        payload: res.data
      });
  
      dispatch(setAlert('Contestant Created', 'success'));
    } catch (err) {
      dispatch({
        type: CONTESTANT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

// Delete contestant
export const deleteContestant = id => async dispatch => {
    try {
      await axios.delete(`/api/contestants/${id}`);
  
      dispatch({
        type: DELETE_CONTESTANT,
        payload: id
      });
  
      dispatch(setAlert('Contestant Removed', 'success'));
    } catch (err) {
      dispatch({
        type: CONTESTANT_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
