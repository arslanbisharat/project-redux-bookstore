const bookReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return { books: [...state.books, action.payload] };

    case 'REMOVE_BOOK':
      return {
        books: state.books.filter((book) => book.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default bookReducer;
