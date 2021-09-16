import {all, takeLatest, call, put} from 'redux-saga/effects';

import {searchBooks} from '~/shared/services/books';

import {BooksTypes, GetBooksListProps} from './types';

import {getBooksListSuccessAction, getBooksListErrorAction} from './actions';

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
      yield put(getBooksListSuccessAction(response.data.items));
    } else {
      yield put(getBooksListErrorAction());
    }
  } catch {
    yield put(getBooksListErrorAction());
  }
}

export default function* watchSaga() {
  yield all([takeLatest(BooksTypes.GET_BOOKS_LIST, getBooksSagas)]);
}
