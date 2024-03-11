export enum Status {
  ERROR = 'error',
  SETTINGS = 'settings',
  COUNTER = 'counter',
}
type ActionsType = ChangeStatusActionType;

export const statusReducer = (
  state = Status.COUNTER,
  action: ActionsType
): Status => {
  switch (action.type) {
    case 'CHANGE_STATUS': {
      return action.newStatus;
    }
    default:
      return state;
  }
};

type ChangeStatusActionType = ReturnType<typeof changeStatusAC>;
export const changeStatusAC = (newStatus: Status) =>
  ({ type: 'CHANGE_STATUS', newStatus } as const);
