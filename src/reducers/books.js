const bookReducer = (state, action) => {
  switch (action.type) {
    case 'CREATE_BOOk':
      return [
        ...state,
        { id: action.id, title: action.title, category: action.category },
      ];

    case 'REMOVE_BOOK':
      return null;

    default:
      return state;
  }
};

export default bookReducer;
