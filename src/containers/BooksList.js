import React, { Component } from 'react';
import {connect} from 'react-redux';
import Book from '../components/Book';

class BooksList extends Component {

  render() {
    const {books} = this.props;
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
          {books.map(book=><Book book={book}></Book>)}
          </tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
  return {
    books: state.books
  }
}
export default connect(mapStateToProps,null)(BooksList);