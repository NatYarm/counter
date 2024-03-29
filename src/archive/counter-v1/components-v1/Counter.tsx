import { Status } from '../App-v1';
import Button from '../../../components/Button';
import s from './Display.module.css';

type PropsType = {
  displayValue: number;
  maxValue: number;
  status: Status;
  incValue: () => void;
  resetValue: () => void;
};

const Counter = ({
  displayValue,
  maxValue,
  status,
  incValue,
  resetValue,
}: PropsType) => {
  const error = status === Status.ERROR;

  const display: Record<Status, string> = {
    [Status.ERROR]: 'Invalid input value!',
    [Status.SETTINGS]: "enter values and press 'set'",
    [Status.COUNTER]: String(displayValue),
  };

  const classNames = `
	${s.display}
	${
    status === Status.SETTINGS
      ? s.msg
      : status === Status.ERROR
      ? s.errorMsg
      : s.counter
  }
	${displayValue === maxValue ? s.limit : ''}
`;

  return (
    <div className="container">
      <div className={classNames}>{display[status]}</div>
      <div className="buttonsContainer">
        <Button
          name="inc"
          onClick={incValue}
          isDisabled={error || displayValue === maxValue}
        />
        <Button name="reset" onClick={resetValue} isDisabled={error} />
      </div>
    </div>
  );
};

export default Counter;
