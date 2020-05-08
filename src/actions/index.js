const CREATE_BOOK = "CREATE_BOOK";
const REMOVE_BOOK = "REMOVE_BOOK";

export const addBook = (book) => {
  return {
    type: CREATE_BOOK,
    book,
  };
};

export const removeBook = (book) => {
  return {
    type: REMOVE_BOOK,
    book,
  };
};
