import { userConstants } from '../constants/user.constants';
import { history } from '../helpers/history'

export const errors = {
  ERR_CONNECTION_REFUSED : 'Login failed',
}

export const loginRequest = () => ({
  type: userConstants.LOGIN,
});

export const logoutSuccess = () => ({
    type: userConstants.LOGOUT
});

export const loginSuccess = user => ({
  type: userConstants.LOGIN_SUCCESS,
  payload: { user },
});

export const loginFailure = error => (
  {
  type: userConstants.LOGIN_FAILURE,
  payload: { error },
});

export const setToken = (token) => (
    localStorage.setItem('user',JSON.stringify(token))
);

export const removeToken = () => (
    localStorage.removeItem('user')
);


export const logout = () => (dispatch, getState, { api }) => {
  removeToken()
  dispatch(logoutSuccess())
};

export const login = (email,password) => (dispatch, getState, { api }) => {
  dispatch(loginRequest());
  api
    .post('auth', {
      email: email,
      password: password,
    })
    .then(function (response) {
      setToken(response.data)
      dispatch(loginSuccess(response.data));
      history.push('/first')
    })
    .catch(function (error) {
    if (error.response) {
      dispatch(loginFailure(errors.ERR_CONNECTION_REFUSED));
    } else if (error.request) {
      dispatch(loginFailure(errors.ERR_CONNECTION_REFUSED));
    } else {
      dispatch(loginFailure(errors.ERR_CONNECTION_REFUSED));
    }
    dispatch(loginFailure(errors.ERR_CONNECTION_REFUSED));
  }
    );
};
