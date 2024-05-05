// Import necessary functions and components from React, ReactDOM, and Redux
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';

// Create a root for the ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside the Provider component, which is connected to the Redux store
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
