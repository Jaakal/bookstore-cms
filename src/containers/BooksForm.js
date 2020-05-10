import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addBook } from '../actions/index';


const CATEGORIES = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
class BooksForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: '',
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
    document.getElementById('category').value = 'Select a category';

    this.setState({
      title: '',
      category: '',
    });
  }

  render() {
    const { title } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">
          Book Title
          <input onChange={this.handleChange} id="title" name="title" value={title} autoComplete="off" />
        </label>

        <label htmlFor="category">
          Book Category
          <select onChange={this.handleChange} id="category">
            <option>Select a category</option>
            {CATEGORIES.map(category => <option key={category}>{category}</option>)}
          </select>
        </label>

        <button type="submit">Create Book</button>
      </form>
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
