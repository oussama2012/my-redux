import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';


import { Provider } from 'react-redux';
import Store from './rudex.js/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Provider store={Store}>
    <App />
  </Provider>
);


reportWebVitals();
