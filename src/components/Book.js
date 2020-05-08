import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book, handleRemoveBook } = props;
  const { id, title, category } = book;

  const handleRemoveBookClosure = () => {
    handleRemoveBook(book);
  };

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button onClick={handleRemoveBookClosure} type="button">Remove Book</button></td>
    </tr>
  );
};

Book.defaultProps = {
  book: {
    id: '',
    title: '',
    category: '',
  },
  handleRemoveBook: () => undefined,
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
  }),
  handleRemoveBook: PropTypes.func,
};

export default Book;
