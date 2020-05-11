import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions/index';

const BooksList = props => {
  const { books } = props;

  const handleRemoveBook = book => {
    props.removeBook(book);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

BooksList.defaultProps = {
  books: [],
  removeBook: () => undefined,
};

/* eslint-disable react/forbid-prop-types */
BooksList.propTypes = {
  books: PropTypes.array,
  removeBook: PropTypes.func,
};
/* eslint-enable react/forbid-prop-types */

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(
      removeBook(book),
    );
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
