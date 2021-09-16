import {action} from 'typesafe-actions';

import {
  BooksTypes,
  GetBooksListProps,
  GetBooksListSuccessProps,
  GetBooksListErrorProps,
  GetBookProps,
  GetBookSuccessProps,
  GetBookErrorProps,
} from './types';

export const getBooksListAction = (text: string): GetBooksListProps =>
  action(BooksTypes.GET_BOOKS_LIST, {text});
export const getBooksListSuccessAction = (
  books: any,
): GetBooksListSuccessProps =>
  action(BooksTypes.GET_BOOKS_LIST_SUCCESS, {books});
export const getBooksListErrorAction = (): GetBooksListErrorProps =>
  action(BooksTypes.GET_BOOKS_LIST_ERROR);
export const getBookAction = (book: any): GetBookProps =>
  action(BooksTypes.GET_BOOK, {book});
export const getBookSuccessAction = (): GetBookSuccessProps =>
  action(BooksTypes.GET_BOOK_SUCCESS);
export const getBookErrorAction = (): GetBookErrorProps =>
  action(BooksTypes.GET_BOOK_ERROR);
