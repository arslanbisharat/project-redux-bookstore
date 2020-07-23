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

  const filterByCategory = e => {
    const { value } = e.target;
    if (value === 'All') {
      clickHandler(null);
    } else {
      clickHandler(value);
    }
  };

  return (
    <div>
      <select name="categories" onChange={filterByCategory} className="filter">
        <option default value>
          {' '}
          CATEGORIES
          {' '}
        </option>
        {categories.map(category => (
          <option value={category} key={Math.floor(Math.random() * 100000)}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default CategoryFilter;
