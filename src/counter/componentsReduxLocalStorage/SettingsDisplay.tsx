import s from '../../components/Display.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  setNewValuesAC,
  setNewDisplayValueAC,
} from '../bll/reducers/counterReducer';
import Button from '../../components/Button';
import { valuesSelector } from '../bll/store/selectors/valuesSelector';
import { Status, changeStatusAC } from '../bll/reducers/statusReducer';
import { statusSelector } from '../bll/store/selectors/statusSelector';
//import { restoreState, saveState } from '../localStorage/localStorage';

const SettingsDisplay = () => {
  const status = useSelector(statusSelector);
  const { startValue, maxValue } = useSelector(valuesSelector);
  //const allValues = useSelector(valuesSelector);

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
    // const currentState = restoreState('counterState', {});
    // saveState('counterState', { ...currentState, ...allValues });

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
            value={isNaN(maxValue) ? '' : maxValue}
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
            value={isNaN(startValue) ? '' : startValue}
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

//commented code is for saving values to local storage on 'set' button click
