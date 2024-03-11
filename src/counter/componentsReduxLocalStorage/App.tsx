import CounterDisplay from './CounterDisplay';
import SettingsDisplay from './SettingsDisplay';
import '../../App.css';

function App() {
  return (
    <div className="App">
      <SettingsDisplay />
      <CounterDisplay />
    </div>
  );
}

export default App;
