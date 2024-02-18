import './App.css';

import CounterDisplay from './counterWithRedux/componentsWithRedux/CounterDisplay';
import SettingsDisplay from './counterWithRedux/componentsWithRedux/SettingsDisplay';

function AppWithRedux() {
  return (
    <div className="App">
      <SettingsDisplay />
      <CounterDisplay />
    </div>
  );
}

export default AppWithRedux;
