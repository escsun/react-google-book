import { BooksConstants } from "../constants";

import Book from "../models/book.model";
import Books from "../models/books.model";

interface GoogleBooksQuery {
  type: BooksConstants.GOOGLE_BOOKS_QUERY;
  payload: string;
}

interface GoogleBooksQueryComplete {
  type: BooksConstants.GOOGLE_BOOKS_QUERY_COMPLETE;
  payload: Books;
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

export const googleBooksQuery = (payload: string): GoogleBooksQuery => {
  return {
    type: BooksConstants.GOOGLE_BOOKS_QUERY,
    payload: payload
  };
};

export const googleBooksQueryComplete = (payload: Books): GoogleBooksQueryComplete => {
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
