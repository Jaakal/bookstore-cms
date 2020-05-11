import React from 'react';
import PropTypes from 'prop-types';

const CATEGORIES = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const CategoryFilter = props => {
  const { handleFilterChange } = props;
  return (
    <select className="filter-selection" onChange={e => handleFilterChange(e)}>
      <option defaultValue="All"> All</option>
      {CATEGORIES.map(category => (
        <option key={category} value={category}>{category}</option>
      ))}
    </select>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func,
};

CategoryFilter.defaultProps = {
  handleFilterChange: () => undefined,
};

export default CategoryFilter;
