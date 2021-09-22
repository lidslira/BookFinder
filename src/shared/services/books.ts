import {SEARCH_BOOKS} from '../constants/api';
import request from './request';

export const searchBooks = async (text: string, index: number) => {
  try {
    const response = await request.get(SEARCH_BOOKS, {text, index});
    return response;
  } catch {
    return null;
  }
};

export const showBook = async (id: string) => {
  try {
    const response = await request.get('', id);
    return response;
  } catch {
    return null;
  }
};
