const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK: {
      const newState = [...state];
      const index = state.indexOf(action.book);
      newState.splice(index, 1);
      return newState;
    }
    default:
      return state;
  }
};
