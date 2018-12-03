import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { authenticationReducer } from '../services/auth/reducer';
import { taskReducer } from '../services/tasks/reducer';
import { catalogsReducer } from '../services/catalog/reducer';
import { errorReducer } from '../services/error/reducer';
import { usersReducer } from '../services/users/reducer';
import { templateReducer } from '../services/templates/reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['authenticationReducer']
};

export const createRootReducer = () => {
  const rootReducer = combineReducers({
    authenticationReducer: authenticationReducer,
    taskReducer: taskReducer,
    catalogsReducer: catalogsReducer,
    errorReducer: errorReducer,
    usersReducer: usersReducer,
    templateReducer:templateReducer
  });

  return persistReducer(persistConfig,rootReducer);
};
