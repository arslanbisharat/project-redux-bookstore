import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <div className="bookslist">
    <table>
      <tbody>
        {books.map(book => (
          <Book book={book} key={book.id} />
        ))}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = state => ({ books: state.books });

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps)(BooksList);
