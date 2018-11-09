import { userConstants } from '../constants/user.constants';

const initialState = {
  authenticated: false,
  error: ''
};

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      const { user } = action.payload;
      return {
        ...state,
        error: '',
        user: user.user,
        token: user.token,
        authenticated: true,
      };
    case userConstants.LOGIN_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        error: error,
        authenticated: false,
      };
    case userConstants.LOGOUT:
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
