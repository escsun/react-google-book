import { Reducer } from "redux";
import { BooksAction } from "../actions";
import { BooksConstants } from "../constants";
import { RootState } from "./index";

import IBooks from "../models/books.model";

export interface IBooksState {
  items: IBooks;
  error: string;
}

const initialState: IBooksState = {
  items: { kind: null, totalItems: 0, items: []},
  error: null
};

export namespace BooksQuery {
  export const getBooks = (state: RootState) => state.books.items;
  export const getBooksError = (state: RootState) => state.books.error;
}

export const booksReducer: Reducer<IBooksState> = (state = initialState, action: BooksAction) => {
  switch (action.type) {
    case BooksConstants.GOOGLE_BOOKS_QUERY:
      return {...state, items: null, error: null};
    case BooksConstants.GOOGLE_BOOKS_QUERY_COMPLETE:
      return {...state, items: action.payload};
    case BooksConstants.GOOGLE_BOOKS_QUERY_ERROR:
      return {...state, error: action.payload};
    default:
      return state;
  }
};
