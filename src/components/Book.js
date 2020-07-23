import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, clickHandler }) => {
  const remove = () => {
    clickHandler(book);
  };
  return (
    <tr>
      <td className="left-td">
        <div className="book-information-container">
          <div className="book-category">{book.category}</div>
          <div className="book-title roboto">{book.title}</div>
          <div className="book-id roboto">{book.id}</div>

          <div className="left-side-links">
            <div className="book-id">Comments</div>
            <div className="separator" />
            <div className="book-id roboto ">
              <button onClick={remove} type="button">
                Remove Book
              </button>
              {' '}
            </div>
            <div className="separator" />
            <div className="book-id">Edit</div>
          </div>
        </div>
      </td>
      <td className="center-td">
        <div className="percent-circle" />
        <div className="percent-info">
          <div className="percent-number">
            {Math.floor(Math.random() * 100)}
            %
          </div>
          <div className="percent-completed">Completed</div>
        </div>
      </td>

      <td className="right-td roboto">
        <div className="current-chapter">CURRENT CHAPTER</div>
        <div className="chapter-number">
          Chapter
          {' '}
          {Math.floor(Math.random() * 20)}
        </div>
        <div className="update-progress">UPDATE PROGRESS</div>
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
