export const SET_ERROR = 'SET_ERROR';
export const DISMISS_ERROR = 'DISMISS_ERROR';


export const setError = (error) => (dispatch, getState) => {
      dispatch(
        {
          type: SET_ERROR,
          payload: { error },
        }
      )
}


export const dismissError = () => (dispatch, getState) => {
      dispatch(
        {
          type: DISMISS_ERROR
        }
      )
}
