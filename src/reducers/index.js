import bookReducer from './books';
import filterReducer from './filter';
import { combineReducers } from 'redux';

const bookStoreReducers = combineReducers({
  books: bookReducer,
  filter: filterReducer,
});

export default bookStoreReducers;
