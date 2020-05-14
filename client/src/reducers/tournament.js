import {
    GET_TOURNAMENTS,
    TOURNAMENT_ERROR,
    DELETE_TOURNAMENT,
    ADD_TOURNAMENT,
    GET_TOURNAMENT
} from '../actions/types';
  
  const initialState = {
    tournaments: [],
    tournament: null,
    loading: true,
    error: {}
  };
  
export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
        case GET_TOURNAMENTS:
            return {
                ...state,
                tournaments: payload,
                loading: false
            };
        case GET_TOURNAMENT:
            return {
                ...state,
                tournament: payload,
                loading: false
            };
        case ADD_TOURNAMENT:
            return {
                ...state,
                tournaments: [payload, ...state.tournaments],
                loading: false
            };
        case DELETE_TOURNAMENT:
            return {
                ...state,
                tournaments: state.tournaments.filter(tournament => tournament._id !== payload),
                loading: false
            };
        case TOURNAMENT_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}