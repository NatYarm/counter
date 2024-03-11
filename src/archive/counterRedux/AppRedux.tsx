import './App.css';

import CounterDisplay from './componentsWithRedux/CounterDisplay';
import SettingsDisplay from './componentsWithRedux/SettingsDisplay';

function AppRedux() {
  return (
    <div className="App">
      <SettingsDisplay />
      <CounterDisplay />
    </div>
  );
}

export default AppRedux;
