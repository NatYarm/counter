import { combineReducers, legacy_createStore } from 'redux';
import { loadState, saveState } from '../localStorage/localStorage';
import { counterReducer } from '../reducers/counterReducer';

const persistedState = loadState();

const rootReducer = combineReducers({
  values: counterReducer,
});

export const store = legacy_createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState().values);
});
console.log(store.getState());
console.log(persistedState);

export type AppRootState = ReturnType<typeof rootReducer>;

//@ts-ignore
window.store = store;
