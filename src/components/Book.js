import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book } = props;
  const { id, title, category } = book;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};

Book.defaultProps = {
  book: {
    id: '',
    title: '',
    category: '',
  },
};
Book.propTypes = {
  book: PropTypes.objectOf(PropTypes.object),
};

export default Book;
