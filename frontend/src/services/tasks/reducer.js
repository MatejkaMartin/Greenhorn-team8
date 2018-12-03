import {
  GET_TASKS_API_CALL_SUCCESS,
  UPDATE_TASKS
} from './actions';

const initialState = {
  tasks: null,
  error: null,
};


export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS_API_CALL_SUCCESS:
    const { tasks } = action.payload;

    return {
      ...state,
      tasks,
      error: null,
    };
    case UPDATE_TASKS:
    return {
      ...state
    };

    default:
      return state;
  }
};


export const getTasks = state => state.tasks || [];

export const getError = state => state.error;

export const getIsError = state => state.error !== null;
