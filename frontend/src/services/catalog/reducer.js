import {
GET_CATALOGS
} from './actions';

const initialState = {
  departments: null,
  jobPositions: null,
  roles: null
};

export const catalogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATALOGS:
      const { catalogs } = action.payload;
      return {
        ...state,
        departments: catalogs.departments,
        jobPositions: catalogs.jobPositions,
        roles: catalogs.roles
      };

    default:
    return state;

  }
}

export const getDepartments = state => state.departments;
export const getJobPositions = state => state.jobPositions;
export const getRoles = state => state.roles;
