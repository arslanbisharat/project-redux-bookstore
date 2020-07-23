import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <div className="bookslist">
    <table>
      <tbody>
        {books.map(book => (
        <div>
          <Book book={book} key={book.id} />
          <button id= "removeButton">Remove</button>
        </div>
          
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
  removeBook: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(BooksList);
