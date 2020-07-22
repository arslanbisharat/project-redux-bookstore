const bookReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      console.log(state);
      return { books: [...state.books, action.payload] };

    case 'REMOVE_BOOK':
      return null;

    default:
      return state;
  }
};

export default bookReducer;
