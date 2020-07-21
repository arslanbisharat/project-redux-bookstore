import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => <div>{book.id}</div>;

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
