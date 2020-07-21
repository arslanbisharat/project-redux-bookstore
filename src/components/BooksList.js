import React from 'react';
import Book from './Book';

function BooksList() {
  return (
    <div className="bookslist">
      <tr>
        <td>
          <Book />
        </td>
        <td>
          <Book />
        </td>
        <td>
          <Book />
        </td>
      </tr>
    </div>
  );
}

export default BooksList;
