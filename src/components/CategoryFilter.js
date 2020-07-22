import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({ clickHandler }) => {
  const categories = [
    'All',
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi',
  ];

  const filterByCategory = (e) => {
    const { value } = e.target;
    clickHandler(value);
  };

  return (
    <div>
      <select name="categories" onChange={filterByCategory}>
        {categories.map((category) => (
          <option value={category} key={Math.floor(Math.random() * 100000)}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
