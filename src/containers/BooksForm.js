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
        {categories.map(category => (
          <option value={category} key={Math.floor(Math.random() * 100000)}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default BooksForm;
