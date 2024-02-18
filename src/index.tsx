import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import AppWithRedux from './AppWithRedux';
import AppReduxLocalStorage from './AppReduxLocalStorage';
import { store } from './counterReduxLocalStorage/store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <AppReduxLocalStorage />
  </Provider>
);

reportWebVitals();
