import {
  GET_USERS
} from './actions';

const initialState = {
  users: null
};


export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
    const { users } = action.payload
    return {
      ...state,
      users: users
    };

    default:
      return state;
  }
};


export const getEmployees = state => state.users && state.users.filter(user => user.role === 'employee') || [];

export const getUsers = state => state.users;

export const getAdmins = state => state.users.filter(user => user.role === 'admin')
