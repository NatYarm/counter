import s from '../../components/Display.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  Status,
  setNewValuesAC,
  changeStatusAC,
  setNewDisplayValueAC,
} from '../reducers/counterReducer';
import Button from '../../components/Button';
import { valuesSelector } from '../store/selector';

const SettingsDisplay = () => {
  const values = useSelector(valuesSelector);
  const { startValue, maxValue, status } = values;
  const dispatch = useDispatch();
  const error = status === Status.ERROR;

  const onChangeValuesHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, valueAsNumber } = e.currentTarget;

    if (
      (name === 'startValue' && valueAsNumber >= maxValue) ||
      (name === 'maxValue' && valueAsNumber <= startValue)
    ) {
      dispatch(changeStatusAC(Status.ERROR));
    } else {
      dispatch(changeStatusAC(Status.SETTINGS));
    }

    dispatch(setNewValuesAC(name, valueAsNumber));
  };

  const setNewDispayValueHandler = () => {
    dispatch(setNewDisplayValueAC());
    dispatch(changeStatusAC(Status.COUNTER));
  };

  return (
    <div className="container">
      <div className={`${s.display}  ${s.settings}`}>
        <div className={s.inputGroup}>
          <span>max value:</span>
          <input
            className={error ? 'inputError' : ''}
            type="number"
            min="0"
            step="1"
            name="maxValue"
            value={maxValue}
            onChange={onChangeValuesHandler}
          />
        </div>
        <div className={s.inputGroup}>
          <span>start value:</span>
          <input
            className={error ? 'inputError' : ''}
            type="number"
            min="0"
            step="1"
            name="startValue"
            value={startValue}
            onChange={onChangeValuesHandler}
          />
        </div>
      </div>
      <div className="buttonsContainer">
        <Button
          name="set"
          isDisabled={error}
          onClick={setNewDispayValueHandler}
        />
      </div>
    </div>
  );
};

export default SettingsDisplay;
