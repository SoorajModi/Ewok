import React from 'react';
import PropTypes from 'prop-types';
import HomeTable from './homeTable';

function List({ items, fallback }) {
  if (!items || items.length === 0) {
    return fallback;
  }
  return <HomeTable data={items} />;
}

List.defaultProps = {
  items: null,
  fallback: null,
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      birth_year: PropTypes.string,
      height: PropTypes.string,
      mass: PropTypes.string,
    }),
  ),
  fallback: PropTypes.object,
};

export default List;
