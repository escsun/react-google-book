import { BooksConstants } from "../constants";

import Book from "../models/book.model";

interface GoogleBooksQuery {
  type: BooksConstants.GOOGLE_BOOKS_QUERY;
  payload: string;
}

interface GoogleBooksQueryComplete {
  type: BooksConstants.GOOGLE_BOOKS_QUERY_COMPLETE;
  payload: Book[];
}

interface GoogleBooksQueryError {
  type: BooksConstants.GOOGLE_BOOKS_QUERY_ERROR;
  payload: string;
}

interface GoogleBooksRetrieve {
  type: BooksConstants.GOOGLE_BOOKS_RETRIEVE;
  payload: string;
}
interface GoogleBooksRetrieveSuccess {
  type: BooksConstants.GOOGLE_BOOKS_RETRIEVE_SUCCESS;
  payload: Book;
}

interface GoogleBooksRetrieveError {
  type: BooksConstants.GOOGLE_BOOKS_RETRIEVE_ERROR;
  payload: string;
}

export const googleBooksRetrieveSuccess = (payload: Book): GoogleBooksRetrieveSuccess => {
  return {
    type: BooksConstants.GOOGLE_BOOKS_RETRIEVE_SUCCESS,
    payload: payload
  };
};

export const googleBooksRetrieveError = (payload: string): GoogleBooksRetrieveError => {
  return {
    type: BooksConstants.GOOGLE_BOOKS_RETRIEVE_ERROR,
    payload: payload
  };
};

export const googleBooksRetrieve = (payload: string): GoogleBooksRetrieve => {
  return {
    type: BooksConstants.GOOGLE_BOOKS_RETRIEVE,
    payload: payload
  };
};

export type BooksAction =
  | GoogleBooksQuery
  | GoogleBooksQueryComplete
  | GoogleBooksQueryError
  | GoogleBooksRetrieve
  | GoogleBooksRetrieveError
  | GoogleBooksRetrieveSuccess;
