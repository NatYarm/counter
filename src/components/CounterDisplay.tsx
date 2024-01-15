import s from './Display.module.css';
import { Status } from '../App';

type PropsType = {
  displayValue: number;
  maxValue: number;
  errorMsg?: string;
  msg?: string;
  status: Status;
};
const CounterDisplay = ({
  displayValue,
  maxValue,
  msg,
  errorMsg,
  status,
}: PropsType) => {
  const classNames = `
	${s.display}
	${status ? s.msg : errorMsg ? s.errorMsg : s.counter}
	${displayValue === maxValue ? s.limit : ''}
`;

  const display: Record<Status, string> = {
    [Status.ERROR]: 'Invalid input value!',
    [Status.SETTINGS]: "enter values and press 'set'",
    [Status.COUNTER]: String(displayValue),
  };

  return <div className={classNames}>{display[status]}</div>;
};

export default CounterDisplay;
// export enum Status {
//   ERROR = 'error',
//   SETTINGS = 'settings',
//   COUNTER = 'counter',
// }
