import React from 'react';

export default class BooksForm extends React.Component {
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
      this.setState({ title: e.target.value });
    }
    if (name === 'categories') {
      this.setState({ category: e.target.value });
    }
  }

  handleSubmit(e) {}

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
