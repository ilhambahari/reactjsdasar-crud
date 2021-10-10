import React from 'react';
import ReactDOM from 'react-dom';
// import Lifecycle from './reactjsdasar/Lifecycle';
// import App from './App';
// import StateProps from './reactjsdasar/StateProps';
// import Map from './reactjsdasar/Map';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Crud from './crud'

ReactDOM.render(
  <React.StrictMode>
    <Crud />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
