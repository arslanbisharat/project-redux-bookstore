import React from "react";
import PropTypes from 'prop-types';

  const CategoryFilter = () => {
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
          <div>
            <select name="categories">
            <option default value>
            {' '}
            -- Filter --
            {' '}
          </option>
          {categories.map(category => (
            <option value={category} key={Math.floor(Math.random() * 100000)}>
              {category}
            </option>
          ))}
          </select>

          </div>
      )
  }

export default CategoryFilter;
