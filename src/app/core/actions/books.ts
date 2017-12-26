import { BooksConstants } from "../constants";

import IBooks from "../models/books.model";
import IBooksRoute from "../models/books-route.model";

interface IGoogleBooksQuery {
  type: BooksConstants.GOOGLE_BOOKS_QUERY;
  payload: IBooksRoute;
}

interface IGoogleBooksQueryInput {
  type: BooksConstants.GOOGLE_BOOKS_QUERY_INPUT;
  payload: string;
}

interface IGoogleBooksQueryComplete {
  type: BooksConstants.GOOGLE_BOOKS_QUERY_COMPLETE;
  payload: IBooks;
}

interface IGoogleBooksQueryError {
  type: BooksConstants.GOOGLE_BOOKS_QUERY_ERROR;
  payload: string;
}

export const googleBooksByQuery = (payload: IBooksRoute): IGoogleBooksQuery => {
  return {
    type: BooksConstants.GOOGLE_BOOKS_QUERY,
    payload: payload
  };
};

export const googleBooksByQueryComplete = (payload: IBooks): IGoogleBooksQueryComplete => {
  return {
    type: BooksConstants.GOOGLE_BOOKS_QUERY_COMPLETE,
    payload: payload
  };
};

export const googleBooksByQueryError = (payload: string): IGoogleBooksQueryError => {
  return {
    type: BooksConstants.GOOGLE_BOOKS_QUERY_ERROR,
    payload: payload
  };
};

export const googleBooksByQueryInput = (payload: string): IGoogleBooksQueryInput => {
  return {
    type: BooksConstants.GOOGLE_BOOKS_QUERY_INPUT,
    payload: payload
  };
};

export type BooksAction =
  IGoogleBooksQuery
  | IGoogleBooksQueryComplete
  | IGoogleBooksQueryError
  | IGoogleBooksQueryInput;
