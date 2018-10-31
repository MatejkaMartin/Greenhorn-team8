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
        user,
        authenticated: true,
      };
    case userConstants.LOGIN_FAILURE:
      const { error } = action.payload;
      return {
        error: error,
        authenticated: false,
      };
    case userConstants.LOGOUT:
      return {
        user: null,
        authenticated: false,
      };

    default:
    return state;

  }
}
