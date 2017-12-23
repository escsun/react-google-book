import { Action } from "redux";
import { BooksAction } from "../actions";
import { BooksConstants } from "../constants";

import IBook from "../models/book.model";
import IBooks from "../models/books.model";

export interface BooksState {
  books: IBooks;
  bookById: IBook;
  errorBookLoading: string;
}

const initialState: BooksState = {
  books: null,
  bookById: null,
  errorBookLoading: null,
};

export const booksReducer = (state = initialState, action: BooksAction & Action) => {
  switch (action.type) {
    case BooksConstants.GOOGLE_BOOKS_RETRIEVE_SUCCESS:
      return {...state, bookById: action.payload};
    case BooksConstants.GOOGLE_BOOKS_RETRIEVE_ERROR:
      return {...state, errorBookLoading: action.payload};
    case BooksConstants.GOOGLE_BOOKS_QUERY_COMPLETE:
      return {...state, books: action.payload};
    case BooksConstants.GOOGLE_BOOKS_RETRIEVE_CLEAN:
      return {...state, bookById: null};
    // case BooksConstants.GOOGLE_BOOKS_QUERY_ERROR:
    //   return state;
    default:
      return state;
  }
};
