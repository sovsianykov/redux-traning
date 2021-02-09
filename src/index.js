import React from 'react';
import {createStore} from "redux";
// import {Provider} from 'react-redux'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// const store = createStore()
// window.store = store

// console.log(store.getStore())

ReactDOM.render(
  <React.StrictMode>
      {/*<Provider>*/}
          <App />
      {/*</Provider>*/}
  </React.StrictMode>,
  document.getElementById('root')
);
