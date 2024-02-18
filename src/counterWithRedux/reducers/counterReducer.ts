export type ValuesType = {
  startValue: number;
  displayValue: number;
  maxValue: number;
  status: Status;
};

export enum Status {
  ERROR = 'error',
  SETTINGS = 'settings',
  COUNTER = 'counter',
}

const initialState: ValuesType = {
  startValue: 0,
  maxValue: 5,
  displayValue: 0,
  status: Status.COUNTER,
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

    case 'SET_NEW_DISPLAY_VALUE':
      return {
        ...state,
        displayValue: state.startValue,
      };

    case 'SET_NEW_VALUES':
      return {
        ...state,
        [action.fieldName]: action.newValue,
      };

    case 'CHANGE_STATUS': {
      return {
        ...state,
        status: action.newStatus,
      };
    }

    default:
      return state;
  }
};

type ActionsType =
  | IncrementValueActionType
  | ResetDisplayValueActionType
  | SetNewDisplayValueActionType
  | SetNewValuesActionType
  | ChangeStatusActionType;

type IncrementValueActionType = ReturnType<typeof incValueAC>;
export const incValueAC = () => {
  return { type: 'INCREMENT_DISPLAY_VALUE' } as const;
};

type ResetDisplayValueActionType = ReturnType<typeof resetDisplayValueAC>;
export const resetDisplayValueAC = () => {
  return { type: 'RESET_DISPLAY_VALUE' } as const;
};

type SetNewDisplayValueActionType = ReturnType<typeof setNewDisplayValueAC>;
export const setNewDisplayValueAC = () => {
  return { type: 'SET_NEW_DISPLAY_VALUE' } as const;
};

type SetNewValuesActionType = ReturnType<typeof setNewValuesAC>;
export const setNewValuesAC = (fieldName: string, newValue: number) => {
  return { type: 'SET_NEW_VALUES', fieldName, newValue } as const;
};

type ChangeStatusActionType = ReturnType<typeof changeStatusAC>;
export const changeStatusAC = (newStatus: Status) => {
  return { type: 'CHANGE_STATUS', newStatus } as const;
};

// type ChangeStartValueActionType = ReturnType<typeof changeStartValueAC>;
// export const changeStartValueAC = (newStartValue: number) => {
//   return { type: 'CHANGE_START_VALUE', newStartValue } as const;
// };

// type ChangeMaxValueActionType = ReturnType<typeof changeMaxValueAC>;
// export const changeMaxValueAC = (newMaxValue: number) => {
//   return { type: 'CHANGE_MAX_VALUE', newMaxValue } as const;
// };
