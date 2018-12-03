import {
  GET_TEMPLATES_API_CALL
} from './actions';

const initialState = {
  templates: null,
};


export const templateReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEMPLATES_API_CALL:
    const { templates } =action.payload;

    return {
      ...state,
      templates: templates,
    };

    default:
      return state;
  }
};


export const getTemplates = state => state.templates  || [];
