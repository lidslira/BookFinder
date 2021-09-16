import {Action} from 'redux';

export enum BooksTypes {
  GET_BOOKS_LIST = 'GET_BOOKS_LIST',
  GET_BOOKS_LIST_SUCCESS = 'GET_BOOKS_LIST_SUCCESS',
  GET_BOOKS_LIST_ERROR = 'GET_BOOKS_LIST_ERROR',

  GET_BOOK = 'GET_BOOK',
  GET_BOOK_SUCCESS = 'GET_BOOK_SUCCESS',
  GET_BOOK_ERROR = 'GET_BOOK_ERROR',
}

export interface BookData {
  id: string;
  volumeInfo: {
    title: string;
    categories?: string[];
    publisher?: string;
    authors: string[];
    description: string;
    infoLink: string;
    publishedDate: string;
    imageLinks?: {
      thumbnail: string;
    };
  };
}

export interface BooksState {
  loading: boolean;
  books: [];
  booksHasError: boolean;
  book: string | null;
  bookHasError: boolean;
}

export interface GetBooksListProps extends Action {
  type: BooksTypes.GET_BOOKS_LIST;
  payload: {text: string};
}

export interface GetBooksListSuccessProps extends Action {
  type: BooksTypes.GET_BOOKS_LIST_SUCCESS;
  payload: {books: any[]};
}

export interface GetBooksListErrorProps extends Action {
  type: BooksTypes.GET_BOOKS_LIST_ERROR;
}

export interface GetBookProps extends Action {
  type: BooksTypes.GET_BOOK;
}

export interface GetBookSuccessProps extends Action {
  type: BooksTypes.GET_BOOK_SUCCESS;
}
export interface GetBookErrorProps extends Action {
  type: BooksTypes.GET_BOOK_ERROR;
}
