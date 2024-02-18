import './App.css';
import CounterDisplay from './counterReduxLocalStorage/componentsReduxLocalStorage/CounterDisplay';
import SettingsDisplay from './counterReduxLocalStorage/componentsReduxLocalStorage/SettingsDisplay';

function AppReduxLocalStorage() {
  return (
    <div className="App">
      <SettingsDisplay />
      <CounterDisplay />
    </div>
  );
}

export default AppReduxLocalStorage;
