export const GET_CATALOGS = 'GET_CATALOGS';

export const fetchCatalogs = () => (dispatch, getState, { api }) => {
    api
    .get('catalogs')
    .then(response => {
      const { data } = response;
      dispatch(catalogsReceived(data))
    })
    .catch((response) => {
      dispatch({type: 'SET_ERROR', payload: response.data.message})
    })
}

export const catalogsReceived = catalogs => ({
  type: GET_CATALOGS,
  payload: { catalogs },
});
