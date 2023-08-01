import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
<Provider store={store}>
<React.StrictMode>
<PersistGate loading={<div>Loading...</div>} persistor={persistor}>
    <App />
    </PersistGate>
  </React.StrictMode>
</Provider>
);
