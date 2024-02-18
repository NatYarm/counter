import { combineReducers, legacy_createStore } from 'redux';
import { counterReducer } from '../reducers/counterReducer';

const rootReducer = combineReducers({
  values: counterReducer,
});

export const store = legacy_createStore(rootReducer);

export type AppRootState = ReturnType<typeof rootReducer>;

//@ts-ignore
window.store = store;
