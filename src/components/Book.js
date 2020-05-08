import React from 'react';
import PropTypes from 'prop-types';

import '../css/book.css';

const Book = props => {
  const { book, handleRemoveBook } = props;
  const { title, category } = book;

  const handleRemoveBookClosure = () => {
    handleRemoveBook(book);
  };

  return (
    <div className="book-card">
      <div className="book-card-info">
        <div className="category">{category}</div>
        <div className="title">{title}</div>
      </div>
      <button onClick={handleRemoveBookClosure} type="button">Remove Book</button>
    </div>
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
