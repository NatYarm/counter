import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import {
  Status,
  incValueAC,
  resetDisplayValueAC,
} from '../reducers/counterReducer';
import s from '../../components/Display.module.css';
import { useSelector } from 'react-redux';
import { valuesSelector } from '../store/selector';

const CounterDisplay = () => {
  const values = useSelector(valuesSelector);
  const { maxValue, displayValue, status } = values;
  const dispatch = useDispatch();

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

  const error = status === Status.ERROR;
  const buttonDisabled =
    error || displayValue === maxValue || status === Status.SETTINGS;

  const display: Record<Status, string> = {
    [Status.ERROR]: 'Invalid input value!',
    [Status.SETTINGS]: "enter values and press 'set'",
    [Status.COUNTER]: String(values.displayValue),
  };

  const resetDisplayValue = () => {
    dispatch(resetDisplayValueAC());
  };

  const incrementDisplayValue = () => {
    dispatch(incValueAC());
  };

  return (
    <div className="container">
      <div className={classNames}>{display[status]}</div>
      <div className="buttonsContainer">
        <Button
          name="inc"
          onClick={incrementDisplayValue}
          isDisabled={buttonDisabled}
        />
        <Button name="reset" onClick={resetDisplayValue} isDisabled={error} />
      </div>
    </div>
  );
};

export default CounterDisplay;
