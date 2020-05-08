import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import combinedReducers from './reducers/index';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
const store = createStore(
  combinedReducers
);
store.dispatch({
  type:'ADD_BOOK',
  book:{
    id:Math.random,
    title:'48 laws of power',
    category:'Learning'
  }
})
store.dispatch({
  type:'ADD_BOOK',
  book:{
    id:Math.random,
    title:'Laws of Business',
    category:'Learning'
  }
})
store.dispatch({
  type:'ADD_BOOK',
  book:{
    id:Math.random,
    title:'Good to Great',
    category:'Learning'
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
