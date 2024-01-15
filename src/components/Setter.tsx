import { FocusEvent } from 'react';
import s from './Display.module.css';
import { Status, valuesType } from '../App';
import Button from './Button';

type PropsType = {
  values: valuesType;
  status: Status;
  changeValues: (name: string, value: number) => void;
  setNewValues: () => void;
  setStatus: (status: Status) => void;
};

const Setter = ({
  values,
  status,
  changeValues,
  setNewValues,
  setStatus,
}: PropsType) => {
  const error = status === Status.ERROR;
  const onChangeValuesHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, valueAsNumber } = e.currentTarget;

    changeValues(name, valueAsNumber);
  };

  const onFocusHandler = (e: FocusEvent<HTMLInputElement>) => {
    if (!error) setStatus(Status.SETTINGS);
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
      <div className="buttonsContainer">
        <Button name="set" isDisabled={error} onClick={setNewValues} />
      </div>
    </div>
  );
};

export default Setter;
