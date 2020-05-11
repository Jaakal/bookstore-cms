import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = props => {
  const { books, filter } = props;
  const handleRemoveBook = book => {
    props.removeBook(book);
  };

  const handleFilterChange = e => {
    props.changeFilter(e.target.value);
  };
  const booksList = () => (filter === 'All' ? books : books.filter(book => book.category === filter));
  return (
    <div>
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <table>
        <thead>
          <tr>
            <th>Book ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {booksList().map(book => (
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
  changeFilter: () => undefined,
  filter: '',
};

/* eslint-disable react/forbid-prop-types */
BooksList.propTypes = {
  filter: PropTypes.string,
  books: PropTypes.array,
  removeBook: PropTypes.func,
  changeFilter: PropTypes.func,
};
/* eslint-enable react/forbid-prop-types */

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: book => {
    dispatch(
      removeBook(book),
    );
  },
  changeFilter: filter => {
    dispatch(changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
