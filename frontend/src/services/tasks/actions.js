import { history } from '../../helpers/history'
export const GET_TASKS_API_CALL = 'GET_TASKS_API_CALL';
export const GET_TASKS_API_CALL_SUCCESS = 'GET_TASKS_API_CALL_SUCCESS';
export const GET_TASKS_API_CALL_FAILURE = 'GET_TASKS_API_CALL_FAILURE';
export const UPDATE_TASKS = 'UPDATE_TASKS'


export const fetchTasks = () => ({
  type: GET_TASKS_API_CALL,
});

export const fetchTasksSuccess = tasks => ({
  type: GET_TASKS_API_CALL_SUCCESS,
  payload: { tasks },
});

export const fetchTasksFailure = error => ({
  type: GET_TASKS_API_CALL_FAILURE,
  payload: { error },
});

export const startFetchTasks = () => (dispatch, getState, { api }) => {
  dispatch(fetchTasks());
  api
    .get('tasks')
    .then(({ data }) => {
      const { tasks } = data;
      console.log(tasks)
      dispatch(fetchTasksSuccess(tasks));
    })
    .catch(() => {
      console.log("Failed")
      dispatch(fetchTasksFailure('Failed fetching tasks'));
    });
};

export const updateTask = (taskState,taskId) => async (dispatch,getState, { api }) => {
  let state = { newState: taskState }
  await api
  .patch('tasks/'+ taskId, state)
  .then(() => {
    dispatch({ type: 'UPDATE_TASKS'})
  })
}


export const addTask =  (taskJson) => async (dispatch,getState, { api }) => {
  await api
  .post('tasks/add', taskJson)
  .then(() => {
    history.push('/tasks')
  })
}
