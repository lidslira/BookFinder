import {all, takeLatest, call, put} from 'redux-saga/effects';

import {searchBooks, showBook} from '~/shared/services/books';

import {BooksTypes, GetBooksListProps, GetBookProps} from './types';

import {
  getBooksListSuccessAction,
  getBooksListErrorAction,
  getBookSuccessAction,
  getBookErrorAction,
} from './actions';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status: number;
  statusText?: string;
}

function* getBooksSagas(action: GetBooksListProps) {
  try {
    const response: ResponseGenerator = yield call(
      searchBooks,
      action.payload.text,
    );

    if (response.status >= 200 && response.status < 300) {
      yield put(
        getBooksListSuccessAction(
          response.data.items,
          response.data.totalItems,
        ),
      );
    } else {
      yield put(getBooksListErrorAction());
    }
  } catch {
    yield put(getBooksListErrorAction());
  }
}

function* showBookSagas(action: GetBookProps) {
  try {
    const response: ResponseGenerator = yield call(showBook, action.payload.id);

    if (response.status >= 200 && response.status < 300) {
      yield put(getBookSuccessAction(response.data.items));
    } else {
      yield put(getBookErrorAction());
    }
  } catch {
    yield put(getBookErrorAction());
  }
}

export default function* watchSaga() {
  yield all([
    takeLatest(BooksTypes.GET_BOOKS_LIST, getBooksSagas),
    takeLatest(BooksTypes.GET_BOOK, showBookSagas),
  ]);
}
