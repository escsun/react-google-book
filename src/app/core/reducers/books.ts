import { BooksAction } from "../actions";
import { BooksConstants } from "../constants";

import Book from "../models/book.model";

export interface BooksState {
  books: Book[];
  bookById: Book;
  errorBookLoading: string;
}

const initialState: BooksState = {
  books: [],
  bookById: null,
  errorBookLoading: null
};

export const booksReducer = (state = initialState, action: BooksAction) => {
  switch (action.type) {
    case BooksConstants.GOOGLE_BOOKS_RETRIEVE_SUCCESS:
      return {...state, bookById: action.payload};
    case BooksConstants.GOOGLE_BOOKS_RETRIEVE_ERROR:
      return {...state, errorBookLoading: action.payload};
    // case BooksConstants.GOOGLE_BOOKS_QUERY_COMPLETE:
    //   return {...state, books: action.payload };
    default:
      return state;
  }
};
