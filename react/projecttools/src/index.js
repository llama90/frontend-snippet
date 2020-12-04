import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppReactAPI from './AppReactAPI';
import AppJavascript from './AppJavascript';
import AppLint from './AppLint';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <App/>
    <AppReactAPI/>
    <AppJavascript/>
    <AppLint/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
