import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import bookReducer from './reducers/books';

const booksList = [
  {
    id: Math.floor(Math.random() * 100000),
    title: 'HP 1',
    category: 'Kids',
  },
  { id: Math.floor(Math.random() * 100000), title: 'HP 2', category: 'Action' },
  {
    id: Math.floor(Math.random() * 100000),
    title: 'HP 3',
    category: 'Learning"',
  },
  { id: Math.floor(Math.random() * 100000), title: 'HP 4', category: 'Horror' },
  { id: Math.floor(Math.random() * 100000), title: 'HP 5', category: 'Sci-Fi' },
];

const defaultState = { books: booksList };

const store = createStore(bookReducer, defaultState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
