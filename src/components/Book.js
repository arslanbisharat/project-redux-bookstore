import React from 'react';

function Book(book) {
  const { book } = book;
  return <div className="book">{book}</div>;
}

export default Book;
