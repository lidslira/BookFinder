import {Action} from 'redux';
import {Book, VolumeInfoProps} from '~/dtos';

export enum BooksTypes {
  GET_BOOKS_LIST = 'GET_BOOKS_LIST',
  GET_BOOKS_LIST_SUCCESS = 'GET_BOOKS_LIST_SUCCESS',
  GET_BOOKS_LIST_ERROR = 'GET_BOOKS_LIST_ERROR',

  GET_BOOK = 'GET_BOOK',
  GET_BOOK_SUCCESS = 'GET_BOOK_SUCCESS',
  GET_BOOK_ERROR = 'GET_BOOK_ERROR',
}

export interface BooksState {
  loading: boolean;
  books: [];
  totalBooksFound: number;
  booksHasError: boolean;
  book: Book;
  bookHasError: boolean;
}

export interface GetBooksListProps extends Action {
  type: BooksTypes.GET_BOOKS_LIST;
  payload: {text: string};
}

export interface GetBooksListSuccessProps extends Action {
  type: BooksTypes.GET_BOOKS_LIST_SUCCESS;
  payload: {books: VolumeInfoProps; totalItems: number};
}

export interface GetBooksListErrorProps extends Action {
  type: BooksTypes.GET_BOOKS_LIST_ERROR;
}

export interface GetBookProps extends Action {
  type: BooksTypes.GET_BOOK;
  payload: {id: string};
}

export interface GetBookSuccessProps extends Action {
  type: BooksTypes.GET_BOOK_SUCCESS;
  payload: {book: Book};
}
export interface GetBookErrorProps extends Action {
  type: BooksTypes.GET_BOOK_ERROR;
}
