import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/Button';
import {
  incValueAC,
  resetDisplayValueAC,
} from '../bll/reducers/counterReducer';
import s from '../../components/Display.module.css';
import { valuesSelector } from '../bll/store/selectors/valuesSelector';
import { Status } from '../bll/reducers/statusReducer';

import { statusSelector } from '../bll/store/selectors/statusSelector';

const CounterDisplay = () => {
  const { maxValue, displayValue } = useSelector(valuesSelector);
  const status = useSelector(statusSelector);
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
    [Status.COUNTER]: String(displayValue),
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
