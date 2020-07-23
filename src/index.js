import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import bookStoreReducers from './reducers';

const booksList = [
  {
    id: Math.floor(Math.random() * 100000),
    title: "Harry Potter and the Sorcerer's Stone",
    category: 'Action',
  },
  {
    id: Math.floor(Math.random() * 100000),
    title: 'The Lord of the Rings. Part 1: The Fellowship of the Ring',
    category: 'Action',
  },
  {
    id: Math.floor(Math.random() * 100000),
    title: 'The Art of Computer Programming',
    category: 'Learning"',
  },
  {
    id: Math.floor(Math.random() * 100000),
    title: 'At the Mountains of Madness',
    category: 'Horror',
  },
  {
    id: Math.floor(Math.random() * 100000),
    title: 'I, Robot',
    category: 'Sci-Fi',
  },
];

const defaultState = { books: booksList, filter: 'All' };

const store = createStore(bookStoreReducers, defaultState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
