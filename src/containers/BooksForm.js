import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { addBook } from '../actions/index';

import '../css/books-form.css';


const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
class BooksForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: 'default',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newState = event.target.id === 'title' ? { title: event.target.value } : { category: event.target.value };

    this.setState(newState);
  }

  handleSubmit(event) {
    event.preventDefault();

    const { addBook } = this.props;

    addBook(this.state);

    this.setState({
      title: '',
      category: 'default',
    });
  }

  render() {
    return (
      <div className="form-wrapper">
        <h2 className="title">Add new book</h2>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Book title" onChange={this.handleChange} id="title" name="title" />

          <div className="select-wrapper">
            <div className="arrow-down" />
            <select onChange={this.handleChange} id="category">
              <option value="default">Category</option>
              {CATEGORIES.map(category => <option key={category}>{category}</option>)}
            </select>
          </div>

          <button type="submit">Add Book</button>
        </form>
      </div>
    );
  }
}

BooksForm.defaultProps = {
  addBook: () => undefined,
};

BooksForm.propTypes = {
  addBook: PropTypes.func,
};

const mapDispatchToProps = dispatch => ({
  addBook: state => {
    dispatch(
      addBook(
        {
          id: Math.floor(Math.random() * 1001).toString(),
          title: state.title,
          category: state.category,
        },
      ),
    );
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
