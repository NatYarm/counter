import { statusReducer } from '../reducers/statusReducer';
import { combineReducers, legacy_createStore } from 'redux';
import { loadState, saveState } from '../../localStorage/localStorage';
import { counterReducer } from '../reducers/counterReducer';

const persistedState = loadState();

const rootReducer = combineReducers({
  values: counterReducer,
  status: statusReducer,
});

export const store = legacy_createStore(rootReducer, persistedState);

store.subscribe(() => {
  saveState(store.getState().values);
});

export type AppStateType = ReturnType<typeof rootReducer>;

//@ts-ignore
window.store = store;

// This variant to save values on 'set' button click implementation
// store.subscribe(() => {
//   const currentState = restoreState('counterState', {});
//   //saveState(store.getState().values);
//   saveState('counterState', {
//     ...currentState,
//     displayValue: store.getState().values.displayValue,
//   });
// });
