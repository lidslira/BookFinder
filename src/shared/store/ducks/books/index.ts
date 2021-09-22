import {Reducer} from 'redux';
import {UserTypes} from '../user/types';
import {BooksTypes, BooksState} from './types';

const INITIAL_STATE: BooksState = {
  loading: false,
  books: [],
  booksHasError: false,
  totalBooksFound: 0,

  book: {
    kind: '',
    id: '',
    etag: '',
    selfLink: '',
    volumeInfo: {
      title: '',
      categories: [''],
      publisher: '',
      authors: [''],
      description: '',
      infoLink: '',
      publishedDate: '',
      imageLinks: {
        thumbnail: '',
      },
    },
    saleInfo: [],
    accessInfo: [],
    searchInfo: [],
  },
  bookHasError: false,
};

const reducer: Reducer<BooksState> = (
  state = INITIAL_STATE,
  {type, payload},
) => {
  switch (type) {
    case UserTypes.LOGOUT:
      return INITIAL_STATE;

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
        totalBooksFound: payload.totalItems,
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
      };

    case BooksTypes.CLEAN_BOOK_LIST:
      return INITIAL_STATE;

    default:
      return state;
  }
};

export default reducer;
