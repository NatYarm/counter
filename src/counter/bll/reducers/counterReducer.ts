export type ValuesType = {
  startValue: number;
  displayValue: number;
  maxValue: number;
};

const initialState: ValuesType = {
  startValue: 0,
  maxValue: 5,
  displayValue: 0,
};

export const counterReducer = (
  state: ValuesType = initialState,
  action: ActionsType
): ValuesType => {
  switch (action.type) {
    case 'INCREMENT_DISPLAY_VALUE':
      return {
        ...state,
        displayValue: state.displayValue + 1,
      };

    case 'RESET_DISPLAY_VALUE':
      return {
        ...state,
        displayValue: state.startValue,
      };

    case 'SET_DISPLAY_VALUE':
      return {
        ...state,
        displayValue: state.startValue,
      };

    case 'SET_NEW_VALUES':
      return {
        ...state,
        [action.fieldName]: action.newValue,
      };

    default:
      return state;
  }
};

type ActionsType =
  | IncrementValueActionType
  | ResetDisplayValueActionType
  | SetNewDisplayValueActionType
  | SetNewValuesActionType;

type IncrementValueActionType = ReturnType<typeof incValueAC>;
export const incValueAC = () => ({ type: 'INCREMENT_DISPLAY_VALUE' } as const);

type ResetDisplayValueActionType = ReturnType<typeof resetDisplayValueAC>;
export const resetDisplayValueAC = () =>
  ({ type: 'RESET_DISPLAY_VALUE' } as const);

type SetNewDisplayValueActionType = ReturnType<typeof setNewDisplayValueAC>;
export const setNewDisplayValueAC = () =>
  ({ type: 'SET_DISPLAY_VALUE' } as const);

type SetNewValuesActionType = ReturnType<typeof setNewValuesAC>;
export const setNewValuesAC = (fieldName: string, newValue: number) =>
  ({ type: 'SET_NEW_VALUES', fieldName, newValue } as const);
