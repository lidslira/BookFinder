import {action} from 'typesafe-actions';
import {VolumeInfoProps, Book} from '~/dtos';

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
  books: VolumeInfoProps,
  totalItems: number,
): GetBooksListSuccessProps =>
  action(BooksTypes.GET_BOOKS_LIST_SUCCESS, {books, totalItems});
export const getBooksListErrorAction = (): GetBooksListErrorProps =>
  action(BooksTypes.GET_BOOKS_LIST_ERROR);
export const getBookAction = (id: string): GetBookProps =>
  action(BooksTypes.GET_BOOK, {id});
export const getBookSuccessAction = (book: Book): GetBookSuccessProps =>
  action(BooksTypes.GET_BOOK_SUCCESS, {book});
export const getBookErrorAction = (): GetBookErrorProps =>
  action(BooksTypes.GET_BOOK_ERROR);
