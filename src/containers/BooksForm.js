import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';

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

  handleChange(e) {
    const { name, value } = e.target;
    if (name === 'title') {
      this.setState({ title: value });
    }
    if (name === 'categories') {
      this.setState({ category: value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, category } = this.state;
    const { createBook } = this.props;
    createBook({
      id: Math.floor(Math.random() * 100000),
      title,
      category,
    });
    this.setState({
      title: '',
      category: '',
    });
  }

  render() {
    const { category } = this.state;
    const categories = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];
    return (
      <div className="form-container">
        <h3>ADD NEW BOOK</h3>
        <form className="books-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Book Title"
            className="title-input"
            name="title"
            onChange={this.handleChange}
          />
          <select
            name="categories"
            onChange={this.handleChange}
            value={category}
          >
            <option default value>
              {' '}
              Category
              {' '}
            </option>
            {categories.map(category => (
              <option value={category} key={Math.floor(Math.random() * 100000)}>
                {category}
              </option>
            ))}
          </select>
          <input type="submit" value="ADD BOOK" />
        </form>
      </div>
    );
  }
}

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  createBook: book => dispatch(createBook(book)),
});
export default connect(null, mapDispatchToProps)(BooksForm);
