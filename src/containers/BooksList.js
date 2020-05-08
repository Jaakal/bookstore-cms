import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = props => {
  const { books } = props;
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
            <Book key={book.id} book={book} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
BooksList.defaultProps = {
  books: [],
};
BooksList.propTypes = {
  books: PropTypes.objectOf(PropTypes.object),
};

const mapStateToProps = state => ({
  books: state.books,
});
export default connect(mapStateToProps, null)(BooksList);
