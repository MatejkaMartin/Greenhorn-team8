import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT
} from './actions';

const initialState = {
  authenticated: false,
  error: ''
};

export const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      const { userData } = action.payload;
      return {
        ...state,
        error: '',
        user: userData.user,
        token: userData.token,
        authenticated: true,
      };
    case LOGIN_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        error: error,
        authenticated: false,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
        token: null,
        authenticated: false,
      };

    default:
    return state;

  }
}

export const getError = state => state.error;
export const getToken = state => state.token;
export const getUser = state => state.user;
export const getIsAuthenticated = state => state.authenticated;
