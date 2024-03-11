import { useState } from 'react';
import './App.css';
import Counter from './components-v1/Counter';
import Setter from './components-v1/Setter';

export type valuesType = { startValue: number; maxValue: number };

export enum Status {
  ERROR = 'error',
  SETTINGS = 'settings',
  COUNTER = 'counter',
}

function App() {
  const [values, setValues] = useState<valuesType>(() => {
    const valuesFromLocalStorage = localStorage.getItem('values');
    if (valuesFromLocalStorage) {
      return JSON.parse(valuesFromLocalStorage);
    }
    return {
      startValue: 0,
      maxValue: 5,
    };
  });
  const [displayValue, setDisplayValue] = useState(values.startValue);
  const [status, setStatus] = useState<Status>(Status.COUNTER);

  const changeValues = (name: string, value: number) => {
    if (
      (name === 'startValue' && value >= values.maxValue) ||
      (name === 'maxValue' && value <= values.startValue)
    ) {
      setStatus(Status.ERROR);
    } else {
      setStatus(Status.SETTINGS);
    }
    setValues({ ...values, [name]: value });
  };

  const setNewValues = () => {
    localStorage.setItem('values', JSON.stringify(values));
    setStatus(Status.COUNTER);
    setDisplayValue(values.startValue);
  };

  const incValue = () => {
    setDisplayValue(displayValue + 1);
  };

  const resetValue = () => {
    setDisplayValue(values.startValue);
  };

  return (
    <div className="App">
      <Setter
        values={values}
        status={status}
        setStatus={setStatus}
        changeValues={changeValues}
        setNewValues={setNewValues}
      />

      <Counter
        status={status}
        displayValue={displayValue}
        maxValue={values.maxValue}
        incValue={incValue}
        resetValue={resetValue}
      />
    </div>
  );
}

export default App;
