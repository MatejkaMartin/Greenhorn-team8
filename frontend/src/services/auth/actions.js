import { history } from '../../helpers/history'

export const LOGIN = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS =  'LOGIN_SUCCESSFULL';
export const LOGIN_FAILURE = 'LOGIN_FAILED';
export const LOGOUT = 'LOGGED_OUT';

export const ERR_CONNECTION_REFUSED = 'Login failed';

export const logoutAction = () => ({
    type: LOGOUT
});

export const loginSuccessAction = userData => ({
  type: LOGIN_SUCCESS,
  payload: { userData },
});

export const loginFailureAction = error => (
  {
  type: LOGIN_FAILURE,
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
  dispatch(logoutAction())
};

export const login = (email,password) => (dispatch, getState, { api }) => {
  api
    .post('auth', {
      email: email,
      password: password,
    })
    .then(function (response) {
      setToken(response.data)
      dispatch(loginSuccessAction(response.data));
      api.defaults.headers.common['Authorization'] = JSON.parse(localStorage.getItem('user')).token
      history.push('/dashboard')
    })
    .catch(function (error) {
      dispatch(loginFailureAction(ERR_CONNECTION_REFUSED));
    }
    );
};
