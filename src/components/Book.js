import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, clickHandler }) => {
  const remove = () => {
    clickHandler(book);
  };
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>
        {' '}
        <button onClick={remove} type="button">
          Remove Book
        </button>
        {' '}
      </td>
    </tr>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Book;
