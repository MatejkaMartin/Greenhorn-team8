import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authentication } from '../reducers/authentication.reducer';

const persistConfig = {
  key: 'root',
  storage,
};

export const createRootReducer = () => {
  const rootReducer = combineReducers({
    authentication: authentication,
  });

  return persistReducer(persistConfig,rootReducer);
};
