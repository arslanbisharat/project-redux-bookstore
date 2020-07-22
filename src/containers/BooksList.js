import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ books, removeBook, filter, changeFilter }) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  const handleFilterChange = (filter) => {
    changeFilter(filter);
  };

  return (
    <div className="books-list">
      <CategoryFilter category={filter} clickHandler={handleFilterChange} />
      <table>
        <tbody>
          {books.map((book) => {
            console.log(filter);
            if (filter === 'All' || !filter) {
              return (
                <Book
                  book={book}
                  key={book.id}
                  clickHandler={handleRemoveBook}
                />
              );
            } else if (filter === book.category) {
              return (
                <Book
                  book={book}
                  key={book.id}
                  clickHandler={handleRemoveBook}
                />
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => dispatch(removeBook(book)),
  changeFilter: (filter) => dispatch(changeFilter(filter)),
});

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
