import { ValuesType } from '../bll/reducers/counterReducer';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('counterState');
    if (serializedState === null) {
      return undefined;
    }
    return { values: JSON.parse(serializedState) };
  } catch (error) {
    return undefined;
  }
};

export const saveState = (state: ValuesType) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('counterState', serializedState);
  } catch (error) {
    throw new Error(
      'Something went wrong. State cannot be saved to local storage.'
    );
  }
};

//these 2 fns to save state on 'set' button click implementation

// export const saveState = <T>(key: string, state: T) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem(key, serializedState);
//   } catch (error) {
//     throw new Error(
//       'Something went wrong. State cannot be saved to local storage.'
//     );
//   }
// };

// export const restoreState = <T>(key: string, defaultState: T) => {
//   let state = defaultState;
//   const stateAsString = localStorage.getItem(key);
//   if (stateAsString !== null) state = JSON.parse(stateAsString) as T;
//   return state;
// };
