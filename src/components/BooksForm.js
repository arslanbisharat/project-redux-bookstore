import React from 'react';
import { connect } from 'react-redux';
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
    this.props.createBook({
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
      <form className="books-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          name="title"
          onChange={this.handleChange}
        />
        <select
          name="categories"
          onChange={this.handleChange}
          value={this.state.category}
        >
          <option default value>
            {' '}
            -- select an option --{' '}
          </option>
          {categories.map((category) => (
            <option value={category} key={Math.floor(Math.random() * 100000)}>
              {category}
            </option>
          ))}
        </select>
        <input type="submit" value="Add book" />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => dispatch(createBook(book)),
});
export default connect(null, mapDispatchToProps)(BooksForm);
