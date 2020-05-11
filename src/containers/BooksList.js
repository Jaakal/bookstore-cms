import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

import '../css/books-list.css';

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
      <div className="navbar-wrapper">
        <div className="logo">Bookstore CMS</div>
        <CategoryFilter handleFilterChange={handleFilterChange} />
      </div>

      <div className="book-board">
        {booksList().map(book => (
          <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook} />
        ))}
      </div>
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
