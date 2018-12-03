import {
  SET_ERROR, DISMISS_ERROR
} from './actions';

const initialState = {
  isError: false,
  message: null,
};


export const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
    return {
      ...state,
      isError: true,
      message: action.payload,
    };
    case DISMISS_ERROR:

    return {
      ...state,
      isError: false,
      message: null,
    };

    default:
      return state;
  }
};


export const getError = state => state.message;

export const getIsError = state => state.isError;
