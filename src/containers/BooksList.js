import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, removeBook, filter, changeFilter,
}) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  const handleFilterChange = filter => {
    changeFilter(filter);
  };

  return (
    <div className="books-list">
      <div className="navbar">
        <div className="left-items-container">
          <div className="logo">Bookstore CMS</div>
          <div className="option">BOOKS</div>
          <div className="option">
            <CategoryFilter
              category={filter}
              clickHandler={handleFilterChange}
            />
          </div>
        </div>

        <div className="profile-container">
          <i className="fas fa-user-alt" />
        </div>
      </div>
      <table>
        <tbody>
          {books.map(book => {
            if (filter === 'All' || !filter) {
              return (
                <Book
                  book={book}
                  key={book.id}
                  clickHandler={handleRemoveBook}
                />
              );
            }
            if (filter === book.category) {
              return (
                <Book
                  book={book}
                  key={book.id}
                  clickHandler={handleRemoveBook}
                />
              );
            }
            return false;
          })}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

BooksList.defaultProps = {
  books: [],
  filter: null,
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
