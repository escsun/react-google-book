import { BooksConstants } from "../constants";

import IBook from "../models/book.model";
import IBooks from "../models/books.model";

interface GoogleBooksQuery {
  type: BooksConstants.GOOGLE_BOOKS_QUERY;
  payload: string;
}

interface GoogleBooksQueryComplete {
  type: BooksConstants.GOOGLE_BOOKS_QUERY_COMPLETE;
  payload: IBooks;
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
  payload: IBook;
}

interface GoogleBooksRetrieveError {
  type: BooksConstants.GOOGLE_BOOKS_RETRIEVE_ERROR;
  payload: string;
}

interface GoogleBooksRetrieveClean {
  type: BooksConstants.GOOGLE_BOOKS_RETRIEVE_CLEAN;
}

export const googleBooksQuery = (payload: string): GoogleBooksQuery => {
  return {
    type: BooksConstants.GOOGLE_BOOKS_QUERY,
    payload: payload
  };
};

export const googleBooksQueryComplete = (payload: IBooks): GoogleBooksQueryComplete => {
  return {
    type: BooksConstants.GOOGLE_BOOKS_QUERY_COMPLETE,
    payload: payload
  };
};

export const googleBooksQueryError = (payload: string): GoogleBooksQueryError => {
  return {
    type: BooksConstants.GOOGLE_BOOKS_QUERY_ERROR,
    payload: payload
  };
};

export const googleBooksRetrieveSuccess = (payload: IBook): GoogleBooksRetrieveSuccess => {
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

export const googleBooksRetrieveClean = (): GoogleBooksRetrieveClean => {
  return {
    type: BooksConstants.GOOGLE_BOOKS_RETRIEVE_CLEAN
  };
};

export type BooksAction =
  | GoogleBooksQuery
  | GoogleBooksQueryComplete
  | GoogleBooksQueryError
  | GoogleBooksRetrieve
  | GoogleBooksRetrieveError
  | GoogleBooksRetrieveSuccess;
