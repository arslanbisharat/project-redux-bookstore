import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from './Book';

const BooksList = ({ books }) => (
  <div className="bookslist">
    <tr>
      {books.map((book) => {
        return <Book book={book} />;
      })}
    </tr>
  </div>
);

const mapStateToProps = (state) => ({ books: state.books });

BooksList.defaultProps = {
  books: [],
};

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

export default connect(mapStateToProps)(BooksList);
