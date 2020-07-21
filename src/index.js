import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import book from './reducers/books';

book(
  { id: null, title: null, category: null },
  {
    type: 'ADD_BOOK',
    id: Math.floor(Math.random() * 100000),
    title: 'HP 1',
    category: 'Kids',
  }
);

// const store = createStore([
//   { id: Math.floor(Math.random() * 100000), title: 'HP 2', category: 'Action' },
//   {
//     id: Math.floor(Math.random() * 100000),
//     title: 'HP 3',
//     category: 'Learning"',
//   },
//   { id: Math.floor(Math.random() * 100000), title: 'HP 4', category: 'Horror' },
//   { id: Math.floor(Math.random() * 100000), title: 'HP 5', category: 'Sci-Fi' },
// ]);

const store = createStore(book);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
