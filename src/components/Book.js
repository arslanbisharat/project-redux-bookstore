import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, clickHandler }) => {
  console.log(clickHandler);
  return (
    <tr>
      <td>{book.id}</td>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>
        {' '}
        <button onClick={clickHandler}>Remove Book</button>{' '}
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
};

export default Book;
