import { history } from '../../helpers/history'

export const GET_TEMPLATES_API_CALL = 'GET_TEMPLATES_API_CALL';

export const startFetchTemplates = () => (dispatch, getState, { api }) => {
  api
    .get('templates')
    .then(( response ) => {
      const { data } = response;

        dispatch({type: GET_TEMPLATES_API_CALL, payload: data})
    })
    .catch((response) => {
      dispatch({type: 'SET_ERROR', payload: response.data.message})
    })
};


export const addTemplate = (templateJson) => async (dispatch, getState, { api }) => {

      await api
      .post('templates/add', templateJson)
      .then(() => {
        history.push('/tasks')
      } )
};
