import {Reducer} from 'redux';
import {BooksTypes, BooksState} from './types';

const INITIAL_STATE: BooksState = {
  loading: false,
  books: [],
  booksHasError: false,

  book: null,
  bookHasError: false,
};

const reducer: Reducer<BooksState> = (
  state = INITIAL_STATE,
  {type, payload},
) => {
  switch (type) {
    case BooksTypes.GET_BOOKS_LIST:
      return {
        ...state,
        loading: true,
      };

    case BooksTypes.GET_BOOKS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        books: payload.books,
        booksHasError: false,
      };

    case BooksTypes.GET_BOOKS_LIST_ERROR:
      return {
        ...state,
        loading: false,
        booksHasError: true,
      };
    case BooksTypes.GET_BOOK:
      return {
        ...state,
        loading: true,
      };
    case BooksTypes.GET_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        book: payload.book,
        bookHasError: false,
      };
    case BooksTypes.GET_BOOK_ERROR:
      return {
        ...state,
        loading: false,
        bookHasError: true,
        book: null,
      };
    default:
      return state;
  }
};

export default reducer;
