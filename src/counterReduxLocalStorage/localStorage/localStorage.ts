import { ValuesType } from '../reducers/counterReducer';

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
