import { combineReducers } from 'redux';
import bookReducer from './books';
import filterReducer from './filter';

const bookStoreReducers = combineReducers({
  books: bookReducer,
  filter: filterReducer,
});

export default bookStoreReducers;
