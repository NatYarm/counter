import s from './Display.module.css';
import { valuesType } from '../App';
import { FocusEvent } from 'react';

type PropsType = {
  values: valuesType;
  error: boolean;
  changeValues: (name: string, value: number) => void;
  setMsg: (msg: string) => void;
};

const SettingsDisplay = ({
  values,
  error,
  changeValues,
  setMsg,
}: PropsType) => {
  const onChangeValuesHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, valueAsNumber } = e.currentTarget;

    changeValues(name, valueAsNumber);
  };

  const onFocusHandler = (e: FocusEvent<HTMLInputElement>) => {
    if (!error) setMsg("enter values and press 'set'");
  };

  return (
    <div className={`${s.display}  ${s.settings}`}>
      <div className={s.inputGroup}>
        <span>max value:</span>
        <input
          className={error ? 'inputError' : ''}
          type="number"
          min="0"
          step="1"
          name="maxValue"
          value={values.maxValue}
          onChange={onChangeValuesHandler}
          onFocus={onFocusHandler}
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
          value={values.startValue}
          onChange={onChangeValuesHandler}
          onFocus={onFocusHandler}
        />
      </div>
    </div>
  );
};

export default SettingsDisplay;
