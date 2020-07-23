const bookReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return { books: [...state.books, action.payload] };

    case 'REMOVE_BOOK':
      console.log(action.payload.target);
      return {
        books: state.books.map((book) => {
          if (book.id !== action.payload.id) {
            return book;
          }
          return null;
        }),
      };

    default:
      return state;
  }
};

export default bookReducer;
