import React from 'react';

function BooksForm() {
  const categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];
  return (
    <div className="booksform">
      <input type="text" placeholder="Book Title" />
      <select name="categories">
        {categories.map((category) => {
          return <option value={category}>{category}</option>;
        })}
      </select>
    </div>
  );
}

export default BooksForm;
