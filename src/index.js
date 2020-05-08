import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import combinedReducers from './reducers/index';

const store = createStore(
  combinedReducers,
);
store.dispatch({
  type: 'CREATE_BOOK',
  book: {
    id: '1',
    title: 'The richest man in babylon',
    category: 'Learning',
  },
});
store.dispatch({
  type: 'CREATE_BOOK',
  book: {
    id: '2',
    title: 'Laws of Business',
    category: 'Learning',
  },
});
store.dispatch({
  type: 'CREATE_BOOK',
  book: {
    id: '3',
    title: 'Good to Great',
    category: 'Learning',
  },
});

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
