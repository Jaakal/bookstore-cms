import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import App from './App';
import combinedReducers from './reducers/index';
import { addBook } from './actions/index';

import './css/reset.css';
import './css/index.css';

const store = createStore(
  combinedReducers,
);

store.dispatch(addBook({
  id: Math.floor(Math.random() * 1001).toString(),
  title: 'The richest man in babylon',
  category: 'Learning',
}));

store.dispatch(addBook({
  id: Math.floor(Math.random() * 1001).toString(),
  title: 'Laws of Business',
  category: 'Learning',
}));

store.dispatch(addBook({
  id: Math.floor(Math.random() * 1001).toString(),
  title: 'Good to Great',
  category: 'Learning',
}));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
