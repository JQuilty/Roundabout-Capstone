import {
    GET_CONTESTANTS,
    CONTESTANT_ERROR,
    UPDATE_LIKES,
    DELETE_CONTESTANT,
    ADD_CONTESTANT,
    GET_CONTESTANT,
    ADD_COMMENT,
    REMOVE_COMMENT
  } from '../actions/types';
  
  const initialState = {
    contestants: [],
    contestant: null,
    loading: true,
    error: {}
  };
  
  export default function(state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_CONTESTANTS:
        return {
          ...state,
          contestants: payload,
          loading: false
        };
      case GET_CONTESTANT:
        return {
          ...state,
          contestant: payload,
          loading: false
        };
      case ADD_CONTESTANT:
        return {
          ...state,
          contestants: [payload, ...state.contestants],
          loading: false
        };
      case DELETE_CONTESTANT:
        return {
          ...state,
          contestants: state.contestants.filter(contestant => contestant._id !== payload),
          loading: false
        };
      case CONTESTANT_ERROR:
        return {
          ...state,
          error: payload,
          loading: false
        };
      case UPDATE_LIKES:
        return {
          ...state,
          contestants: state.contestants.map(contestant =>
            contestant._id === payload.id ? { ...contestant, likes: payload.likes } : contestant
          ),
          loading: false
        };
      case ADD_COMMENT:
        return {
          ...state,
          contestant: { ...state.contestant, comments: payload },
          loading: false
        };
      case REMOVE_COMMENT:
        return {
          ...state,
          contestant: {
            ...state.contestant,
            comments: state.contestant.comments.filter(
              comment => comment._id !== payload
            )
          },
          loading: false
        };
      default:
        return state;
    }
  }