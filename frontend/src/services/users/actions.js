import { history } from '../../helpers/history'

export const ADD_USER = 'ADD_USER';
export const GET_USERS = 'GET_USERS';

export const addUser = (state) => (dispatch, getState, { api }) => {
  api
    .post('users/add',   {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        mobile: state.mobile,
        role_id: state.role,
        department_id: state.department,
        jobPosition_id: state.jobPosition,
        avatarURL: state.avatarURL
      })
    .then(function (response) {
      history.push('/people')
    })
    .catch((response) => {
      dispatch({type: 'SET_ERROR', payload: response.response.data.message})
    })
}

export const startFetchUsers = () => (dispatch, getState, { api }) => {
  api
  .get('users')
  .then(response => {
    const { data } = response;
      dispatch({type: GET_USERS, payload: data})
    })
    .catch((response) => {
      dispatch({type: 'SET_ERROR', payload: response.response.data.message})
    })
}
