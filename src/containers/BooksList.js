import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = ({ books, removeBook }) => {
  const handleRemoveBook = book => {
    removeBook(book);
  };

  return (
    <div className="books-list">
      <table>
        <tbody>
          {books.map(book => (
            <Book book={book} key={book.id} clickHandler={handleRemoveBook} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => ({ books: state.books });

const mapDispatchToProps = dispatch => ({
  removeBook: book => dispatch(removeBook(book)),
});

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
