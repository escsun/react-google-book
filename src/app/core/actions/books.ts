import { BooksConstants } from "../constants";

import IBooks from "../models/books.model";

interface IGoogleByBooksQuery {
  type: BooksConstants.GOOGLE_BOOKS_QUERY;
  payload: string;
}

interface IGoogleBooksByQueryComplete {
  type: BooksConstants.GOOGLE_BOOKS_QUERY_COMPLETE;
  payload: IBooks;
}

interface IGoogleBooksByQueryError {
  type: BooksConstants.GOOGLE_BOOKS_QUERY_ERROR;
  payload: string;
}

export const googleBooksByQuery = (payload: string): IGoogleByBooksQuery => {
  return {
    type: BooksConstants.GOOGLE_BOOKS_QUERY,
    payload: payload
  };
};

export const googleBooksByQueryComplete = (payload: IBooks): IGoogleBooksByQueryComplete => {
  return {
    type: BooksConstants.GOOGLE_BOOKS_QUERY_COMPLETE,
    payload: payload
  };
};

export const googleBooksByQueryError = (payload: string): IGoogleBooksByQueryError => {
  return {
    type: BooksConstants.GOOGLE_BOOKS_QUERY_ERROR,
    payload: payload
  };
};

export type BooksAction =
  IGoogleByBooksQuery
  | IGoogleBooksByQueryComplete
  | IGoogleBooksByQueryError;
